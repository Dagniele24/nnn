import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar'; 
import Main from './components/Page';
import MyFooter from './components/Footer';

const App = () => {
    return (
        <div>
            <MyNavbar />
            <Main />
            <MyFooter />
        </div>
    );
};
export default App;
