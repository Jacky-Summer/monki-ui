---
title: Button
group:
  title: Button
nav:
  title: '组件'
  path: /components
---

### 按钮类型

按钮分为五种类型`type`，默认是`default`。

`default` | `primary` | `info` | `warning` | `danger` | `dashed` | `link` | `text`

<code src="./demo/type.tsx" />

### 按钮尺寸

尺寸`size`分为大、中、小，默认尺寸是中。

`lg` | `md` | `sm`

<code src="./demo/size.tsx" />

### 按钮形状

通过设置`shape`属性来控制按钮形状，可设置圆形和圆角，默认不设置。

`circle` | `round`

<code src="./demo/shape.tsx" />

### 不可用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<code src="./demo/disabled.tsx" />

### 加载中按钮

添加`loading`属性即可让按钮处于加载状态。

### Block 按钮

`block`属性将使按钮适合其父宽度，默认不设置。

<code src="./demo/block.tsx" />

### 图标按钮

当需要在 Button 内嵌入 Icon 时，可以设置`icon`属性，或者直接在 Button 内使用 Icon 组件。

<code src="./demo/icon.tsx" />
