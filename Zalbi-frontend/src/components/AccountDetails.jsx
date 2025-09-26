// AccountDetails.jsx
import React from 'react';
import '../styles/AccountDetails.css';
import accountdetailimg from '../assets/accountdetails.svg';

const AccountDetails = () => {
    return (
        <div className="account-details-container">
            <div className="account-details-content">
                <div className="account-text-section">
                    <h2 className="account-title">Log in to see your account details</h2>
                    <p className="account-description">
                        View past trips, tailored suggestions, support resources, and more.
                    </p>

                    <div className="account-buttons">
                        <button className="login-btn">Log in to your account</button>
                        <button className="create-account-btn">Create an account</button>
                    </div>
                </div>
                <div className='account-right-section'>
                    <img src={accountdetailimg} alt="Account details illustration" className="account-image" />
                </div>
            </div>
        </div>
    );
};

export default AccountDetails;