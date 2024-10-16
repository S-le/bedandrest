import { BRAND } from '../const.js';

export class LeaveMessageCreator {
    constructor(data) {
        this.data = data;
    }

    makeMessage() {
        const message = `
Здравствуйте!

🙏 Благодарим вас за выбор квартир BedAndRest для вашего проживания. Надеемся, что вам понравилось у нас и вы остались довольны сервисом.

🏠 Порядок выезда из квартиры:

    📞 Пожалуйста, сообщите администратору о вашем выезде по телефону или в WhatsApp.
    🧳 Соберите все свои вещи, чтобы ничего не забыть.
    🔑 Оставьте ключи в кейбоксе (сейфе), который находится на двери.
    🚪 Закройте дверь при выходе из квартиры.


⏰ Обратите внимание: залоги будут возвращены после 18:00 в день выезда.

💬 Нам важно ваше мнение!

Мы будем очень признательны, если вы найдете минуту, чтобы поделиться своими впечатлениями о пребывании у нас. Ваш отзыв поможет нам улучшить качество наших услуг и будет полезен другим гостям.

    ✍️ Вы можете оставить отзыв на Яндекс Картах https://clck.ru/3DqqMW
    📞 Если у вас есть предложения или замечания, пожалуйста, свяжитесь напрямую с нашим директором по телефону или в WhatsApp: https://wa.me/79145555895

Если у вас остались вопросы или нужна помощь, не стесняйтесь обращаться к нам.

🌟 Желаем вам всего наилучшего и будем рады видеть вас снова!

С уважением,

Команда ${BRAND}


https://blg.bedandrest.ru/ - наши квартиры здесь.

📞 +7 (963) 802-45-59

📞 +7 (914) 558-40-44
        `;

        return message;
    }
}
