import React from 'react'
import { MenuMode, SelectCallback } from './menu'

export interface IMenuContext {
  key: string
  onClick?: SelectCallback
  mode?: MenuMode
  defaultOpenKeys?: string[]
}

const MenuContext = React.createContext<IMenuContext>({ key: '0' })

export default MenuContext
