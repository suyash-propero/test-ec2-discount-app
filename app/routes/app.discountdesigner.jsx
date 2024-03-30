import React, { useState, useCallback } from "react";
import {
    Layout,
      Page,
    } from "@shopify/polaris";
   // import logo from  './../../public/logo.jpeg';
    

const Discountdesigner = () => {
  const [offerName, setofferName] = useState("");
  const [mainDiscountType, setMainDiscountType] = useState("");

  const [offers, setOffers] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [discountAmount, setDiscountAmount] = useState('');
  const [subDiscountType, setSubDiscountType] = useState('');

  const handleQuantityChange = (value) => setQuantity(value);
  const handleDiscountAmountChange = (value) => setDiscountAmount(value);
  const handlesubDiscountTypeChange = (value) => setSubDiscountType(value);

  const handleAddOffer = () => {
    const newOffer = { quantity, discountAmount, subDiscountType };
    setOffers([...offers, newOffer]);

    // Clear input fields after adding an offer
    setQuantity('');
    setDiscountAmount('');
    setSubDiscountType('');
  };

  const columns = [
    { header: 'Quantity', key: 'quantity' },
    { header: 'Discount/Amount', key: 'discountAmount' },
    { header: 'Type', key: 'subDiscountType' },
  ];

  const rows = offers.map((offer, index) => ({
    id: index,
    quantity: offer.quantity,
    discountAmount: offer.discountAmount,
    subDiscountType: offer.subDiscountType,
  }));

  const handleMainDiscountTypeChange = (value) => {
    setMainDiscountType(value);
  };

  const renderDiscountDetails = () => {
    switch (mainDiscountType) {
      case 'volumeDiscount':
        return (
          <TextContainer>
            <p>Example:</p>
            <ul>
              <li>Buy 5 or more - get 10% Off</li>
              <li>Buy 10 or more - get 20% Off</li>
            </ul>
          </TextContainer>
        );
      case 'spendAmountDiscount':
        return (
          <TextContainer>
            <p>Example:</p>
            <ul>
              <li>Spend over $400 on the Summer Collection - get 20% off each Summer Collection item</li>
              <li>Spend over $100 on Sneakers - get $5.00 off the order</li>
            </ul>
          </TextContainer>
        );
      case 'buyXForAmount':
        return (
          <TextContainer>
            <p>Example:</p>
            <ul>
              <li>3 items from the Summer Collection for $10.00</li>
              <li>2 shoes for $10.00</li>
            </ul>
          </TextContainer>
        );
      case 'freeShipping':
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

  const handleSubmit = () => {
    console.log('Submitted Data:', {
      offerName,
      discountType: mainDiscountType,
    });
  };

  const handleofferNameChange = useCallback((value) => setofferName(value), []);

  return (
    <Page>
      <Layout>
       <div style={{backgroundColor:'yellow'}}></div> 
      </Layout>
    </Page>
  );
};

export default Discountdesigner;
