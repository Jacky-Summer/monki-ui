import React from 'react'
import { mount } from 'enzyme'
import Tabs, { TabsProps } from '../Tabs'

const { TabPane } = Tabs

const testProps: TabsProps = {
  defaultActiveKey: 1,
  onTabClick: jest.fn(),
}

const generateTabs = (props: TabsProps = {}) => (
  <Tabs {...testProps}>
    <TabPane tab="Tab 1" disabled>
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3">Content of Tab Pane 3</TabPane>
  </Tabs>
)

describe('Tabs component', () => {
  it('should render the correct default Tabs', () => {
    const wrapper = mount(generateTabs())
    const activeElement = wrapper.find('.mk-tabs-nav-item').at(1)
    expect(wrapper.find('.mk-tabs-nav').hasClass('nav-line'))
    expect(activeElement.hasClass('is-active')).toBeTruthy()
    expect(activeElement.text()).toEqual('Tab 2')
    expect(wrapper.find('.mk-tab-panel').text()).toEqual('Content of Tab Pane 2')
    expect(wrapper).toMatchSnapshot()
  })

  it('click tabItem should switch to content', () => {
    const wrapper = mount(generateTabs())
    wrapper
      .find('.mk-tabs-nav-item')
      .at(2)
      .simulate('click')

    expect(testProps.onTabClick).toHaveBeenCalled()
    expect(
      wrapper
        .find('.mk-tabs-nav-item')
        .at(2)
        .hasClass('is-active'),
    ).toBeTruthy()
    expect(
      wrapper
        .find('.mk-tabs-nav-item')
        .at(1)
        .hasClass('is-active'),
    ).toBeFalsy()
  })

  it('click disabled tabItem should not works', () => {
    const wrapper = mount(generateTabs())
    wrapper
      .find('.mk-tabs-nav-item')
      .at(0)
      .simulate('click')

    expect(
      wrapper
        .find('.mk-tabs-nav-item')
        .at(0)
        .hasClass('is-active'),
    ).toBeFalsy()
    expect(
      wrapper
        .find('.mk-tabs-nav-item')
        .at(1)
        .hasClass('is-active'),
    ).toBeTruthy()
  })
})
