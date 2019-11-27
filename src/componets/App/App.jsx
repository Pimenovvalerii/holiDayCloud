import React from 'react';
import Header from '../Header/HeaderMain';
import Main from '../Main';
import Footer from '../Footer';

import './App.css';
import './media.css';

export default class App extends React.Component {

    render(){

        
        return (
            <div className="app">
                <Header  

                    {...this.props}
                   
                />
                <Main 
                    {...this.props}
                />
                <Footer 
                    {...this.props}
                />
            </div>
        )
    }
}