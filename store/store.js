const store = new Map();

store.set('ru', [
    {
        img: '/icons/free.svg',
        title: 'Бесплатно',
        body: 'Бесплатно диагностика'
    }, {
        img: '/icons/30.svg',
        title: '30 минут',
        body: 'Мастер приедет в течение 30 минут'
    }, {
        img: '/icons/fix.svg',
        title: 'Быстрий фикс',
        body: 'Стандартный заказ мастер выполняет за час.'
    }, {
        img: '/icons/24.svg',
        title: 'Время работа',
        body: 'Без выходных с 9:00 до 24:00'
    }, {
        img: '/icons/free.svg',
        title: 'Мастер',
        body: 'Выезд мастера бесплатный'
    }
    , {
        img: '/icons/warranty.svg',
        title: 'Гарантия',
        body: 'Гарантия от 365 дней'
    }
]
);

store.set('uz', [{
    img: '/icons/free.svg',
    title: 'Bepul',
    body: 'Bepul diagmostika xizmati'
}, {
    img: '/icons/30.svg',
    title: '30 minut',
    body: 'Mutaxasis 30 daqiqa ichida yetib keladi'
}, {
    img: '/icons/fix.svg',
    title: 'Tezkor tamir',
    body: 'Standar buyurtma bir soat ichida hal bo\'ladi'
}, {
    img: '/icons/24.svg',
    title: 'Ish vaqti',
    body: 'Soat 9:00 dan 24:00 gacha dam olishsiz'
}, {
    img: '/icons/free.svg',
    title: 'Mutaxasis',
    body: 'Mutaxasis kelishi bepul'
}
    , {
    img: '/icons/warranty.svg',
    title: 'Kafolat',
    body: 'Kafolat 365 kunga'
}
]
);

store.set('ru/problems', [
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Не сливает воду', body: 'устранение засора, замена фильтра, замена помпы', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Не отжимает', body: 'Замена электронного модуля, замена ремня привода, замена датчика уровния воды', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Протекает', body: 'Замена помпы, замена сливного шланга, замена манжеты', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Не греет воду', body: 'Замена ТЭНа, замена температурного датчика', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Не заливает воду', body: 'Устранение засора, замена заливного клапана, замена датчика уровня воды', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Прыгает и стучит', body: 'Удаление постороннего предмета, замена амортизаторов, замена подшипников', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Не крутит барабан', body: 'Замена ремня привода, замена подшипников', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Не включается', body: 'Замена электронного модуля, замена ТЭНа, замена сетевого шнура', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Неприятный запах', body: 'Необходимо протереть резиновую манжету, прочистить фильтр насоса слива воды', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Не открывается люк', body: 'Замена ручка, замена блокировки люка, замена модуля управления', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Зависают программы', body: 'Есть много причин, по которым СМА зависает. Нужно выполнить осмотр стиралки, попытаться отыскать и устранить неполадку.', },
    { img: '/img/women.jpg', btn: 'Позвонит', title: 'Требуется очистка', body: 'Свяжитесь с нами!', },
]);
store.set('uz/problems', [
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Suvni to\'kib tashlamayapdi', body: 'Blokirovkani olib tashlash, filterni almashtirish, nasosni almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Siqib chiqarmayapdi', body: 'Elektron modulni almashtirish, kamarni almashtirish, suv sathining sensorini almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Suv Oqayapdi', body: 'Nasosni almashtirish, drenaj shlangini almashtirish, manjetni almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Suvni isitmayapdi', body: 'Isitish elementini almashtirish, harorat sensorini almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Suvni to\'sib qo\'ymayapdi', body: 'To\'siqni tozalash, to\'ldirish valfini almashtirish, suv sathi sensorini almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Sakrayapdi va taqillayapdi', body: 'Chet jismni olib tashlash, amortizatorlarni almashtirish, podshipniklarni almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Baraban aylanmayapdi', body: 'Drive kamarini almashtirish, podshipniklarni almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Yoqilmayapdi', body: 'Elektron modulni almashtirish, isitish elementini almashtirish, quvvat simini almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Yomon hid', body: 'Rezinali manjyetni artish, suvni chiqarish nasos filtrini tozalash kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Lyuk ochilmayapdi', body: 'Tutqichni almashtirish, lyuk qulfini almashtirish, boshqaruv modulini almashtirish kerak' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Dasturiy ta\'minot pant beryapdi', body: 'Dasturiy ta\'minot pant berishining ko\'p sabablari mavjud. Bunda tekshiruv o\'tkazib keyin nosozlikni bartaraf etish lozim.' },
    { img: '/img/women.jpg', btn: 'Qo\'ng\'iroq', title: 'Tozalikka muhtoj', body: 'Bizga murojaat qiling!' },
]);

store.set('ru/2', 'Популярные поломки стиральных машин');
store.set('uz/2', 'Ko\'p uchraydigan nosozliklar');
store.set('ru/title', 'Ремонт стиральных машин с выездом на дом');
store.set('uz/title', 'Xonadonlarga borib kir yuvish mashinalarini tamirlash');
store.set('ru/lang', '/icons/ru.svg');
store.set('uz/lang', '/icons/uz.svg');
store.set('ru/menu', {
    home: 'Главная',
    about: 'О нас',
    contact: 'Контакт'
});
store.set('uz/menu', {
    home: 'Asosiy',
    about: 'Biz haqimizda',
    contact: 'Aloqa'
});
store.set('ru/price', {
    title: 'Популярные цены',
    items: [
        { name: 'Выезд мастера', price: 'бесплатно' },
        { name: 'Диагностика', price: 'бесплатно' },
        { name: 'Замена датчика температуры', price: 'от 150 000 сум' },
        { name: 'Замена термостата', price: 'от 210 000 сум' },
        { name: 'Замена ремня привода', price: 'от 230 000 сум' },
        { name: 'Расширенная гарантия 1 год', price: 'бесплатно' },
        { name: 'Замена ТЭН', price: 'от 120 000 сум' },
        { name: 'Ремонт платы', price: 'от 210 000 сум' },
        { name: 'Замена фильтра залива воды', price: 'от 220 000 сум' },
        { name: 'Замена насоса', price: 'от 310 000 сум' },
    ]
});
store.set('uz/price', {
    title: 'Ommabop narxlar',
    items: [
        { name: 'Mutaxasisning kelishi', price: 'tekin' },
        { name: 'Diagnostika', price: 'tekin' },
        { name: 'Harorat sensorini almashtirish', price: '150 000 сум dan boshlab' },
        { name: 'Termostatni almashtirish', price: '210 000 сум dan boshlab' },
        { name: 'Drive kamarini almashtirish', price: '230 000 сум dan boshlab' },
        { name: 'Kengaytirilgan kafolat 1 yil', price: 'tekin' },
        { name: 'Isitish elementini almashtirish', price: '120 000 сум dan boshlab' },
        { name: 'Platani ta\'mirlash', price: '210 000 сум dan boshlab' },
        { name: 'Suv kirish filtrini almashtirish', price: '220 000 сум dan boshlab' },
        { name: 'Nasosni almashtirish', price: '310 000 сум dan boshlab' },
    ]
});

let lang = { now: 'ru' };

import mit from 'mitt';
const event = mit();
export {
    store,
    lang,
    event
};