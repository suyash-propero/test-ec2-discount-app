import React, { useState, useEffect } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { FormLayout, Button, Tag } from "@shopify/polaris";

const ApplyOnSelector = () => {
  const [openProductPicker, setOpenProductPicker] = useState(false);
  const [openCollectionPicker, setOpenCollectionPicker] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);

  const selectProduct = () => {
    setOpenProductPicker(!openProductPicker);
  };

  const selectCollection = () => {
    setOpenCollectionPicker(!openCollectionPicker);
  };

  const handleProductSelection = (resources) => {
    setOpenProductPicker(false);
    console.log("Selected Products:", resources.selection);
    setSelectedProducts(resources.selection);
  };

  const handleCollectionSelection = (resources) => {
    setOpenCollectionPicker(false);
    console.log("Selected Collections:", resources.selection);
    setSelectedCollections(resources.selection);
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts(selectedProducts.filter((product) => product.id !== productId));
  };

  const handleRemoveCollection = (collectionId) => {
    setSelectedCollections(selectedCollections.filter((collection) => collection.id !== collectionId));
  };

  const renderSelectedProducts = () => {
    return selectedProducts.map((product) => (
      <Tag key={product.id} onRemove={() => handleRemoveProduct(product.id)}>
        {product.title}
      </Tag>
    ));
  };

  const renderSelectedCollections = () => {
    return selectedCollections.map((collection) => (
      <Tag key={collection.id} onRemove={() => handleRemoveCollection(collection.id)}>
        {collection.title}
      </Tag>
    ));
  };

  return (
    <FormLayout.Group title="Apply On">
      <Button fullWidth onClick={selectProduct}>
        Select Products
      </Button>
      <Button fullWidth onClick={selectCollection}>
        Select Collections
      </Button>
      <ResourcePicker
        resourceType="Product"
        showVariants={true}
        open={openProductPicker}
        onSelection={handleProductSelection}
        onCancel={() => setOpenProductPicker(false)}
      />
      <ResourcePicker
        resourceType="Collection"
        open={openCollectionPicker}
        onSelection={handleCollectionSelection}
        onCancel={() => setOpenCollectionPicker(false)}
      />
      <div style={{ marginTop: '5px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '5px' }}>
          {renderSelectedProducts()}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '5px' }}>
          {renderSelectedCollections()}
        </div>
      </div>
    </FormLayout.Group>
  );
};

export default ApplyOnSelector;
