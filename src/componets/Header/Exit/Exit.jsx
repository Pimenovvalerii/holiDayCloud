import React from 'react';
import './Exit.css';

class Exit extends React.Component {
    
    exitFunck(){
        // const user = JSON.parse(localStorage.getItem('user'));
        // user.login = false;
        // localStorage.setItem('user',JSON.stringify(user))
        this.props.login(false)
        
    } 

    render(){return(
        <button 
            onClick={this.exitFunck.bind(this)}
            hidden={this.props.hidden}
        >Выход</button>
    )}

}

export default Exit;