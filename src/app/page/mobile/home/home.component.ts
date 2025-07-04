import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {  VantI18nService } from 'ngx-vant-revive/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import en_US from 'src/app/common/i18n/languages/en_US';
import zh_CN from 'src/app/common/i18n/languages/zh_CN';
import { navConfig, navEnConfig } from './config'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class MHomeComponent implements OnInit, OnDestroy {
    navConfig = navConfig
    private _unSubject = new Subject<void>();
    constructor(
        private router: Router,
        private vantI18n: VantI18nService,
    ) { 

        this.router.events.subscribe((event: any) => {
            // console.log(event)
            if (event instanceof NavigationEnd) {
                const host = window.location.href.split('/#/')
                console.log(host[1].split('/')[0])
                const lang = host[1].split('/')[0] !== 'en_US' ? en_US : zh_CN
                this.vantI18n.setLocale(lang);
            }
        })


    }
    ngOnInit() {
        this.vantI18n.localeChange
            .pipe(
                takeUntil(this._unSubject)
            ).subscribe(({ locale }) => {
                console.log(locale)
                console.log(locale === 'en_US')
                this.navConfig = locale !== 'en_US' ? navEnConfig : navConfig
            })
    }
    ngOnDestroy() {
        this._unSubject.next();
        this._unSubject.unsubscribe();
    }
}
