import React from 'react'
import { mount } from 'enzyme'
import Select, { SelectProps } from '../select'

const { Option } = Select

const testProps: SelectProps = {
  defaultValue: '',
  placeholder: 'test',
  onChange: jest.fn(),
  onVisibleChange: jest.fn(),
}

const multipleProps: SelectProps = {
  ...testProps,
  multiple: true,
}

describe('Select component', () => {
  it('should render the correct Select component', () => {
    const wrapper = mount(
      <Select {...testProps}>
        <Option value="id1" label="hello" />
        <Option value="id2" label="hello2" />
        <Option value="id3" disabled label="disabled" />
      </Select>,
    )
    expect(wrapper.find('.mk-select-input').length).toBe(1)
    expect(wrapper.find('.mk-select-dropdown').length).toBe(0)
    expect(wrapper).toMatchSnapshot()
  })

  // TODO: add more test case
})
