import React from 'react'
import { AutoComplete } from 'monki-ui'
import { DataSourceType } from 'monki-ui/dist/auto-complete/autoComplete'

import 'monki-ui/dist/index.css'

interface GithubUserProps {
  login: string
  url: string
  // eslint-disable-next-line camelcase
  avatar_url: string
}

export default () => {
  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    )
  }
  const handleSearch = (query: string) =>
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        if (typeof items !== 'undefined') {
          return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
        }
        return []
      })

  return (
    <div>
      <div>请输入任意 Github 用户名</div>
      <AutoComplete onSearch={handleSearch} renderOption={renderOption} />
    </div>
  )
}
