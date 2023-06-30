import React, { useState } from 'react';
import axios from 'axios';

export const Stripe = () => {
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState('');
    const [currency, setCurrency] = useState('');
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const headers = {
            "Authorization": 'Api-Key sgwF6fcb.RJKV99CLmI8TPM6op4SiZN9PukDJRU2p',
            "Content-Type": "application/json"
        };

        try {
            //Make the POST API call using Axios
            const response = await axios.post('https://100088.pythonanywhere.com/api/stripe', {
                price: price,
                product: product,
                currency_code: currency
            },
                { headers });

            console.log(response.data);
            setData(response.data)
            // Handle the response as needed

        } catch (error) {
            console.error(error);
            // Handle error if the API call fails

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div  className='home-container'>
            <h2>Stripe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="price"  style={{ margin: '40px' }}>Price:</label>
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
                        value={product || ''}
                        onChange={(e) => setProduct(e.target.value)}
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
                <button className="button" type="submit" disabled={isLoading} style={{ marginLeft: '10%' }}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>


            {data && (
                <p>
                    Approval url: <a href={data.approval_url}>Approval Url</a>
                </p>
            )}
        </div>
    );
};
