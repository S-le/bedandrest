import dotenv from 'dotenv';
import { confirmBooking } from '../model/book.js';
import { log } from '../model/logger/index.js';

dotenv.config();

export async function GET(request) {
    try {
        await confirmBooking();
    } catch (error) {
        await log(['Start job error', error]);
    }
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
