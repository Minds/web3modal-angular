import { CommonModule as NgCommonModule } from '@angular/common';
import {
  NgModule,
} from '@angular/core';
import { Modal } from '../modal/modal.component';
import { Web3ModalMetamaskLogoComponent } from './web3-modal-metamask-logo.component';
import { Web3ModalComponent } from './web3-modal.component';

@NgModule({
  imports: [NgCommonModule],
  declarations: [Modal, Web3ModalComponent, Web3ModalMetamaskLogoComponent],
  exports: [Web3ModalComponent],
})
export class Web3ModalModule { }
