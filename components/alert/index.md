---
title: Alert 警告提示
group:
  title: Alert 警告提示
nav:
  title: '组件'
  path: /components
---

## 警告样式

警告提示分为四种样式，默认是`warning`。

`success` | `info` | `warning` | `error`

<code src="./demos/type.tsx" />

## 含有辅助性文字介绍的警告提示

通过设置`description`属性。

<code src="./demos/description.tsx" />

## 可关闭的警告提示

设置`closable`属性和添加`onClose`方法可显示关闭按钮，点击并可关闭警告提示。

<code src="./demos/closable.tsx" />

## API

| 参数        | 说明                                                                 | 类型                    | 默认值    |
| ----------- | -------------------------------------------------------------------- | ----------------------- | --------- |
| closable    | 默认不显示关闭按钮                                                   | boolean                 | -         |
| description | 警告提示的辅助性文字介绍                                             | ReactNode               | -         |
| message     | 警告提示内容                                                         | ReactNode               | -         |
| type        | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string                  | `warning` |
| onClose     | 关闭时触发的回调函数                                                 | (e: MouseEvent) => void | -         |
