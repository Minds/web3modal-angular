import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Web3ModalModule, Web3ModalService } from '@mindsorg/web3modal-angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        Web3ModalModule
    ],
    providers: [Web3ModalService],
    bootstrap: [AppComponent]
})
export class AppModule { }
