# Image

### Install

```js
import ImageModule from 'ngx-vant-revive/image';
```

## Usage

### Basic Usage

```html
<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### Fit Mode

```html
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Round

Show round image, it may not works at `fit=contain` and `fit=scale-down`.

```html
<van-image
  [round]="true"
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Loading

```html
<van-image
    width="10rem"
    height="10rem"
    [showLoading]="true"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
</van-image>
```

### Loading Error

```html
<van-image
    width="10rem"
    height="10rem"
    [showError]="true"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
</van-image>
```


## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| src | Src | _string_ | - |
| fit | Fit mode | _string_ | `fill` |
| alt | Alt | _string_ | - |
| width | Width | _number \| string_ | - |
| height | Height | _number \| string_ | - |
| radius | Border Radius | _number \| string_ | `0` |
| round | Whether to be round | _boolean_ | `false` |
| showError | Whether to show error placeholder | _boolean_ | `true` |
| showLoading | Whether to show loading placeholder | _boolean_ | `true` |
| errorIcon  | Error icon | _string_ | `photo-fail` |
| loadingIcon | Loading icon | _string_ | `photo` |

### fit optional value

| name | desctription |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of `none` or `contain` |

### Events

| Event | Description                    | Arguments      |
| ----- | ------------------------------ | -------------- |
| click | Emitted when image is clicked  | _event: MouseEvent_ |
| load  | Emitted when image loaded      | _event: Event_             |
| error | Emitted when image load failed | _event: Event_             |



### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                | Default Value       | Description |
| ----------------------------------- | ------------------- | ----------- |
| @image-placeholder-text-color       | `@gray-6`           | -           |
| @image-placeholder-font-size        | `@font-size-md`     | -           |
| @image-placeholder-background-color | `@background-color` | -           |
| @image-loading-icon-size            | `32px`              | -           |
| @image-loading-icon-color           | `@gray-4`           | -           |
| @image-error-icon-size              | `32px`              | -           |
| @image-error-icon-color             | `@gray-4`           | -           |
