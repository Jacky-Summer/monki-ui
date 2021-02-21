---
title: AutoComplete 自动完成
group:
  title: AutoComplete 自动完成
nav:
  title: '组件'
  path: /components
---

输入框自动完成功能。

### 何时使用

- 需要一个输入框而不是选择器。

- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入。

- Select 是在限定的可选项中进行选择，关键词是选择。

### 基本使用

<code src="./demos/base.tsx" />

### 自定义渲染下拉选项

<code src="./demos/renderOption.tsx" />

### ajax 请求下拉选项

<code src="./demos/ajaxSearch.tsx" />

### API

| 参数         | 说明                                  | 类型            |
| ------------ | ------------------------------------- | --------------- |
| onSearch     | 搜索补全项的时候调用                  | function(value) |
| onSelect     | 被选中时调用，参数为选中项的 value 值 | function(value) |
| renderOption | 自定义渲染下拉选项                    | function(value) |
