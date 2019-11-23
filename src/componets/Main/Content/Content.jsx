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

<<<<<<< HEAD
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
=======
            return (
                <div className="content">
                    <ContentItem event={events[0]} />
                    <ContentItem event={events[1]} />
                    <ContentItem event={events[2]} />
>>>>>>> 0ddba8713000ea1521cbb9be8720671920250798
                </div>
                
                // <div className="content">
                //     <ContentItem event={sortedArr[0]} />
                //     <ContentItem event={sortedArr[1]} />
                //     <ContentItem event={sortedArr[2]} />
                // </div>
            )
        

    }
}