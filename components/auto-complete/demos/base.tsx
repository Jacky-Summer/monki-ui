import React from 'react'
import { AutoComplete } from 'monki-ui'
import 'monki-ui/dist/index.css'

export default () => {
  const strArr = ['a', 'ab', 'aaa', 'b', 'bb', 'bbb', 'c', 'cc', 'ccc', 'd', 'dd', 'ddd']

  const handleSearch = (query: string) =>
    strArr.filter(item => item.includes(query)).map(item => ({ value: item }))

  return (
    <div>
      <div>请输入 a 或 b 或 c 或 d</div>
      <AutoComplete onSearch={handleSearch} />
    </div>
  )
}
