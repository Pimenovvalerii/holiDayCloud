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

            const events = this.props.user
                ? this.props.user.array.concat(holidays)
                : holidays;

                events.sort((a, b)=>{
                        const d1 = new Date(a.data).setFullYear(today.getFullYear())
                        const d2 = new Date(b.data).setFullYear(today.getFullYear())
                        const dif1 = d1-today > 0 ? d1-today : d1-today + 31536000000
                        const dif2 = d2-today > 0 ? d2-today : d2-today + 31536000000
                    return dif1 - dif2
                })

            return (
                <div className="content">
                    <ContentItem event={events[0]} />
                    <ContentItem event={events[1]} />
                    <ContentItem event={events[2]} />
                </div>
            )
        

    }
}