import React, { useState } from 'react';

const FileUpload = ({ setResult, setError }) => {
    const API_URL = import.meta.env.VITE_API_URL || "localhost:80";
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        const formData = new FormData();
        formData.append('record', file);

        try {
            const response = await fetch(API_URL + '/delineation', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "File Upload Error");
            }

            setResult(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
            <input
                type="file"
                data-testid="fileInput"
                onChange={handleFileChange}
                className="block w-full mb-4 text-sm text-gray-700 border border-gray-300 rounded p-2"
            />

            <button
                onClick={handleUpload}
                disabled={loading}
                className={`w-full py-2 text-white font-semibold rounded-lg transition ${loading
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                    }`}
            >
                {loading ? 'Uploading...' : 'Upload your ECG File'}
            </button>
        </div>
    );
};

export default FileUpload;
