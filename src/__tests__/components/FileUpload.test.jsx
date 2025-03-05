import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';


global.fetch = jest.fn();

import FileUpload from '../../components/FileUpload';

describe('FileUpload Component', () => {
    let setResult, setError;

    beforeEach(() => {
        setResult = jest.fn();
        setError = jest.fn();
        fetch.mockClear();
    });

    test('renders file input and upload button', () => {
        render(<FileUpload setResult={setResult} setError={setError} />);

        expect(screen.getByText('Upload your ECG File')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /upload your ecg file/i })).toBeInTheDocument();
        expect(screen.getByTestId(/fileInput/i)).toBeInTheDocument();
    });

    test('displays error when trying to upload without selecting a file', async () => {
        render(<FileUpload setResult={setResult} setError={setError} />);

        const uploadButton = screen.getByRole('button', { name: /upload your ecg file/i });
        fireEvent.click(uploadButton);

        expect(setError).toHaveBeenCalledWith('Please select a file to upload.');
    });

    test('successfully uploads a file and sets result', async () => {
        render(<FileUpload setResult={setResult} setError={setError} />);

        const file = new File(['dummy content'], 'test.ecg', { type: 'text/plain' });
        const fileInput = screen.getByTestId(/fileInput/i);

        fireEvent.change(fileInput, { target: { files: [file] } });

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: 'Upload Successful' })
        });

        const uploadButton = screen.getByRole('button', { name: /upload your ecg file/i });
        fireEvent.click(uploadButton);

        await waitFor(() => expect(setResult).toHaveBeenCalledWith({ message: 'Upload Successful' }));
    });

    test('displays error message when upload fails', async () => {
        render(<FileUpload setResult={setResult} setError={setError} />);

        const file = new File(['dummy content'], 'test.ecg', { type: 'text/plain' });
        const fileInput = screen.getByTestId(/fileInput/i);

        fireEvent.change(fileInput, { target: { files: [file] } });

        fetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ error: 'File Upload Error' })
        });

        const uploadButton = screen.getByRole('button', { name: /upload your ecg file/i });
        fireEvent.click(uploadButton);

        await waitFor(() => expect(setError).toHaveBeenCalledWith('File Upload Error'));
    });

    test('shows loading state when upload starts', async () => {
        render(<FileUpload setResult={setResult} setError={setError} />);

        const file = new File(['dummy content'], 'test.ecg', { type: 'text/plain' });
        const fileInput = screen.getByTestId(/fileInput/i);

        fireEvent.change(fileInput, { target: { files: [file] } });

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: 'Upload Successful' })
        });

        const uploadButton = screen.getByRole('button', { name: /upload your ecg file/i });
        fireEvent.click(uploadButton);

        expect(uploadButton).toHaveTextContent('Uploading...');
        await waitFor(() => expect(uploadButton).toHaveTextContent('Upload your ECG File'));
    });
});
