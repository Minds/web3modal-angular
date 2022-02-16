import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProviderUserOptions } from '../web3modal-ts/src';
import { Web3ModalService } from './web3-modal.service';

@Component({
  selector: 'm-web3-modal',
  templateUrl: 'web3-modal.component.html',
  styleUrls: ['./web3-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Web3ModalComponent implements OnInit, OnDestroy {
  open = false;
  providers: IProviderUserOptions[] = [];
  showMetamaskDownload: boolean;

  private openSubscription: Subscription;
  private providersSubscription: Subscription;
  private readonly metamaskShopURL = 'https://metamask.io/download.html';

  @Input() title: string;
  @Input() description?: string;
  @Input() descriptionGray?: string;
  @Input() dismissText?: string;
  @Input() promptMetamaskIfNotInstalled = false;

  constructor(private service: Web3ModalService) {}

  ngOnInit(): void {
    this.openSubscription = this.service.shouldOpen.subscribe({
      next: (open: boolean) => {
        this.open = open;
      },
    });

    this.providersSubscription = this.service.providers.subscribe({
      next: (providers: IProviderUserOptions[]) => {
        this.showMetamaskDownload =
          this.promptMetamaskIfNotInstalled &&
          !this.isMetamaskInProviders(providers);
        this.providers = providers;
      },
    });
  }

  ngOnDestroy(): void {
    this.openSubscription.unsubscribe();
    this.providersSubscription.unsubscribe();
  }

  close(): void {
    this.service.close();
  }

  private isMetamaskInProviders(providers: IProviderUserOptions[]): boolean {
    return providers.some((p) => p.name.toLowerCase() === 'metamask');
  }

  private openMetamaskDownloadPage(): void {
    window.open(this.metamaskShopURL, '_blank');
  }
}
