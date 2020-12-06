---
title: Menu 导航菜单
group:
  title: Menu 导航菜单
nav:
  title: '组件'
  path: /components
---

### 顶部导航

水平的顶部导航菜单。`mode`值为`horizontal`。

<code src="./demos/horizontal.tsx" />

### 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。`mode`值为`inline`。

<code src="./demos/inline.tsx" />

### 只展开当前父级菜单

通过`defaultOpenKeys`设置当前展开的 SubMenu 菜单项 key 数组

点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

<code src="./demos/defaultOpenKeys.tsx" />

### 切换菜单类型

展示动态切换模式。

<code src="./demos/mode.tsx" />

### API

#### Menu

| 参数                | 说明                                   | 类型                                       | 默认值   |
| ------------------- | -------------------------------------- | ------------------------------------------ | -------- |
| defaultOpenKeys     | 初始展开的 SubMenu 菜单项 key 数组     | string\[]                                  | -        |
| defaultSelectedKeys | 初始选中的菜单项 key 数组              | string                                     | -        |
| mode                | 菜单类型，现在支持水平、和内嵌模式三种 | `horizontal` \| `inline`                   | `inline` |
| style               | 根节点样式                             | CSSProperties                              | -        |
| onClick             | 点击 MenuItem 调用此函数               | function({ item, key, keyPath, domEvent }) | -        |

#### Menu.Item

| 参数     | 说明            | 类型    | 默认值 |
| -------- | --------------- | ------- | ------ |
| disabled | 是否禁用        | boolean | false  |
| index    | item 的唯一标志 | string  | -      |

#### Menu.SubMenu

| 参数     | 说明           | 类型                          | 默认值 |
| -------- | -------------- | ----------------------------- | ------ |
| children | 子菜单的菜单项 | Array&lt;MenuItem \| SubMenu> | -      |
| index    | 唯一标志       | string                        | -      |
| title    | 子菜单项值     | ReactNode                     | -      |
