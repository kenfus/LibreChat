import { useEffect } from 'react';
import { createCheckoutSession } from './stripeService';

const StripeButton = ({ email }: { email: string }) => {

    useEffect(() => {
        // Ensure Stripe.js is loaded
        if (!window.Stripe) {
            const script = document.createElement('script');
            script.src = 'https://js.stripe.com/v3/';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    const handleCheckout = async () => {
        try {
            const sessionId = await createCheckoutSession(email);
            const stripe = window.Stripe('your_publishable_key'); // Replace with your Stripe public key
            stripe.redirectToCheckout({ sessionId });
        } catch (error) {
            console.error('Error during Stripe checkout:', error);
        }
    };

    return (
        <button
      onClick= { handleCheckout }
    className = "bg-blue-500 text-white px-4 py-2 rounded"
        >
        Add Balance
            </button>
  );
};

export default StripeButton;
