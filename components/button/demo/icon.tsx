import React from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import Button from '../button'

export default () => (
  <div id="components-button-demo-shape">
    <Button type="primary" icon={<DownloadOutlined />} />
    <Button>图标按钮</Button>
  </div>
)
