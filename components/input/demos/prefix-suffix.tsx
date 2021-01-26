import React from 'react'
import Input from '../input'

export default () => (
  <div>
    <Input placeholder="prefix" prefix="http://" />
    <Input placeholder="suffix" suffix=".com" />
  </div>
)
