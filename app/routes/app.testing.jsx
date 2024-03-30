import React, { useState, useEffect } from "react";
import {
  Page,
  Grid,
  Card,
  Form,
  FormLayout,
  Button,
  Sticky
} from "@shopify/polaris";
import { Provider as AppBridgeProvider } from '@shopify/app-bridge-react';
import { useNavigate } from "react-router-dom";
import DiscountDesignerHeaderComponent from "../Components/DiscountDesignerHeader";
import OfferNameInputComponent from "../Components/OfferNameInput";
import DiscountTypeSelectComponent from "../Components/DiscountTypeSelect";
import OfferDetailsComponent from "../Components/OfferDetails";
import ApplyOnSelectorComponent from "../Components/ApplyOnSelector";
import CampaignSchedulerComponent from "../Components/CampaignScheduler";

export function loader() {
  return null;
}

export function action({ request }) {
  return request;
}

function getShopifyHostParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('host');
}

const apiKey = 'd405bbb7155879e400d5cb4dcf4b6695';
const shopOrigin = 'dynamicdiscounting.myshopify.com';

const Testing = () => {
  const navigate = useNavigate();
  const [mainDiscountType, setMainDiscountType] = useState("");

  const handleMainDiscountTypeChange = (selected) => {
    setMainDiscountType(selected);
  };

  const [host, setHost] = useState('');

  useEffect(() => {
    const hostParam = getShopifyHostParam();
    if (hostParam) {
      setHost(hostParam);
    }
  }, []);

  if (!host) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/offers", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        navigate("/app/dashboard");
      } else {
        console.error("Failed to submit form:", response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <AppBridgeProvider config={{ apiKey, shopOrigin, host, forceRedirect: true }}>
    <Page fullWidth>
      <DiscountDesignerHeaderComponent />
      <br />
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <Card sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <OfferNameInputComponent />
                <DiscountTypeSelectComponent
                  value={mainDiscountType}
                  onChange={handleMainDiscountTypeChange}
                />
                <OfferDetailsComponent />
                <ApplyOnSelectorComponent />
                <CampaignSchedulerComponent />
                <Button primary submit>
                  Submit
                </Button>
              </FormLayout>
            </Form>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <Sticky offset>
            <p>hi this content is sticky</p>
          </Sticky>
        </Grid.Cell>
      </Grid>
    </Page>
    </AppBridgeProvider>
  );
};

export default Testing;
