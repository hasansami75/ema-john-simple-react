import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price,0);
    let total = 0;
    for(let i=0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if(total>100){
        shipping = 10.99;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total > 10){
        shipping = 2.99;
    }
    else if(total > 500){
        shipping = 20.99;
    }

    const tax = (total /10);
    const grandTotal = total + shipping + parseFloat(tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
           <h4 className="text-primary">Order Summary</h4> 
           <p>Items ordered:{cart.length} </p>
           <p>Product Price: {formatNumber(total)}</p>
           <p><small>Shipping Cost: {shipping}</small></p>
           <p><small>Tax + VAT: {tax}</small></p>
           <p>Total Price: {grandTotal}</p>
           <br/>
           {
               props.children
           }
        </div>
    );
};

export default Cart;