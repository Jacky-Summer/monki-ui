import React, { FC, useState, CSSProperties } from 'react'
import classNames from 'classnames'
import MenuContext, { IMenuContext } from './MenuContext'
import MenuItem, { MenuItemProps } from './MenuItem'
import SubMenu, { SubMenuProps } from './SubMenu'

export type MenuMode = 'horizontal' | 'inline' // 水平 | 内嵌
export type SelectCallback = (selectedKey: string) => void

export interface MenuProps {
  className?: string
  style?: CSSProperties
  mode?: MenuMode // 菜单类型
  onClick?: SelectCallback // 点击 MenuItem 调用此函数
  defaultSelectedKey?: string // 初始选中的菜单项 key
  defaultOpenKeys?: string[] // 初始展开的 SubMenu 菜单项 key 数组 只在纵向模式下生效
}

const RootMenu: FC<MenuProps> = ({
  className,
  style,
  mode,
  onClick,
  defaultSelectedKey,
  defaultOpenKeys,
  children,
}) => {
  const [currentSelectedKey, setCurrentSelectedKey] = useState(defaultSelectedKey)
  const classes = classNames('mk-menu', className, {
    'mk-menu-horizontal': mode === 'horizontal',
    'mk-menu-inline': mode === 'inline',
  })

  const handleClick = (key: string) => {
    setCurrentSelectedKey(key)
    if (typeof onClick === 'function') {
      onClick(key)
    }
  }

  const menuContext: IMenuContext = {
    key: currentSelectedKey || '0',
    onClick: handleClick,
    mode,
    defaultOpenKeys,
  }

  const renderChildren = () =>
    React.Children.map(children, (child, index) => {
      //  child 是 ReactNode 类型，先断言成 FunctionComponentElement 类型，再拿到 displayName 内置属性
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 添加 index 属性，利用遍历时可以拿到的 index 变量来设置，这样使用时则无需给 MenuItem 传入 index 属性
        return React.cloneElement(childElement, {
          index: index.toString(),
        })
      }
      // eslint-disable-next-line no-console
      console.error('Warning: Menu has a child which is not a MenuItem component')
    })

  return (
    <ul style={style} className={classes}>
      <MenuContext.Provider value={menuContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  )
}

RootMenu.defaultProps = {
  mode: 'horizontal',
  defaultSelectedKey: '0',
  defaultOpenKeys: [],
}

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}

const Menu = RootMenu as IMenuComponent
Menu.Item = MenuItem
Menu.SubMenu = SubMenu

export default Menu
