import React from 'react';

import './Footer.css';
import holidays from '../Main/Content/holidays';

export default class Footer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // user : this.props.user
        }

    }

    
    render(){
        const today = new Date();
        let dates = {}

        if(this.props.objUser){
        this.props.objUser.array.concat(holidays).forEach(el => {
            const day = el.data
            
            let eventDay = new Date(day)
            eventDay.setFullYear(today.getFullYear())
            // eventDay-today => меньше - ближе(раньше в списке) if < 0   +31536000000 - год в мс
            const dif = eventDay-today > 0 ? eventDay-today : eventDay-today+31536000000
            dates = {...dates, [dif]: el }

        })} else {
            holidays.forEach(el => {
                const day = el.data
                
                let eventDay = new Date(day)
                eventDay.setFullYear(today.getFullYear())
                const dif = eventDay-today > 0 ? eventDay-today : eventDay-today+31536000000
                dates = {...dates, [dif]: el }
        })}

        const sortedArr = []
        
        Object.keys(dates).sort(function compareNumbers(a, b) {
            return a - b;
          }).forEach((el)=>{
            sortedArr.push(dates[el])
        })        
        console.log(sortedArr[0])

        const daysLeft = (new Date(sortedArr[0].data) - today) / 1000 / 60 / 60 / 24 + 1 // ms to day 
        return (
            <footer className="footer">
                {/* Footer {this.props.user} */}
                <div className="days-left">
                    {sortedArr[0].label} через {~~daysLeft} 
                </div>
            </footer>
        )
    }
}