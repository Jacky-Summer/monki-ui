import React, { FC } from 'react'

export interface Props {
  label: React.ReactNode
  disabled?: boolean
}

const TabPane: FC<Props> = ({ children }) => (
  <div className="mk-tab-panel">{children}</div>
)

export default TabPane
