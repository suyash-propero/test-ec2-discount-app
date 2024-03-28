import React from 'react'

import {
    Layout,
      Page,
    } from "@shopify/polaris";
    
const Setting = () => {
  return (
    <Page>
      <ui-title-bar title="Setting" />
      <Layout>
       <div style={{backgroundColor:'yellow'}}>Welcome to Propero's setting page</div>
      </Layout>
    </Page>
  )
}

export default Setting