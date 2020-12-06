import React from 'react'
import { Button } from 'monki-ui'
import 'monki-ui/dist/index.css'

export default () => (
  <div id="components-button-demo-shape">
    <Button size="lg" type="primary">
      Large
    </Button>
    <Button size="md" type="info">
      Medium
    </Button>
    <Button size="sm">Small</Button>
  </div>
)
