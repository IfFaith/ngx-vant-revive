# Toast

### Introduction

A black semi-transparent prompt pops up in the middle of the page, used for message notifications, loading prompts, operation result prompts, and other scenarios.

### Import

```js
import { ToastService } from "ngx-vant-revive/toast/toast.service";

constructor(private toastService: ToastService) {}
```

## Code Examples

### Text Prompt

```js
this.toastService.create({
  content: "Text prompt",
});
```

### Loading Prompt

Use the `Toast.loading` method to display a loading prompt. The `forbidClick` property can be used to disable background clicks. The default is true, which means clicks are disabled.

```js
this.toastService.loading({
  content: "Loading...",
  duration: 2000,
});
```

### Success/Failure Prompt

Use the `Toast.success` method to display a success prompt, and use the `Toast.fail` method to display a failure prompt.

```js
this.toastService.success({
  content: "Success prompt",
  duration: 2000,
});
this.toastService.success({
  content: "Failure prompt",
  duration: 2000,
});
```

### Custom Icon

You can customize the icon through the `iconType` option. It supports passing in [icon names](#/zh-CN/icon) or image URLs.

```js
this.toastService.create({
  content: "Custom icon",
  iconType: "circle",
  duration: 2000,
});
this.toastService.create({
  content: "Custom icon",
  iconType: "https://img.yzcdn.cn/vant/logo.png",
  duration: 2000,
});
```

### Custom Position

Toast is rendered in the center of the screen by default. You can control the position of the Toast through the `position` property.

```js
this.toastService.create({
  content: "Show at top",
  position: "top",
  duration: 2000,
});

this.toastService.create({
  content: "Show at bottom",
  position: "bottom",
  duration: 2000,
});
```

### Dynamically Update Prompt

Calling the Toast method returns the corresponding Toast instance. You can dynamically update the prompt by modifying the `content` property on the instance.

```js
const toast = this.toastService.create({
  content: "Dynamic text",
  type: "loading",
});
setTimeout(() => {
  toast.content = "Text changed";
  toast.type = "success";
  setTimeout(() => {
    this.toastService.clear(); // Manually clear Toast
  }, 2000);
}, 1000);
```

### Singleton Mode

Toast uses singleton mode, which means only one Toast will exist at a time and multiple Toasts are not supported.


## API

### Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| Toast.create | Show prompt | `options` | toast instance |
| Toast.loading | Show loading prompt | `options` | toast instance |
| Toast.success | Show success prompt | `options` | toast instance |
| Toast.fail | Show failure prompt | `options` | toast instance |
| Toast.clear | Close prompt | - | `void` |

### Options

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| type | Prompt type, optional values: `loading` `success`<br>`fail`  | _string_ | - |
| position | Position, optional values: `top` `bottom` | _string_ | `middle` |
| content | Text content, supports line breaks with `\n` | _string_ | `''` | - |
| iconType | Custom icon, supports passing in [icon names](#/zh-CN/icon) or image URLs | _string_ | - |
| iconSize | Icon size, same as icon size | _string_ | `24px` |
| forbidClick | Whether to disable background clicks | _boolean_ | `true` |
| duration | Display duration (ms). If empty or 0, toast will not disappear | _number_ | - |

### Style Variables

The component provides the following Less variables for custom styles. For usage, please refer to [Theme Customization](#/basic/theme).

| Name                            | Default Value                    | Description |
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
