import React from "react";
import { Select, TextContainer } from "@shopify/polaris";

const DiscountTypeSelect = ({ value, onChange }) => {
  const handleSelectChange = (selected) => {
    onChange(selected);
  };

  const renderDiscountDetails = (mainDiscountType) => {
    switch (mainDiscountType) {
      case "volumeDiscount":
        return (
          <TextContainer>
            <p>Example:</p>
            <ul>
              <li>Buy 5 or more - get 10% Off</li>
              <li>Buy 10 or more - get 20% Off</li>
            </ul>
          </TextContainer>
        );
      case "spendAmountDiscount":
        return (
          <TextContainer>
            <p>Example:</p>
            <ul>
              <li>
                Spend over $400 on the Summer Collection - get 20% off each
                Summer Collection item
              </li>
              <li>Spend over $100 on Sneakers - get $5.00 off the order</li>
            </ul>
          </TextContainer>
        );
      case "buyXForAmount":
        return (
          <TextContainer>
            <p>Example:</p>
            <ul>
              <li>3 items from the Summer Collection for $10.00</li>
              <li>2 shoes for $10.00</li>
            </ul>
          </TextContainer>
        );
      case "freeShipping":
        return (
          <TextContainer>
            <p>Example:</p>
            <ul>
              <li>Get X quantity to get the free shipping option</li>
            </ul>
          </TextContainer>
        );
      default:
        return (
          <TextContainer>
            <p>Example:</p>
            <ul>
              <li>Buy 5 or more - get 10% Off</li>
              <li>Buy 10 or more - get 20% Off</li>
            </ul>
          </TextContainer>
        );
    }
  };

  return (
    <>
      <Select
        name="mainDiscountType"
        label="Discount Type"
        options={[
          { label: "Volume Discount", value: "volumeDiscount" },
          { label: "Spend Amount Discount", value: "spendAmountDiscount" },
          { label: "Buy X For $", value: "buyXForAmount" },
          { label: "Free Shipping", value: "freeShipping" },
        ]}
        onChange={handleSelectChange}
        value={value}
      />
      <div style={{ marginTop: "10px" }}>{renderDiscountDetails(value)}</div>
    </>
  );
};

export default DiscountTypeSelect;
