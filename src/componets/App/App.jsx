import React from 'react';
import Header from '../Header/HeaderMain';
import Main from '../Main';
import Footer from '../Footer';

import './App.css';

export default class App extends React.Component {

    render(){

        
        console.log('App component is rendered with',this.props.objUser )
        return (
            <div className="app">
                <Header  

                    {...this.props}
                   
                />
                {/* <div onClick={ ()=>{
                    const users = JSON.parse(localStorage.getItem('users')) 
                    if(users.user !== null){
                        users.user = null
                        localStorage.setItem('users', JSON.stringify(users))
                        localStorage.removeItem(this.props.objUser.phone)
                        this.props.exit()
                    }  
                }}>
                    Удалить учетку
                </div> */}
                <Main 
                    {...this.props}
                />
                <Footer 
                    


                />
            </div>
        )
    }
}