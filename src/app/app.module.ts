import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileModule } from './page/mobile/mobile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Vant18nModule, VANT_I18N } from 'ngx-vant-revive/i18n';


import { CellModule } from 'ngx-vant-revive/cell';
import { TabsModule } from 'ngx-vant-revive/tabs';
import { IconModule } from "ngx-vant-revive/icon";
import { ButtonModule } from "ngx-vant-revive/button";
import { RowModule } from "ngx-vant-revive/row";
import { LoadingModule } from "ngx-vant-revive/loading";
import { ToastModule } from "ngx-vant-revive/toast";
import { NavBarModule } from "ngx-vant-revive/nav-bar";
import { ColModule } from "ngx-vant-revive/col";
import { ProgressModule } from "ngx-vant-revive/progress";
import { ImageModule } from "ngx-vant-revive/image";
import { OverlayModule } from "ngx-vant-revive/overlay";
import { FieldModule } from "ngx-vant-revive/field";
import { PopupModule } from "ngx-vant-revive/popup";
import { NotifyModule } from "ngx-vant-revive/notify";
import { TagModule } from "ngx-vant-revive/tag";
import { StickyModule } from "ngx-vant-revive/sticky";
import { PickerModule } from "ngx-vant-revive/picker";
import { TabModule } from "ngx-vant-revive/tab";
import { CellGroupModule } from "ngx-vant-revive/cell-group";


import { ButtonComponent } from './page/mobile/button/button.component';
import { CellComponent } from './page/mobile/cell/cell.component';
import { FieldComponent } from './page/mobile/field/field.component';
import {  MHomeComponent } from './page/mobile/home/home.component';
import { IconComponent } from './page/mobile/icon/icon.component';
import { ImageComponent } from './page/mobile/image/image.component';
import { LayoutComponent } from './page/mobile/layout/layout.component';
import { LoadingComponent } from './page/mobile/loading/loading.component';
import { MobileComponent } from './page/mobile/mobile.component';
import { NavBarComponent } from './page/mobile/nav-bar/nav-bar.component';
import { NotifyComponent } from './page/mobile/notify/notify.component';
import { OverlayComponent } from './page/mobile/overlay/overlay.component';
import { PickerComponent } from './page/mobile/picker/picker.component';
import { PopupComponent } from './page/mobile/popup/popup.component';
import { ProgressComponent } from './page/mobile/progress/progress.component';
import { StickyComponent } from './page/mobile/sticky/sticky.component';
import { TabsComponent } from './page/mobile/tabs/tabs.component';
import { TagComponent } from './page/mobile/tag/tag.component';
import { ToastComponent } from './page/mobile/toast/toast.component';
import { DemoComponent } from './page/mobile/components/demo/demo.component';
import { VanDocDemoCardComponent } from './page/mobile/components/van-doc-demo-card/van-doc-demo-card.component';
import { HeaderComponent } from './components/header/header.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { IndexComponent } from './page/index/index.component';
import { NavComponent } from './components/nav/nav.component';
import { MNavComponent } from './page/mobile/components/nav/nav.component';
import zh_CN from './common/i18n/languages/zh_CN';


const NGX_VANT = [
    IconModule, ButtonModule, LoadingModule,
    NavBarModule, ImageModule, RowModule, ColModule,
    ToastModule, ProgressModule, CellModule, CellGroupModule, FieldModule,
    OverlayModule, PopupModule, TabsModule, TabModule, NotifyModule,
    TagModule, StickyModule, PickerModule,Vant18nModule
]

@NgModule({
    declarations: [
        AppComponent,

        ButtonComponent, NavComponent, DemoComponent,
        IconComponent, MobileComponent, LoadingComponent, MHomeComponent,
        NavBarComponent, ImageComponent, LayoutComponent, ToastComponent,
        ProgressComponent, CellComponent, FieldComponent, OverlayComponent,
        PopupComponent, VanDocDemoCardComponent, TabsComponent, NotifyComponent,
        TagComponent, StickyComponent,
        PickerComponent,
        
        HeaderComponent,IndexComponent,
        NavComponent, SimulatorComponent,MNavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MobileModule,
        BrowserAnimationsModule,
        ...NGX_VANT,
        
    ],
    providers: [{ provide: VANT_I18N, useValue: zh_CN }],

    bootstrap: [AppComponent]
})
export class AppModule { }
