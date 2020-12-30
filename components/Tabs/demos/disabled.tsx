import React from 'react'
import { Tabs } from 'monki-ui'
import 'monki-ui/dist/index.css'

const { TabPane } = Tabs

export default () => (
  <Tabs defaultActiveKey={1}>
    <TabPane tab="Tab 1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" disabled>
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
)
