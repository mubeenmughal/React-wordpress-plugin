import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export const GetStripe = () => {
    const [price, setPrice] = useState('');
    const [productName, setProductName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currency, setCurrency] = useState('');
    const [approvalUrl, setApprovalUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const headers = {
            "Authorization": 'Api-Key sgwF6fcb.RJKV99CLmI8TPM6op4SiZN9PukDJRU2p',
            "Content-Type": "application/json"
        };

        try {
            const response = await axios.post('https://100088.pythonanywhere.com/api/stripe/link', {
                stripe_key: "sk_test_51LiKUnEJkGNthfbzNbTn7Up7EnVwyeqRWLcRX1UWyq7ABL7wn1VMmHsS4Aox3U9b2nh3HkHd32vsQRR7nItC8ybv00WChhFen4",
                price: price,
                product: productName,
                currency_code: currency
            },
                { headers },
            );

            setApprovalUrl(response.data.approval_url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='home-container'>
            <h2>Get Stripe Link</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="price" style={{ margin: '40px' }}>Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="product" style={{ margin: '30px' }}>Product:</label>
                    <input
                        type="text"
                        id="product"
                        value={productName || ''}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="product" style={{ margin: '25px' }}>Currency:</label>
                    <input
                        type="text"
                        id="currency"
                        value={currency || ''}
                        onChange={(e) => setCurrency(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading} style={{ marginLeft: '10%' }}>
                    {isLoading ? 'Loading...' : 'Get Link'}
                </button>
            </form>


            {approvalUrl && (
                <p>
                    Approval url: <a href={approvalUrl}>Approval Url</a>
                </p>
            )}

        </div>
    )
}
