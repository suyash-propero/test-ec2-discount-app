import React from "react";
import { Grid, Text, Button } from "@shopify/polaris";

const DiscountDesignerHeader = () => {
  return (
    <Grid>
      <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 8, xl: 8 }}>
        <Text variant="headingXl" as="h4">
          Discount Designer
        </Text>
      </Grid.Cell>
      <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <Button plain fullWidth size="large">
              Cancel
            </Button>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <Button fullWidth variant="primary" size="large">
              Create Discount
            </Button>
          </Grid.Cell>
        </Grid>
      </Grid.Cell>
    </Grid>
  );
};

export default DiscountDesignerHeader;