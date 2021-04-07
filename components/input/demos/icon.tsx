import React from 'react'
import { Input } from 'monki-ui'
import { CaretDownOutlined } from '@ant-design/icons'
import 'monki-ui/dist/index.css'

export default () => (
  <div>
    <Input icon={<CaretDownOutlined />} />
  </div>
)
