---
title: Tabs 标签页
group:
  title: Tabs 标签页
nav:
  title: '组件'
  path: /components
---

### 基本

默认选中第一项。

<code src="./demos/base.tsx" />

### 禁用

禁用某一项。

<code src="./demos/disabled.tsx" />

### 卡片式页签

另一种样式的页签，不提供对应的垂直样式。

<code src="./demos/type.tsx" />

### API

#### Tabs

| 参数             | 说明                                         | 类型                  | 默认值 |
| ---------------- | -------------------------------------------- | --------------------- | ------ |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | number                | 0      |
| type             | 页签的基本样式，可选 line、card 类型         | string                | `line` |
| onTabClick       | tab 被点击的回调                             | function(key: number) | -      |

#### Tabs.TabPane

| 参数     | 说明             | 类型      | 默认值 |
| -------- | ---------------- | --------- | ------ |
| disabled | 是否禁用         | boolean   | false  |
| tab      | 选项卡头显示文字 | ReactNode | -      |
