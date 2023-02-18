import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './charts.css';

function EventCalendar() {
 const [date, setDate] = useState(new Date())



return (
 
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   
 
  )

}

export default EventCalendar;