export const createCheckoutSession = async (email: string) => {
    const response = await fetch('/api/plugins/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        throw new Error('Failed to create checkout session');
    }

    const { id } = await response.json();
    return id;
};
