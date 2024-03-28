import React from 'react'
import {
    Layout,
      Page,
    } from "@shopify/polaris";
    
const Billings = () => {
  return (
    <Page>
    <ui-title-bar title="Billing" />
    <Layout>
     <div style={{backgroundColor:'yellow' }}>Welcome to Propero's billing page</div>
    </Layout>
  </Page>
  )
}

export default Billings