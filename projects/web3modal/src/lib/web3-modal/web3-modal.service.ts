import { EventEmitter, Injectable, Optional } from '@angular/core';
import {
  CONNECT_EVENT,
  ERROR_EVENT,
  IProviderControllerOptions,
  Web3WalletConnector,
  IProviderUserOptions
} from '@dorgtech/web3modal-ts';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class Web3ModalService {
  private web3WalletConnector: Web3WalletConnector

  public shouldOpen: EventEmitter<boolean> = new EventEmitter();
  public providers: EventEmitter<IProviderUserOptions[]> = new EventEmitter();

  constructor (@Optional() configOptions?: IProviderControllerOptions) {
    this.web3WalletConnector = new Web3WalletConnector(configOptions)
  }

  async open() {
    this.providers.next(this.web3WalletConnector.providers)

    const onSuccess$: Subject<any> = new Subject();

    this.web3WalletConnector.providerController.on(CONNECT_EVENT, provider => {
      onSuccess$.next(provider);
      onSuccess$.complete();
      this.close()
    });

    this.web3WalletConnector.providerController.on(ERROR_EVENT, error => {
      onSuccess$.error(error);
      this.close()
    });

    this.shouldOpen.next(true)

    this.shouldOpen.pipe(take(1)).subscribe({
      next: (open) => {
        if (!open && !onSuccess$.isStopped) {
          onSuccess$.error('Dismissed modal');
        }
      }
    })

    if (!this.shouldOpen && !onSuccess$.isStopped) {
      onSuccess$.error('Dismissed modal');
    }

    return onSuccess$.toPromise();
  }

  setConfiguration(options: IProviderControllerOptions) {
    this.web3WalletConnector.setConfiguration(options)
  }

  clearCachedProvider(): void {
    this.web3WalletConnector.providerController.clearCachedProvider();
  }

  setCachedProvider(id: string): void {
    this.web3WalletConnector.providerController.setCachedProvider(id);
  }

  close() {
    this.shouldOpen.next(false)
  }
  
  _() {

  }
}
