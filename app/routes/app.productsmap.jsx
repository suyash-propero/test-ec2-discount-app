import React, { useState, useEffect } from 'react'; 
import { Provider as AppBridgeProvider, ResourcePicker, TitleBar, useAppBridge} from '@shopify/app-bridge-react';
import { Page, Layout, EmptyState, Button, Card, BlockStack, InlineStack, Text } from '@shopify/polaris';

function getShopifyHostParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('host');
}

const apiKey = 'd405bbb7155879e400d5cb4dcf4b6695';
const shopOrigin = 'dynamicdiscounting.myshopify.com';

// const apiKey = process.env.REMIX_REACT_APP_API_KEY;
// const shopOrigin = process.env.REMIX_REACT_APP_SHOP_ORIGIN;

const ProductsMapContent = () => {
  const [openProductPicker, setOpenProductPicker] = useState(false);
  const [openCollectionPicker, setOpenCollectionPicker] = useState(false);

  const app = useAppBridge();

  const selectProduct = () => {
    setOpenProductPicker(!openProductPicker);
  };

  const selectCollection = () => {
    setOpenCollectionPicker(!openCollectionPicker);
  };

  return (
    <Page>
      <TitleBar
        title="Discount Manager"
        primaryAction={{
          content: 'Select Products',
          onAction: selectProduct,
        }}
        secondaryActions={[
          {
            content: 'Select Collections',
            onAction: selectCollection,
          }
        ]}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={true}
        open={openProductPicker}
        onSelection={(resources) => {
          setOpenProductPicker(false);
          console.log('Selected Products:', resources.selection);
        }}
        onCancel={() => setOpenProductPicker(false)}
      />
      <ResourcePicker
        resourceType="Collection"
        open={openCollectionPicker}
        onSelection={(resources) => {
          setOpenCollectionPicker(false);
          console.log('Selected Collections:', resources.selection);
        }}
        onCancel={() => setOpenCollectionPicker(false)}
      />
    </Page>
  );
};

const ProductsMap = () => {
  const [host, setHost] = useState('');

  useEffect(() => {
    const hostParam = getShopifyHostParam();
    if (hostParam) {
      setHost(hostParam);
    }
  }, []);

  if (!host) return null;

  return (
    <AppBridgeProvider config={{ apiKey, shopOrigin, host, forceRedirect: true }}>
      <ProductsMapContent />
    </AppBridgeProvider>
  );
};

export default ProductsMap;
