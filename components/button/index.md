---
title: Button 按钮
group:
  title: Button 按钮
nav:
  title: '组件'
  path: /components
---

### 按钮类型

按钮分为五种类型`type`，默认是`default`。

`default` | `primary` | `info` | `warning` | `danger` | `dashed` | `link` | `text`

<code src="./demos/type.tsx" />

### 按钮尺寸

尺寸`size`分为大、中、小，默认尺寸是中。

`lg` | `md` | `sm`

<code src="./demos/size.tsx" />

### 不可用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<code src="./demos/disabled.tsx" />

### Block 按钮

`block`属性将使按钮适合其父宽度，默认不设置。

<code src="./demos/block.tsx" />

### API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` > `size` -> `disabled`。

按钮的属性说明如下：

| 属性     | 说明                                                  | 类型                                                                                      | 默认值    |
| -------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------- |
| block    | 将按钮宽度调整为其父宽度的选项                        | boolean                                                                                   | false     |
| disabled | 按钮失效状态                                          | boolean                                                                                   | false     |
| href     | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string                                                                                    | -         |
| htmlType | 设置 `button` 原生的 `type` 值                        | string                                                                                    | `button`  |
| size     | 设置按钮大小                                          | `lg` \| `md` \| `sm`                                                                      | `md`      |
| type     | 设置按钮类型                                          | `primary` \| `info` \| `warning` \| `danger` \| `dashed` \| `link` \| `text` \| `default` | `default` |
| onClick  | 点击按钮时的回调                                      | (event) => void                                                                           | -         |

支持原生 button 的其他所有属性。
