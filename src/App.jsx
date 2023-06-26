import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Paypal } from './components/Paypal';
import { Stripe } from './components/Stripe';
import { Home } from './components/Home';
import { GetPaypal } from './components/GetPaypal';
import { GetStripe } from './components/GetStripe';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/getpaypal" element={<GetPaypal />} />
                    <Route path="/getstripe" element={<GetStripe />} />
                    <Route exact path="/paypal" element={<Paypal />} />
                    <Route path="/stripe" element={<Stripe />} />
                </Routes>
             </BrowserRouter>
        </div>
    );
}

export default App;
