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
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);

        let events = this.props.objUser
            ? this.props.objUser.array.concat(holidays)
            : holidays;
           
        events.sort((a, b)=>{
            const d1 = new Date(a.data).setFullYear(today.getFullYear())
            const d2 = new Date(b.data).setFullYear(today.getFullYear())
            const dif1 = d1-today > 0 ? d1-today : d1-today + 31536000000
            const dif2 = d2-today > 0 ? d2-today : d2-today + 31536000000

            return dif1 - dif2
        })

        const daysLeft = ~~((new Date(events[0].data) - today) / 1000 / 60 / 60 / 24 )// ms to day 

        function days(daysLeft){
            switch (daysLeft % 10) {
                case 1: return 'день';
                case 2:
                case 3:
                case 4: return 'дня';
                default: return 'дней';
            }}

        const end =   (daysLeft < 10 || daysLeft > 20)? days(daysLeft) :'дней';        
            
        const message = daysLeft === 1
                ? `${events[0].label} завтра`
                : daysLeft === 0
                    ? `${events[0].label} сегодня`
                    :`${events[0].label} через ${daysLeft} ${end} `

        return (
            <footer className="footer">
                <div className="days-left">
                    {message} 
                </div>
            </footer>
        )
    }
}