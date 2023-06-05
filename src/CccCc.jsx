import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ReactCalendar from "react-calendar";
import { isSameDay } from "date-fns";
import 'react-calendar/dist/Calendar.css';


function CccCc() {
    const [value, onChange] = useState();
    
    const text = "바보임?"

    const show = ({ date, view }) => {
        if (view === "month") {
            const today = new Date();
            console.log(date)
            if (isSameDay(date, today)) {
                return <div>{text}</div>;
            }
        }
        return null;
    };

    return <ReactCalendar onChange={onChange} value={value} tileContent={show} />;
        // const [value, onChange] = useState(new Date());
    
    

    

    // return (
    //     <div>
    //         <Calendar 
    //             onChange={onChange} 
    //             alue={value} 

    //             TileContent={({ date, view }) => {
    //                 if (view === "month") {
    //                     const today = new Date();
    //                     if (isSameDay(date, today)) {
    //                         return <div>Today!</div>;
    //                     }
    //                 }
    //                 return null;
    //                 }
    //             }
    //             // TileContent={({ date, view }) => view === 'month' && date.getDay() === 4 ? <p>It's Sunday!</p> : null}
            
            
    //         />
    //     </div>
    // );
}

export default CccCc