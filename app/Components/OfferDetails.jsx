import React, { useState } from "react";
import { FormLayout, TextField, Select, Button, Icon } from "@shopify/polaris";
import { MinusCircleIcon } from '@shopify/polaris-icons';

const OfferDetails = () => {
  const maxOffers = 4;
  const [offers, setOffers] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [subDiscountType, setSubDiscountType] = useState("");

  const handleQuantityChange = (value) => setQuantity(value);
  const handleDiscountAmountChange = (value) => setDiscountAmount(value);
  const handleSubDiscountTypeChange = (value) => setSubDiscountType(value);

  const handleAddOffer = () => {
    const newOffer = { quantity: "", discountAmount: "", subDiscountType: "" };
    setOffers([...offers, newOffer]);
  };

  const handleRemoveOffer = (index) => {
    const updatedOffers = [...offers];
    updatedOffers.splice(index, 1);
    setOffers(updatedOffers);
  };

  const handleOfferFieldChange = (index, field, value) => {
    const updatedOffers = offers.map((offer, i) => {
      if (i === index) {
        return { ...offer, [field]: value };
      }
      return offer;
    });
    setOffers(updatedOffers);
  };

  const renderOfferRows = () => {
    return offers.map((offer, index) => (
      <div key={index} style={{ marginTop: "10px", marginBottom: "10px" }}>
        <FormLayout.Group condensed>
          <TextField
            type="number"
            value={offer.quantity}
            placeholder="Quantity"
            onChange={(value) =>
              handleOfferFieldChange(index, "quantity", value)
            }
          />
          <TextField
            type="number"
            value={offer.discountAmount}
            placeholder="Discount"
            onChange={(value) =>
              handleOfferFieldChange(index, "discountAmount", value)
            }
          />
          <Select
            options={[
              { label: "% off each", value: "percentage" },
              { label: "$ Amount off each", value: "amount" },
              { label: "$ each", value: "each" },
            ]}
            placeholder="Type"
            value={offer.subDiscountType}
            onChange={(value) =>
              handleOfferFieldChange(index, "subDiscountType", value)
            }
          />
          <Button onClick={() => handleRemoveOffer(index)}><Icon source={MinusCircleIcon} tone="base" /></Button>
        </FormLayout.Group>
      </div>
    ));
  };

  return (
    <>
      <FormLayout.Group condensed title="Offer Details">
        <TextField
          type="number"
          value={quantity}
          placeholder="Quantity"
          onChange={handleQuantityChange}
        />
        <TextField
          type="number"
          value={discountAmount}
          placeholder="Discount"
          onChange={handleDiscountAmountChange}
        />
        <Select
          options={[
            { label: "% off each", value: "percentage" },
            { label: "$ Amount off each", value: "amount" },
            { label: "$ each", value: "each" },
          ]}
          placeholder="Type"
          value={subDiscountType}
          onChange={handleSubDiscountTypeChange}
        />
      </FormLayout.Group>
      <div style={{ marginTop: "10px" }}>{renderOfferRows()}</div>
      {offers.length < maxOffers && (
        <Button primary onClick={handleAddOffer}>
          Add Offer
        </Button>
      )}
    </>
  );
};

export default OfferDetails;
