import React from 'react'
import { AutoComplete } from 'monki-ui'
import { DataSourceType } from 'monki-ui/dist/auto-complete/autoComplete'
import 'monki-ui/dist/index.css'

interface LakerPlayerProps {
  value: string
  number: number
}

export default () => {
  const lakersWithNumber = [
    { value: 'a', number: 0 },
    { value: 'aa', number: 1 },
    { value: 'aaa', number: 2 },
    { value: 'b', number: 3 },
    { value: 'bb', number: 4 },
    { value: 'bbb', number: 5 },
    { value: 'c', number: 6 },
    { value: 'cc', number: 7 },
    { value: 'ccc', number: 8 },
    { value: 'd', number: 9 },
    { value: 'dd', number: 10 },
    { value: 'ddd', number: 11 },
  ]

  const handleSearch = (query: string) =>
    lakersWithNumber.filter(player => player.value.includes(query))

  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>
    return (
      <>
        <b>字母: {itemWithNumber.value}</b>
        <span>数字编号: {itemWithNumber.number}</span>
      </>
    )
  }

  return (
    <div>
      <div>请输入 a 或 b 或 c 或 d</div>
      <AutoComplete onSearch={handleSearch} renderOption={renderOption} />
    </div>
  )
}
