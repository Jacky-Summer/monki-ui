import React from 'react'
import { mount } from 'enzyme'
import Alert, { AlertProps } from '../alert'

const testProps: AlertProps = {
  message: 'This is a Alert',
  type: 'success',
  closable: true,
  onClose: jest.fn(),
}

jest.useFakeTimers()

describe('Alert component', () => {
  it('should render the correct default alert', () => {
    const wrapper = mount(
      <Alert
        message="I am ALert"
        description="This is some desc about the Alert"
      />,
    )
    expect(wrapper.find('.mk-alert').hasClass('mk-alert-warning')).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should be closed when click the alert close icon', () => {
    const wrapper = mount(<Alert {...testProps} />)
    wrapper.find('.mk-alert-close').simulate('click')
    jest.advanceTimersByTime(1000)
    expect(testProps.onClose).toHaveBeenCalled()
  })
})
