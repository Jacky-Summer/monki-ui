---
title: Select 选择器
group:
  title: Select 选择器
nav:
  title: '组件'
  path: /components
---

### 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

### 基本使用

<code src="./demos/base.tsx" />

### 多选

多选，从已有条目中选择。设置`multiple`属性

<code src="./demos/multiple.tsx" />

### 禁用

<code src="./demos/disabled.tsx" />

### API

#### Select

| 参数            | 说明                  | 类型                                             | 默认值  |
| --------------- | --------------------- | ------------------------------------------------ | ------- |
| defaultValue    | 默认选中的选项        | string \| string\[]                              | -       |
| placeholder     | 选择框默认文本        | string                                           | -       |
| disabled        | 是否禁用              | boolean                                          | `false` |
| multiple        | 是否支持多选          | boolean                                          | -       |
| onChange        | 选中值发生变化时触发  | function(value:string, selectedValues:string\[]) | -       |
| onVisibleChange | 下拉框出现/隐藏时触发 | function(visible:boolean)                        | -       |

#### Select.Option

| 参数     | 说明                                    | 类型    | 默认值 |
| -------- | --------------------------------------- | ------- | ------ |
| index    | item 的唯一标志                         | string  | -      |
| value    | 默认根据此属性值进行筛选，该值不能相同  | string  | -      |
| label    | 选项的标签，若不设置则默认与 value 相同 | string  | -      |
| disabled | 是否禁用                                | boolean | false  |
