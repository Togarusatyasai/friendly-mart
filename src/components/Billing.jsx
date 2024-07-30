import { useState } from "react";
import "./Billing.css";

const Billing = () => {
    const [showUpiOptions, setShowUpiOptions] = useState(false);
    const [orderSummary, setOrderSummary] = useState(null);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        number: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePaymentChange = (event) => {
        const selectedPayment = event.target.value;
        if (selectedPayment === "UPI") {
            setShowUpiOptions(true);
        } else {
            setShowUpiOptions(false);
        }
    };

    const confirm = (e) => {
        e.preventDefault();
        setOrderSummary(formData);
    };

    return (
        <>
            <div className="bill_form">
                <h3>Address Details</h3>
                <form>
                    First Name : <input type="text" name="fname" required onChange={handleInputChange} />
                    <br /><br />
                    Last Name : <input type="text" name="lname" required onChange={handleInputChange} />
                    <br /><br />
                    Phone Number : <input type="number" name="number" required onChange={handleInputChange} />
                    <br /><br />
                    E-mail : <input type="email" name="email" required onChange={handleInputChange} />
                    <br /><br />
                    Address : <input type="text" name="address" required onChange={handleInputChange} />
                    <br /><br />
                    City : <input type="text" name="city" required onChange={handleInputChange} />
                    <br /><br />
                    State : <input type="text" name="state" required onChange={handleInputChange} />
                    <br /><br />
                    ZIP Code : <input type="number" name="zipcode" required onChange={handleInputChange} />
                    <br /><br />
                </form>
                <h3>Payment Details</h3>
                <form>
                    Payment Method : 
                    <select onChange={handlePaymentChange} required>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="UPI">UPI</option>
                    </select>
                    {showUpiOptions && (
                        <div>
                            <p>Select UPI Method:</p>
                            <input type="radio" name="upi" value="phonepay" required /> PhonePay<br />
                            <input type="radio" name="upi" value="gpay" required /> Google Pay<br />
                            <input type="radio" name="upi" value="paytm" required /> Paytm<br />
                        </div>
                    )}
                </form>
                <br /><br />
                <button onClick={confirm}>Confirm</button>

                {orderSummary && (
                    <div className="order_summary">
                        <h3>Order Summary</h3>
                        <p>First Name: {orderSummary.fname}</p>
                        <p>Last Name: {orderSummary.lname}</p>
                        <p>Phone Number: {orderSummary.number}</p>
                        <p>Address: {orderSummary.address}</p>
                        <p>City: {orderSummary.city}</p>
                        <p>State: {orderSummary.state}</p>
                        <p>ZIP Code: {orderSummary.zipcode}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Billing;
