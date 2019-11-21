import React from 'react';
import './Content.css';

import ContentItem from './ContentItem';
import holidays from './holidays';

export default class Content extends React.Component {

    render(){
            const today = new Date();
            today.setHours(0);
            today.setMinutes(0);
            today.setSeconds(0);
            today.setMilliseconds(0);
            let dates = {}

            const events = this.props.user
                ? this.props.user.array.concat(holidays)
                : holidays;

            events.forEach(el => {
                const eventDay = new Date(el.data)
                eventDay.setFullYear(today.getFullYear())
                // eventDay-today => меньше - ближе(раньше в списке) if < 0   +31536000000 - год в мс
                const dif = eventDay-today >= 0 ? eventDay-today : eventDay-today+31536000000
                dates = {...dates, [dif]: el }
            })

            const sortedArr = []
            
            Object.keys(dates).sort(function compareNumbers(a, b) {
                return a - b;
              }).forEach((el,i)=>{
                sortedArr.push(dates[el])
            })
            return (
                <div className="content">
                    <ContentItem event={sortedArr[0]} />
                    <ContentItem event={sortedArr[1]} />
                    <ContentItem event={sortedArr[2]} />
                </div>
            )
        

    }
}