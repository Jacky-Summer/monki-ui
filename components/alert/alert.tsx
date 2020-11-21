import React, { FC, useState } from 'react'
import classNames from 'classnames'
import CloseOutlined from '@ant-design/icons/CloseOutlined'
import Transition from '../transition'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

export interface AlertProps {
  message: string
  description?: string
  type?: AlertType
  closable?: boolean
  className?: string
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Alert: FC<AlertProps> = ({
  type,
  description,
  message,
  closable, // Whether Alert can be closed
  onClose,
}) => {
  const [closed, setClosed] = useState(false)

  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setClosed(true)
    onClose?.(e)
  }

  const classes = classNames('mk-alert', 'className', {
    [`mk-alert-${type}`]: type,
  })
  const titleClass = classNames('mk-alert-message')

  return (
    <Transition in={!closed} timeout={300} animation="zoom-in-left">
      <div className={classes}>
        <span className={titleClass}>{message}</span>
        {description && <p className="mk-alert-desc">{description}</p>}
        {closable && (
          <span className="mk-alert-close" onClick={handleClose}>
            <CloseOutlined />
          </span>
        )}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'warning',
  closable: false,
}

export default Alert
