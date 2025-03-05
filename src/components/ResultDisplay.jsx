import React from 'react';

const ResultDisplay = ({ result }) => {
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
                    <td className="p-2 text-right">
                        {result.min_heart_rate_timestamp} ms 
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        Max Heart Rate
                    </td>
                    <td className="p-2 text-right">
                        {result.max_heart_rate} bpm 
                    </td>
                    <td className="p-2 text-right">
                        {result.max_heart_rate_timestamp} ms 
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