import { ApartmentService } from '../services/apartment/apartment-service.js';
import { compareDates } from '../lib/index.js';
import { log } from '../model/logger/index.js';
import { BookingActionService } from '../services/bookings/booking-action-service.js';
import { syncDateToMoscow } from '../model/lib.js';
import {
	sendFirstMessage,
	sendSecondMessage
} from './lib.js';

export async function createBooking(bookingModel) {
	if (!bookingModel.beginDate) {
		return;
	}

	try {
		const apartment = await ApartmentService.getApartmentById(bookingModel.apartmentId);
		bookingModel.createDate = syncDateToMoscow(new Date());

		const firstMsgSendingResult = await sendFirstMessage(bookingModel, apartment);
		if (firstMsgSendingResult.done) {
			bookingModel.firstMessageSent = true;
		}

		if (compareDates(bookingModel.beginDate, bookingModel.createDate)) {
			await log([
				'INFO',
				'CreateBooking',
				'ComparingDate',
				`BeginDate: ${bookingModel.beginDate.toISOString()}`,
				`CreateDate: ${bookingModel.createDate.toISOString()}`,
				`Booking: ${JSON.stringify(bookingModel)}`
			].join('. '))

			const secondMsgSendingResult = await sendSecondMessage(bookingModel, apartment);
			if (secondMsgSendingResult.done) {
				bookingModel.secondMessageSent = true;
			}
		}

		await BookingActionService.insertBooking(bookingModel);
	} catch (error) {
		await log(`ERROR. CreateBooking. ${error.name}: ${error.message}`);
	}
}
