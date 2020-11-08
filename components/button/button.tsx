import React, { FC } from 'react'
import classNames from 'classnames'

import '../style'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dashed'
  | 'link'
  | 'text'

export type ButtonSize = 'lg' | 'md' | 'sm'
export type ButtonShape = 'circle' | 'round'
export type ButtonHTMLTypes = 'submit' | 'button' | 'reset'

interface BaseButtonProps {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  disabled?: boolean
  loading?: boolean
  block?: boolean
  className?: string
  href?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes
  target?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>

type AnchorButtonProps = {
  href?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = ({
  type,
  htmlType,
  size,
  shape,
  disabled,
  loading,
  block,
  className,
  icon,
  href,
  children,
  ...restProps
}) => {
  const classes = classNames('mk-btn', className, {
    [`mk-btn-${type}`]: type,
    [`mk-btn-${size}`]: size,
    [`mk-btn-${shape}`]: shape,
    'mk-btn-loading': loading,
    'mk-btn-block': block,
    'mk-btn-icon-only': icon,
  })

  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={htmlType}
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {icon}
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'md',
  block: false,
  loading: false,
  htmlType: 'button',
  icon: null,
}

export default Button
