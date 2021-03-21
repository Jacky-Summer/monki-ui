import React, { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import classNames from 'classnames'

export type InputSize = 'lg' | 'md' | 'sm'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix' | 'suffix'> {
  size?: InputSize
  disabled?: boolean
  prefix?: ReactNode // 前缀
  suffix?: ReactNode // 后缀
  icon?: ReactNode // 图标
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size, disabled, prefix, suffix, style, icon, ...restProps } = props
  const classes = classNames('mk-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prefix || suffix,
    'input-group-suffix': !!suffix,
    'input-group-prefix': !!prefix,
  })

  return (
    <div className={classes} style={style}>
      {prefix && <div className="mk-input-group-prefix">{prefix}</div>}
      {icon && <div className="icon-wrapper">{icon}</div>}
      <input ref={ref} className="mk-input-inner" disabled={disabled} {...restProps} />
      {suffix && <div className="mk-input-group-suffix">{suffix}</div>}
    </div>
  )
})

export default Input
