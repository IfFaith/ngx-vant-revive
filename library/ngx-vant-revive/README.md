<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">ngx-vant-revive</h1>

<p align="center">Mobile UI Components built on Angular</p>

<!-- <p align="center">
    <img src="https://img.shields.io/npm/v/vant.svg?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/github/workflow/status/youzan/vant/CI/dev?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/dev.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square&color=#4fc08d" alt="downloads" />
    <img src="https://img.shields.io/jsdelivr/npm/hm/vant?style=flat-square" alt="Jsdelivr Hits">
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/vant.min.js?compression=gzip&style=flat-square&label=gzip%20size&color=#4fc08d" alt="Gzip Size" />
</p> -->

<p align="center">
  🔥 <a href="https://ngx-vant-revive.github.io/ngx-vant-revive">文档网站</a>
  &nbsp;
  &nbsp;
  
  <!-- 🚀 <a href="https://github.com/youzan/vant-weapp" target="_blank">小程序版</a> -->
</p>

---

## Features

- 65+ Reusable components
- 1kb Component average size (min+gzip)
- Extensive documentation and demos
- Support Angular14
- Support Tree Shaking
- Support Custom Theme
- Support i18n
- Support TS
- Support SSR

## Install

```bash
npm i ngx-vant-revive -S
```

## Quickstart

```js
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ButtonModule } from "ngx-vant-revive";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

See more in [Quickstart](https://github.com/IfFaith/ngx-vant-revive).

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/IfFaith/ngx-vant-revive) before making a pull request.

## Browser Support

Modern browsers and Android 4.0+, iOS 8.0+.

## Links

- [Documentation](https://github.com/IfFaith/ngx-vant-revive)

## LICENSE

[MIT](https://en.wikipedia.org/wiki/MIT_License)

<!-- 发布：
1、npm run package  等一会儿，等所有等包生成完之后，再执行第二步
2、cd /dist/ngx-vant-revive  执行 npm publish -->
