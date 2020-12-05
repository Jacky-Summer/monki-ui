import React, { FC, useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { DownOutlined } from '@ant-design/icons'
import MenuContext from './MenuContext'
import { MenuItemProps } from './MenuItem'
import Transition from '../transition'

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  style?: React.CSSProperties
}

const SubMenu: FC<SubMenuProps> = ({ index, title, className, style, children }) => {
  const { key, mode, defaultOpenKeys } = useContext(MenuContext)
  const openedSubMenus = defaultOpenKeys as Array<string>
  const isOpened = index && mode === 'inline' ? openedSubMenus.includes(index) : false
  const [menuOpen, setOpen] = useState(isOpened)
  const classes = classNames('mk-menu-item mk-submenu-item', className, {
    'is-active': key === index,
    'is-opened': menuOpen,
    'is-inline': mode === 'inline',
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: number
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = window.setTimeout(() => {
      setOpen(toggle)
    }, 100)
  }

  const handleEvents =
    mode !== 'inline'
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {}

  const clickEvents = mode === 'inline' ? { onClick: handleClick } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('mk-submenu', {
      'menu-opened': menuOpen,
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        })
      }
      // eslint-disable-next-line no-console
      console.error('Warning: SubMenu has a child which is not a MenuItem component')
    })

    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    )
  }

  return (
    <li style={style} className={classes} {...handleEvents}>
      <div className="mk-submenu-title" {...clickEvents}>
        {title}
        <DownOutlined className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
