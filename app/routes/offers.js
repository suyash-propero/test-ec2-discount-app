// routes/offers.js
import { createOffer } from '../lib/createOffer';

export const loader = async () => null;

export const action = async ({ request }) => {
  try {
    const body = await request.formData();
    const offerData = {
      offerName: body.get('offerName'),
      mainDiscountType: body.get('mainDiscountType'),
    };

    await createOffer(offerData);

    return {
      status: 302,
      headers: {
        'Location': '/', // Redirect to a success page or anywhere you want
      },
    };
  } catch (error) {
    console.error('Error creating offer:', error);
    return {
      status: 500,
      body: 'Internal Server Error',
    };
  }
};
