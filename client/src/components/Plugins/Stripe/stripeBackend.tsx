const stripe = require('stripe')('your_secret_key');
const express = require('express');
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const { email } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: 'price_id_here', // Replace with your Stripe price ID
                quantity: 1,
            }],
            mode: 'payment',
            customer_email: email,
            success_url: 'https://your-app.com/success',
            cancel_url: 'https://your-app.com/cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
});

module.exports = router;
