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

        let dates = {}

        let events = this.props.objUser
            ? this.props.objUser.array.concat(holidays)
            : holidays;

        events.forEach(el => {
            let eventDay = new Date(el.data)
            eventDay.setFullYear(today.getFullYear())
            // eventDay-today => меньше - ближе(раньше в списке) if < 0   +31536000000 - год в мс
            const dif = eventDay-today > 0 ? eventDay-today : eventDay-today+31536000000
            dates = {...dates, [dif]: el }
        })

        const sortedArr = []
        
        Object.keys(dates).sort(function compareNumbers(a, b) {
            return a - b;
          }).forEach((el)=>{
            sortedArr.push(dates[el])
        })        

        const daysLeft = ~~((new Date(sortedArr[0].data) - today) / 1000 / 60 / 60 / 24 )// ms to day 

        function days(daysLeft){
            switch (daysLeft % 10) {
                case 1: return 'день';
                case 2:
                case 3:
                case 4: return 'дня';
                default: return 'дней';
            }}
              let end =   (daysLeft < 10 || daysLeft > 20)? days(daysLeft) :'дней';        
            

        const message = daysLeft === 1
                ? `${sortedArr[0].label} завтра`
                : daysLeft === 0
                    ? `${sortedArr[0].label} сегодня`
                    :`${sortedArr[0].label} через ${daysLeft} ${end} `

        return (
            <footer className="footer">
                <div className="days-left">
                    {message} 
                </div>
            </footer>
        )
    }
}