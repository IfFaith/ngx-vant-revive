# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 引入

```js
import { ToastService } from "ngx-vant-revive/toast/toast.service";

constructor(private toastService: ToastService) {}
```

## 代码演示

### 文字提示

```js
this.toastService.create({
  content: "文字提示",
});
```

### 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以控制禁用背景点击，默认是 true，即禁止点击。

```js
this.toastService.loading({
  content: "加载中",
  duration: 2000,
});
```

### 成功/失败提示

使用 `Toast.success` 方法展示成功提示，使用 `Toast.fail` 方法展示失败提示。

```js
this.toastService.success({
  content: "成功提示",
  duration: 2000,
});
this.toastService.success({
  content: "失败提示",
  duration: 2000,
});
```

### 自定义图标

通过 `iconType` 选项可以自定义图标，支持传入[图标名称](#/zh-CN/icon)或图片链接。

```js
this.toastService.create({
  content: "自定义图标",
  iconType: "circle",
  duration: 2000,
});
this.toastService.create({
  content: "自定义图标",
  iconType: "https://img.yzcdn.cn/vant/logo.png",
  duration: 2000,
});
```

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```js
this.toastService.create({
  content: "顶部展示",
  position: "top",
  duration: 2000,
});

this.toastService.create({
  content: "底部展示",
  position: "bottom",
  duration: 2000,
});
```

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 `content` 属性可以实现动态更新提示的效果。

```js
const toast = this.toastService.create({
  content: "动态文本",
  type: "loading",
});
setTimeout(() => {
  toast.content = "文字变化了";
  toast.type = "success";
  setTimeout(() => {
    this.toastService.clear(); // 手动清除 Toast
  }, 2000);
}, 1000);
```

### 单例模式

Toast 采用单例模式，即同一时间只会存在一个 Toast，不支持展示多个


## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Toast.create | 展示提示 | `options` | toast 实例 |
| Toast.loading | 展示加载提示 | `options` | toast 实例 |
| Toast.success | 展示成功提示 | `options` | toast 实例 |
| Toast.fail | 展示失败提示 | `options` | toast 实例 |
| Toast.clear | 关闭提示 | - | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success`<br>`fail`  | _string_ | - |
| position | 位置，可选值为 `top` `bottom` | _string_ | `middle` |
| content | 文本内容，支持通过`\n`换行 | _string_ | `''` | - |
| iconType | 自定义图标，支持传入[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| iconSize | 图标的大小，同图标的size | _string_ | `24px` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `true` |
| duration | 展示时长(ms)，值为空或 0 时，toast 不会消失 | _number_ | - |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/basic/theme)。

| 名称                            | 默认值                    | 描述 |
| ------------------------------- | ------------------------- | ---- |
| @toast-max-width                | `70%`                     | -    |
| @toast-font-size                | `@font-size-md`           | -    |
| @toast-text-color               | `@white`                  | -    |
| @toast-line-height              | `@line-height-md`         | -    |
| @toast-border-radius            | `@border-radius-lg`       | -    |
| @toast-text-min-width           | `96px`                    | -    |
| @toast-radius-sm                | `3px`                     | -    |
| @toast-fill                     | `rgba(58, 58, 58, 0.9)` | -    |
| @toast-zindex                   | `3000`                    | -    |
| @toast-v-spacing-sm             | `6px`                     | -    |
| @toast-v-spacing-lg             | `15px`                    | -    |
| @toast-h-spacing-lg             | `15px`                    | -    |
