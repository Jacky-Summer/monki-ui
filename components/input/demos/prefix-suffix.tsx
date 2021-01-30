import React from 'react'
import { Input } from 'monki-ui'
import 'monki-ui/dist/index.css'

export default () => (
  <div>
    <Input placeholder="prefix" prefix="http://" />
    <Input placeholder="suffix" suffix=".com" />
  </div>
)
