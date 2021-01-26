import React from 'react'
import { mount } from 'enzyme'
import Input, { InputProps } from '../input'

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: 'this is input',
}

describe('Input component', () => {
  it('should render the correct default Input', () => {
    const wrapper = mount(<Input {...defaultProps} />)
    expect(wrapper.find('input.mk-input-inner').prop('placeholder')).toEqual(
      'this is input',
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should support size', () => {
    const wrapper = mount(<Input {...defaultProps} size="lg" />)
    expect(wrapper.find('.mk-input-wrapper').hasClass('input-size-lg')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the disabled Input on disabled property', () => {
    const wrapper = mount(<Input {...defaultProps} disabled />)
    expect(wrapper.find('.mk-input-wrapper').hasClass('is-disabled')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render prefix and suffix element on prefix/suffix property', () => {
    const wrapper = mount(<Input {...defaultProps} prefix="https://" suffix=".com" />)
    expect(wrapper.find('.mk-input-group-prefix').text()).toEqual('https://')
    expect(wrapper.find('.mk-input-group-suffix').text()).toEqual('.com')
    expect(wrapper).toMatchSnapshot()
  })
})
