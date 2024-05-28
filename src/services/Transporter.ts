// src/services/transporter.ts

import axios, { AxiosResponse, AxiosError } from 'axios';

// Function to send a POST request to a given URL with data
export async function sendPostRequest(url: string, data: any): Promise<AxiosResponse<any>> {
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        
        throw error;
    }
}