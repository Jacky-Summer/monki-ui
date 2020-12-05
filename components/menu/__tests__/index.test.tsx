import React from 'react'
import { mount } from 'enzyme'
import Menu, { MenuProps } from '../menu'

const { SubMenu } = Menu

const generateMenu = (props: MenuProps = {}) => (
  <Menu {...props}>
    <Menu.Item>menu1</Menu.Item>
    <Menu.Item disabled>menu2</Menu.Item>
    <Menu.Item>menu3</Menu.Item>
  </Menu>
)

const generateMenuWithSubMenu = (props: MenuProps = {}) => (
  <Menu {...props}>
    <Menu.Item>menu1</Menu.Item>
    <Menu.Item disabled>menu2</Menu.Item>
    <Menu.Item>menu3</Menu.Item>
    <SubMenu title="menu4">
      <Menu.Item>subMenu1</Menu.Item>
    </SubMenu>
    <SubMenu title="menu5">
      <Menu.Item>subMenu2</Menu.Item>
    </SubMenu>
  </Menu>
)

describe('Menu component render', () => {
  it('should render the correct default menu', () => {
    const wrapper = mount(generateMenu())

    expect(wrapper.find('.mk-menu').hasClass('mk-menu-horizontal')).toBeTruthy()
    expect(
      wrapper
        .find('.mk-menu-item')
        .first()
        .hasClass('is-active'),
    ).toBeTruthy()

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the correct inline menu', () => {
    const wrapper = mount(
      generateMenu({
        mode: 'inline',
      }),
    )

    expect(wrapper.find('.mk-menu').hasClass('mk-menu-inline')).toBeTruthy()
    expect(wrapper.find('.mk-menu').hasClass('mk-menu-horizontal')).toBeFalsy()
    expect(
      wrapper
        .find('.mk-menu-item')
        .first()
        .hasClass('is-active'),
    ).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the correct default menu with SubMenu', () => {
    const wrapper = mount(generateMenuWithSubMenu())
    expect(wrapper.find('.mk-menu-item').length).toEqual(5)
    expect(wrapper.find('.mk-submenu-item').length).toEqual(2)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the correct inline menu with SubMenu', () => {
    const wrapper = mount(
      generateMenuWithSubMenu({
        mode: 'inline',
      }),
    )
    expect(wrapper.find('.mk-menu').hasClass('mk-menu-inline')).toBeTruthy()
    expect(wrapper.find('.mk-menu-item').length).toEqual(5)
    expect(wrapper.find('.mk-submenu-item').length).toEqual(2)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render disabled MenuItem correctly', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      generateMenu({
        onClick,
      }),
    )
    expect(
      wrapper
        .find('.mk-menu-item')
        .at(1)
        .hasClass('is-disabled'),
    ).toBeTruthy()
    expect(
      wrapper
        .find('.is-disabled')
        .first()
        .simulate('click'),
    )
    expect(onClick).not.toHaveBeenCalled()
  })

  it('click items should change active and call the right callback', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      generateMenu({
        onClick,
      }),
    )
    const menuItem1 = wrapper.find('.mk-menu-item').at(0)
    const menuItem3 = wrapper.find('.mk-menu-item').at(2)
    expect(menuItem1.hasClass('is-active')).toBeTruthy()
    menuItem3.simulate('click')

    expect(onClick).toHaveBeenCalled()
    expect(
      wrapper
        .find('.mk-menu-item')
        .at(2)
        .hasClass('is-active'),
    ).toBeTruthy()

    expect(
      wrapper
        .find('.mk-menu-item')
        .at(0)
        .hasClass('is-active'),
    ).toBeFalsy()
  })

  it('set defaultOpenKeys in mode horizontal not working', () => {
    const wrapper = mount(
      generateMenuWithSubMenu({
        defaultOpenKeys: ['3'],
      }),
    )
    expect(wrapper.find('.mk-submenu')).toEqual({})
  })

  it('should accept defaultOpenKeys in mode inline', () => {
    const wrapper = mount(
      generateMenuWithSubMenu({
        mode: 'inline',
        defaultOpenKeys: ['3'],
      }),
    )
    expect(wrapper.find('.mk-submenu').length).toEqual(1)
  })

  it('should render defaultSelectedKey on default menu correctly', () => {
    const wrapper = mount(
      generateMenu({
        defaultSelectedKey: '2',
      }),
    )
    expect(
      wrapper
        .find('.mk-menu-item')
        .at(0)
        .hasClass('is-active'),
    ).toBeFalsy()
    expect(
      wrapper
        .find('.mk-menu-item')
        .at(2)
        .hasClass('is-active'),
    ).toBeTruthy()
  })
})
