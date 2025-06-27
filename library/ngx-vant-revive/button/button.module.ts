import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ngx-vant-revive/icon';
import { LoadingModule } from 'ngx-vant-revive/loading'
import { ButtonComponent } from './button.component';
import { Vant18nModule } from 'ngx-vant-revive/i18n';
@NgModule({
    imports: [
        CommonModule,
        LoadingModule, IconModule,
        Vant18nModule
    ],

    exports: [ButtonComponent],
    declarations: [ButtonComponent]
})
export class ButtonModule { }
