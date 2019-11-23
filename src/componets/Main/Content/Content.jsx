import React from 'react';
import './Content.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

            let settings = {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows : false,
                responsive : [
                  {
                    breakpoint:465,
                    // settings: "slick",
                  },
                  {
                    breakpoint:900,
                    settings: {
                        slidesToShow: 2,
                    },
                  },
                  
                  {
                    breakpoint:4000,
                    settings: {
                        slidesToShow: 3,
                    },
                  }
                ],
            };

            return (

                <div className="slick">
                    <Slider {...settings}>
                        
                        <ContentItem event={sortedArr[0]} />
                        <ContentItem event={sortedArr[1]} />
                        <ContentItem event={sortedArr[2]} />

                    </Slider>
                </div>
                
                // <div className="content">
                //     <ContentItem event={sortedArr[0]} />
                //     <ContentItem event={sortedArr[1]} />
                //     <ContentItem event={sortedArr[2]} />
                // </div>
            )
        

    }
}