import React, { FC, useContext, CSSProperties } from 'react'
import classNames from 'classnames'
import MenuContext from './MenuContext'

export interface MenuItemProps {
  index?: string
  className?: string
  style?: CSSProperties
  disabled?: boolean
}

const MenuItem: FC<MenuItemProps> = ({
  index,
  className,
  style,
  disabled,
  children,
}) => {
  const context = useContext(MenuContext)
  const classes = classNames('mk-menu-item', className, {
    'is-disabled': disabled,
    // eslint-disable-next-line react/destructuring-assignment
    'is-active': context.key === index,
  })

  const handleClick = () => {
    const { onClick } = context
    if (onClick && !disabled && typeof index === 'string') {
      onClick(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
