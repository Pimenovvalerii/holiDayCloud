import React from 'react';
import Header from '../Header/HeaderMain';
import Main from '../Main';
import Footer from '../Footer';

import './App.css';

export default class App extends React.Component {

    render(){

        
        // console.log('App component is rendered with',this.props.user )
        return (
            <div className="app">
                <Header  

                    {...this.props}
                   
                />
                <Main 
                    {...this.props}
                />
                <Footer 
                    


                />
            </div>
        )
    }
}