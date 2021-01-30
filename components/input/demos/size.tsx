import React from 'react'
import { Input } from 'monki-ui'
import 'monki-ui/dist/index.css'

export default () => (
  <div>
    <Input size="lg" placeholder="large size" />
    <Input size="md" placeholder="default size" />
    <Input size="sm" placeholder="small size" />
  </div>
)
