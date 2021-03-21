---
title: Input 输入框
group:
  title: Input 输入框
nav:
  title: '组件'
  path: /components
---

通过鼠标或键盘输入内容，是最基础的表单域的包装。

**何时使用**

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

### 基本使用

<code src="./demos/base.tsx" />

### 三种大小

输入框定义了三种尺寸 size（大`lg`、默认`md`、小`sm`）

<code src="./demos/size.tsx" />

### 禁用

设置禁用状态 `disabled`，默认为 false

<code src="./demos/disabled.tsx" />

### 前缀与后缀

在输入框上添加前缀`prefix`或后缀`suffix`图标。

<code src="./demos/prefix-suffix.tsx" />

### 图标

如添加一个向下箭头的图标

<code src="./demos/icon.tsx" />

### API

| 参数     | 说明                                           | 类型                 | 默认值 |
| -------- | ---------------------------------------------- | -------------------- | ------ |
| disabled | 是否禁用状态，默认为 false                     | boolean              | false  |
| id       | 输入框的 id                                    | string               | -      |
| prefix   | 带有前缀图标的 input                           | ReactNode            | -      |
| size     | 控件大小。                                     | `lg` \| `md` \| `sm` | -      |
| suffix   | 带有后缀图标的 input                           | ReactNode            | -      |  |
| type     | 声明 input 类型，同原生 input 标签的 type 属性 | string               | `text` |
| value    | 输入框内容                                     | string               | -      |
| icon     | 图标                                           | ReactNode            | -      |
| onChange | 输入框内容变化时的回调                         | function(e)          | -      |

Input 的其他属性和 React 自带的 [input](https://facebook.github.io/react/docs/events.html#supported-events) 一致。
