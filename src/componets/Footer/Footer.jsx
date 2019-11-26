import React from 'react';

import './Footer.css';
import holidays from '../Main/Content/holidays';

export default class Footer extends React.Component {
    constructor(props){
        super(props);


        
        // this.windowOnBeforeinstallprompt = (event) => {
        //     console.log('👍', 'beforeinstallprompt', event);
        //     // Stash the event so it can be triggered later.
        //     window.deferredPrompt = event;
        //     // Remove the 'hidden' class from the install button container
        //     this.divInstall.hidden= false;
        // }

        // this.butInstallOnClick = () => {
        //     console.log('👍', 'butInstall-clicked');
        //     const promptEvent = window.deferredPrompt
        //     if (!promptEvent) {
        //         // The deferred prompt isn't available.
        //         return;
        //     }
        //     // Show the install prompt.
        //     promptEvent.prompt();
        //     // Log the result
        //     promptEvent.userChoice.then((result) => {
        //         console.log('👍', 'userChoice', result);
        //         // Reset the deferred prompt variable, since 
        //         // prompt() can only be called once.
        //         window.deferredPrompt = null;
        //         // Hide the install button.
        //         this.divInstall.hidden = true;
        //     });
        // }
  

    }
    // componentDidMount(){      
    //     this.divInstall = document.getElementById('divInstall');
    //     this.butInstall = document.getElementById('butInstall');


    //     window.addEventListener('beforeinstallprompt', this.windowOnBeforeinstallprompt );
    //     this.butInstall.addEventListener('click', this.butInstallOnClick);
    // }

    // componentWillUnmount(){
    //     window.removeEventListener('beforeinstallprompt', this.windowOnBeforeinstallprompt );
    //     this.butInstall.removeEventListener('click', this.butInstallOnClick);
    // }
    
    
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
                <div className="days-left text">
                    {message} 
                </div>

                {/* Install button, hidden by default */}
                {/* <div id="divInstall" hidden>
                    <button id="butInstall" type="button">
                        Install
                    </button>
                </div> */}
            </footer>
        )
    }
}