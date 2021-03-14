---
title: Tag 标签
group:
  title: Tag 标签
nav:
  title: '组件'
  path: /components
---

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 基本

<code src="./demos/base.tsx" />

## 颜色

<code src="./demos/color.tsx" />

## 尺寸

<code src="./demos/size.tsx" />

## API

| 参数     | 说明             | 类型       | 默认值 |
| -------- | ---------------- | ---------- | ------ |
| closable | 标签是否可以关闭 | boolean    | false  |
| color    | 标签色           | string     | -      |
| text     | Tag 的文本       | string     | -      |
| size     | Tag 的尺寸       | string     | -      |
| onClose  | 关闭时的回调     | () => void | -      |
