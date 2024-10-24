//example home page

import React from 'react';
import { AuthContext } from '../context/AuthContext';

const HomePage = () => {
    const { user } = React.useContext(AuthContext);
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome, {user?.username}</p>
        </div>  
    );
};

export default HomePage;