import React from 'react'
import { Select } from 'monki-ui'
import 'monki-ui/dist/index.css'

export default () => {
  const handleChange = (selectedValue: string, selectedValues: string[]) => {
    console.log(selectedValue, selectedValues)
  }

  const handleVisibleChange = (visible: boolean) => {
    console.log('visible', visible)
  }

  return (
    <Select
      placeholder="多选"
      onChange={handleChange}
      onVisibleChange={handleVisibleChange}
      multiple
    >
      <Select.Option value="item1" />
      <Select.Option value="item2" />
      <Select.Option value="item3" />
      <Select.Option value="disabled" disabled />
      <Select.Option value="item4" />
    </Select>
  )
}
