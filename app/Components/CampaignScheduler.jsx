import React, { useState } from "react";
import { TextField, FormLayout } from "@shopify/polaris";

const CampaignScheduler = () => {
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const handleStartDateChange = (value) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (value < currentDate) {
      return;
    }
    if (value > endDate) {
      setEndDate(value);
    }
    setStartDate(value);
  };

  const handleEndDateChange = (value) => {
    if (value < startDate) {
      return;
    }
    setEndDate(value);
  };

  return (
    <FormLayout.Group title="Schedule a Campaign">
      <TextField
        type="date"
        value={startDate}
        label="Start Date"
        onChange={handleStartDateChange}
        min={new Date().toISOString().split("T")[0]}
        fullWidth
      />
      <TextField
        type="date"
        value={endDate}
        label="End Date"
        onChange={handleEndDateChange}
        min={startDate}
        fullWidth
      />
    </FormLayout.Group>
  );
};

export default CampaignScheduler;
