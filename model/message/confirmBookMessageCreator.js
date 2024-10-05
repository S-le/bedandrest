class ConfirmBookMessageCreator {
    constructor(data) {
        this.data = data;
    }

    makeMessage() {
        return `
Здравствуйте!

🎉 Сегодня мы рады приветствовать Вас в квартире от BedAndRest!

Чтобы Ваше заселение прошло быстро и без задержек, пожалуйста:

    Позвоните нам за 1 час до прибытия, чтобы мы могли подготовиться к Вашему заселению.

    📞 +7 (914) 558-40-44

    📞 +7 (963) 802-45-59

На нашем сайте представлены самые выгодные предложения по аренде квартир:

🌐 🌟 https://blg.bedandrest.ru/katalog-kvartir/

Если у Вас возникнут вопросы или потребуется помощь, мы всегда на связи.

До скорой встречи! Желаем Вам прекрасного пребывания.

С уважением,
Команда BedAndRest`;
    }

    #makeDocumentBlock() {
        return `
        Подпишите онлайн-договор аренды (это займет всего пару минут):
    
        🔗 👉 Подписать онлайн-договор
    `;
    }
}

module.exports = {
    ConfirmBookMessageCreator
};
