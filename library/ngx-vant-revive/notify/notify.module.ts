import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from './notify.component';
import { NotifyServiceModule } from './notify.service.module';
import {OverlayModule} from '@angular/cdk/overlay';
import { PopupModule } from 'ngx-vant-revive/popup';

@NgModule({
    imports: [
        CommonModule, OverlayModule,NotifyServiceModule,PopupModule
    ],
    exports: [NotifyComponent],
    declarations: [NotifyComponent]
})
export class NotifyModule { }
