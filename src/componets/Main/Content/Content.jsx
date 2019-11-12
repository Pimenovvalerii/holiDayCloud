import React from 'react';
import './Content.css';

import ContentItem from './ContentItem';
import holidays from './holidays';

export default class Content extends React.Component {

    render(){
            const today = new Date;
            let dates = {}

            if(this.props.user){
            this.props.user.array.concat(holidays).forEach(el => {
                const day = el.data
                
                let eventDay = new Date(day)
                eventDay.setFullYear(today.getFullYear())
                // eventDay-today => меньше - ближе(раньше в списке) if <0   +31536000000
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
              }).forEach((el,i)=>{
                sortedArr.push(dates[el])
            })
            return (
                <div className="content">
                    {/* <ContentItem event={sortedArr[0]} /> */}
                    {/* <ContentItem event={sortedArr[1]} /> */}
                    {/* <ContentItem event={sortedArr[2]} /> */}
                </div>
            )
        

    }
}