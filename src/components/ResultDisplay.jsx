import React from 'react';

const ResultDisplay = ({ result, selectedDate, selectedTime }) => {
    const formatTimestamp = (selectedDate, selectedTime, timestamp) => {
        if (!selectedDate || !selectedTime) {
            return timestamp + " ms";
        }
    
        // Combine the selected date and time into a full datetime string
        const dateTimeString = `${selectedDate}T${selectedTime}`;
    
        // Create a Date object from the combined date-time string
        const date = new Date(dateTimeString);
    
        // Ensure the date is valid
        if (isNaN(date)) {
            return null;
        }
    
        // Add timestamp to the selected date
        date.setTime(date.getTime() + timestamp);

        // Format the timestamp as YYYY-mm-dd HH:mm:ss:MMM
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
    
        // Format the date and time with `Intl.DateTimeFormat`
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    
    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-800">ECG Summary</h2>
            <table className="w-full min-w-max table-auto text-left">
                <tbody>
                    <tr>
                        <td className="p-2">
                            Min Heart Rate
                        </td>
                        <td className="p-2 text-right">
                            {result.min_heart_rate} bpm
                        </td>
                        <td className="p-2 text-left">
                            {formatTimestamp(selectedDate, selectedTime, result.min_heart_rate_timestamp)}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2">
                            Max Heart Rate
                        </td>
                        <td className="p-2 text-right">
                            {result.max_heart_rate} bpm
                        </td>
                        <td className="p-2 text-left">
                            {formatTimestamp(selectedDate, selectedTime, result.max_heart_rate_timestamp)}
                        </td>

                    </tr>
                    <tr>
                        <td className="p-2">
                            Mean Heart Rate
                        </td>
                        <td className="p-2 text-right">
                            {result.mean_heart_rate} bpm
                        </td>
                        <td className="text-center">
                            -
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ResultDisplay;