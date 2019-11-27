import React from 'react';
import './Exit.css';

class Exit extends React.Component {
    
    exitFunck(){
        
        localStorage.setItem(`users`, JSON.stringify({ user: null }));
        this.props.save(this.props.objUser)
        this.props.exit()

        // localStorage.setItem(`users`, JSON.stringify({ user: '333' }));
        // localStorage.removeItem('null')
    } 

    render(){return(
        <button className="exit__button"
            onClick={this.exitFunck.bind(this)}
            hidden={this.props.hidden}
        >Выход</button>
    )}

}

export default Exit;