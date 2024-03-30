import React, { useState, useCallback } from "react";
import { TextField } from "@shopify/polaris";

const OfferNameInput = () => {
  const [offerName, setOfferName] = useState("");

  const handleOfferNameChange = useCallback((value) => {
    setOfferName(value);
  }, []);

  return (
    <TextField
      value={offerName}
      name="offerName"
      label="Offer Name"
      placeholder="Enter the name of your offer (e.g., Summer Sale, Holiday Discount)"
      onChange={handleOfferNameChange}
    />
  );
};

export default OfferNameInput;