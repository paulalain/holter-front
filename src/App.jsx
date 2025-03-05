import React from 'react';
import { useState } from "react";
import {
    Card,
    CardBody,
} from "@material-tailwind/react";

import FileUpload from "@/components/FileUpload";
import ResultDisplay from "@/components/ResultDisplay";
import ErrorMessage from "@/components/ErrorMessage";
import "@/styles/globals.css";

export default function App() {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-2xl p-4">
                <h1 className="text-center text-lg font-semibold text-gray-800">Holter Summary App</h1>
                <CardBody className="space-y-4">
                    <FileUpload setResult={setResult} setError={setError} setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime} selectedDate={selectedDate} selectedTime={selectedTime} />
                    {error && <ErrorMessage error={error} />}
                    {result && <ResultDisplay result={result} selectedDate={selectedDate} selectedTime={selectedTime} />}
                </CardBody>
            </Card>
        </div>
    );
}