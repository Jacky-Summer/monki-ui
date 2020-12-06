import React from 'react'
import { Button } from 'monki-ui'
import 'monki-ui/dist/index.css'

export default () => (
  <div id="components-button-demo-shape">
    <Button type="default">默认按钮</Button>
    <Button type="primary">主按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="dashed">虚线按钮</Button>
    <Button type="link" href="https://github.com/Jacky-Summer">
      链接按钮
    </Button>
    <Button type="text">文本按钮</Button>
  </div>
)
