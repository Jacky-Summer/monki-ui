import React, { FC, InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import classNames from 'classnames'

export type InputSize = 'lg' | 'md' | 'sm'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix' | 'suffix'> {
  size?: InputSize
  disabled?: boolean
  prefix?: ReactNode // 前缀
  suffix?: ReactNode // 后缀
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ size, disabled, prefix, suffix, style, onChange, ...restProps }, ref) => {
    const classes = classNames('mk-input-wrapper', {
      disabled: '',
    })

    return (
      <div className={classes} style={style}>
        {prefix && <div className="mk-input-group-prefix">{prefix}</div>}
        <input ref={ref} className="mk-input-inner" disabled={disabled} {...restProps} />
        {suffix && <div className="mk-input-group-suffix">{suffix}</div>}
      </div>
    )
  },
)

export default Input
