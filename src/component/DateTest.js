import { SingleDatePicker, RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

const DateTest = () =>{
    return(<div>
        <h2>SingleDatePicker</h2>
        <SingleDatePicker
            startDate={new Date(2020, 0, 15)} />
        <h2>RangeDatePicker with startDate and endDate</h2>
        <RangeDatePicker
            startDate={new Date(2021, 0, 1)}
            endDate={new Date(2021, 1, 1)}
        />
    </div>)
}

export default DateTest;