import { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    const weekday = date.toLocaleString('default', { weekday: 'long' });
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`;

    return (
        <div className='date-wrap'>
            <div>
                <p>{weekday}</p>
                <p>{formattedDate}</p>
            </div>
            <p>{formattedTime}</p>
        </div>
    );
}

export default Clock;