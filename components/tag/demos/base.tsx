import React from 'react'
import Tag from '..'
import '../../style'

export default () => {
  const handleClick = () => {
    console.log('close')
  }

  return (
    <>
      <Tag text="Tag1" closable onClose={handleClick} />
      <Tag text="Tag2" closable={false} />
    </>
  )
}
