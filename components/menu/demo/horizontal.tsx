import React from 'react'
import Menu from '..'
import '../../style'

export default () => {
  const onClick = (index: string) => {
    console.log('click: ', index)
  }
  return (
    <Menu onClick={onClick}>
      <Menu.Item>菜单1</Menu.Item>
      <Menu.Item>菜单2</Menu.Item>
      <Menu.Item>菜单3</Menu.Item>
      <Menu.Item>菜单4</Menu.Item>
    </Menu>
  )
}
