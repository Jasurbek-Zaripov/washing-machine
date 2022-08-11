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
    { img: '/img/1.jpg', btn: 'Позвонит', title: 'Не сливает воду', body: 'устранение засора, замена фильтра, замена помпы', },
    { img: '/img/2.jpg', btn: 'Позвонит', title: 'Не отжимает', body: 'Замена электронного модуля, замена ремня привода, замена датчика уровния воды', },
    { img: '/img/3.jpg', btn: 'Позвонит', title: 'Протекает', body: 'Замена помпы, замена сливного шланга, замена манжеты', },
    { img: '/img/4.jpg', btn: 'Позвонит', title: 'Не греет воду', body: 'Замена ТЭНа, замена температурного датчика', },
    { img: '/img/5.jpg', btn: 'Позвонит', title: 'Не заливает воду', body: 'Устранение засора, замена заливного клапана, замена датчика уровня воды', },
    { img: '/img/6.jpg', btn: 'Позвонит', title: 'Прыгает и стучит', body: 'Удаление постороннего предмета, замена амортизаторов, замена подшипников', },
    { img: '/img/7.jpg', btn: 'Позвонит', title: 'Не крутит барабан', body: 'Замена ремня привода, замена подшипников', },
    { img: '/img/8.jpg', btn: 'Позвонит', title: 'Не включается', body: 'Замена электронного модуля, замена ТЭНа, замена сетевого шнура', },
    { img: '/img/9.jpg', btn: 'Позвонит', title: 'Неприятный запах', body: 'Необходимо протереть резиновую манжету, прочистить фильтр насоса слива воды', },
    { img: '/img/10.jpg', btn: 'Позвонит', title: 'Не открывается люк', body: 'Замена ручка, замена блокировки люка, замена модуля управления', },
    { img: '/img/11.jpg', btn: 'Позвонит', title: 'Зависают программы', body: 'Есть много причин, по которым СМА зависает. Нужно выполнить осмотр стиралки, попытаться отыскать и устранить неполадку.', },
    { img: '/img/12.jpg', btn: 'Позвонит', title: 'Требуется очистка', body: 'Свяжитесь с нами!', },
]);
store.set('uz/problems', [
    { img: '/img/1.jpg', btn: 'Qo\'ng\'iroq', title: 'Suvni to\'kib tashlamayapdi', body: 'Blokirovkani olib tashlash, filterni almashtirish, nasosni almashtirish kerak' },
    { img: '/img/2.jpg', btn: 'Qo\'ng\'iroq', title: 'Siqib chiqarmayapdi', body: 'Elektron modulni almashtirish, kamarni almashtirish, suv sathining sensorini almashtirish kerak' },
    { img: '/img/3.jpg', btn: 'Qo\'ng\'iroq', title: 'Suv Oqayapdi', body: 'Nasosni almashtirish, drenaj shlangini almashtirish, manjetni almashtirish kerak' },
    { img: '/img/4.jpg', btn: 'Qo\'ng\'iroq', title: 'Suvni isitmayapdi', body: 'Isitish elementini almashtirish, harorat sensorini almashtirish kerak' },
    { img: '/img/5.jpg', btn: 'Qo\'ng\'iroq', title: 'Suvni to\'sib qo\'ymayapdi', body: 'To\'siqni tozalash, to\'ldirish valfini almashtirish, suv sathi sensorini almashtirish kerak' },
    { img: '/img/6.jpg', btn: 'Qo\'ng\'iroq', title: 'Sakrayapdi va taqillayapdi', body: 'Chet jismni olib tashlash, amortizatorlarni almashtirish, podshipniklarni almashtirish kerak' },
    { img: '/img/7.jpg', btn: 'Qo\'ng\'iroq', title: 'Baraban aylanmayapdi', body: 'Drive kamarini almashtirish, podshipniklarni almashtirish kerak' },
    { img: '/img/8.jpg', btn: 'Qo\'ng\'iroq', title: 'Yoqilmayapdi', body: 'Elektron modulni almashtirish, isitish elementini almashtirish, quvvat simini almashtirish kerak' },
    { img: '/img/9.jpg', btn: 'Qo\'ng\'iroq', title: 'Yomon hid', body: 'Rezinali manjyetni artish, suvni chiqarish nasos filtrini tozalash kerak' },
    { img: '/img/10.jpg', btn: 'Qo\'ng\'iroq', title: 'Lyuk ochilmayapdi', body: 'Tutqichni almashtirish, lyuk qulfini almashtirish, boshqaruv modulini almashtirish kerak' },
    { img: '/img/11.jpg', btn: 'Qo\'ng\'iroq', title: 'Dasturiy ta\'minot pant beryapdi', body: 'Dasturiy ta\'minot pant berishining ko\'p sabablari mavjud. Bunda tekshiruv o\'tkazib keyin nosozlikni bartaraf etish lozim.' },
    { img: '/img/12.jpg', btn: 'Qo\'ng\'iroq', title: 'Tozalikka muhtoj', body: 'Bizga murojaat qiling!' },
]);

store.set('ru/2', 'Популярные поломки стиральных машин');
store.set('uz/2', 'Ko\'p uchraydigan nosozliklar');
store.set('ru/title', 'Ремонт стиральных машин с выездом на дом');
store.set('uz/title', 'Xonadonlarga borib kir yuvish mashinalarini tamirlash');
store.set('ru/lang', '/icons/ru.svg');
store.set('uz/lang', '/icons/uz.svg');
store.set('ru/menu', {
    home: 'Главная',
    about: 'Цены',
    contact: 'Контакт'
});
store.set('uz/menu', {
    home: 'Asosiy',
    about: 'Narxlar',
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

store.set('ru/step', {
    title: 'Наши этапы работы',
    items: [
        { name: 'Связываетесь с нами', body: 'Позвоните по телефону или оставьте заявку на сайте. Мы будем у вас уже через 30 минут', img: '/img/step1.png' },
        { name: 'Приезжает эксперт', body: 'Мастер проведет полную диагностику и расскажет про варианты ремонта', img: '/img/step2.png' },
        { name: 'Делает ремонт', body: 'Только после вашего согласия приступаем к ремонту.', img: '/img/step3.png' },
        { name: 'Вы Принимаете работу', body: 'Вы принимаете работы и получаете полный комплект документов - договор, чек, акт сдачи-приемки работ', img: '/img/step4.png' },
    ]
});
store.set('uz/step', {
    title: 'Ish bosqichlarimiz',
    items: [
        { name: 'Biz bilan bog\'laning', body: "Telefon orqali qo'ng'iroq qiling yoki saytda so'rov qoldiring. 30 daqiqada siz bilan bo'lamiz", img: '/img/step1.png' },
        { name: 'Mutahasis keladi', body: "Usta to'liq tashxis qo'yadi va sizga ta'mirlash imkoniyatlari haqida gapirib beradi.", img: '/img/step2.png' },
        { name: 'Ta\'mirlash ishlari', body: "Faqat sizning roziligingizdan keyin biz ta'mirlashni boshlaymiz.", img: '/img/step3.png' },
        { name: 'Ishni qabul qilasiz', body: "Siz ishni qabul qilasiz va hujjatlarning to'liq to'plamini olasiz - shartnoma, chek, ishni qabul qilish dalolatnomasi", img: '/img/step4.png' },
    ]
});

store.set('uz/logo', {
    title: "Biz barcha markadagi kir yuvish mashinalarini ta'mirlaymiz",
    items: [
        '/logo/aeg.png',
        '/logo/ardo.png',
        '/logo/asko.png',
        '/logo/atlant.png',
        '/logo/beko.png',
        '/logo/bosch.png',
        '/logo/brandt.png',
        '/logo/candy-logo.png',
        '/logo/daewoo.png',
        '/logo/electrolux.png',
        '/logo/eurosoba.png',
        '/logo/gorenje.png',
        '/logo/haier.png',
        '/logo/hansa-logo.png',
        '/logo/hotpoint.png',
        '/logo/indesit.png',
        '/logo/kaiser.png',
        '/logo/lg.png',
        '/logo/miele-logo.png',
        '/logo/samsung.png',
        '/logo/siemens.png',
        '/logo/vestel.png',
        '/logo/whirlpool.png',
        '/logo/zanussi.png',
    ]
});
store.set('ru/logo', {
    title: "Ремонтируем стиральные машины любых брендов",
    items: [
        '/logo/aeg.png',
        '/logo/ardo.png',
        '/logo/asko.png',
        '/logo/atlant.png',
        '/logo/beko.png',
        '/logo/bosch.png',
        '/logo/brandt.png',
        '/logo/candy-logo.png',
        '/logo/daewoo.png',
        '/logo/electrolux.png',
        '/logo/eurosoba.png',
        '/logo/gorenje.png',
        '/logo/haier.png',
        '/logo/hansa-logo.png',
        '/logo/hotpoint.png',
        '/logo/indesit.png',
        '/logo/kaiser.png',
        '/logo/lg.png',
        '/logo/miele-logo.png',
        '/logo/samsung.png',
        '/logo/siemens.png',
        '/logo/vestel.png',
        '/logo/whirlpool.png',
        '/logo/zanussi.png',
    ]
});
store.set('ru/info', {
    img: '/icons/info.svg',
    title: "О нас",
    body1: "'Mater Stiral' более 5 лет выполняет любые работы по обслуживанию бытовой техники. Вы можете вызвать мастера в Ташкенте, он недорого осуществит срочный ремонт стиральных машин с выездом на дом, также произведет починку холодильников, плит и другой бытовой техники всех марок.",
    body2: "Вызвать мастера можно в удобное для Вас время в любой округ Ташкента: в каждом районе города работают мастера и могут прибыть на заявку в течении часа.",
    body3: "На произведенные нами работы по ремонту стиральных машин на дому в Ташкенте недорого дается гарантия не менее 6 месяцев.",
    body4: "Три главные ценности «Mater Stiral» - оперативность, профессионализм и ориентированность на клиента.",
});
store.set('uz/info', {
    img: '/icons/info.svg',
    title: "Biz",
    body1: "'Mater Stiral' 5 yildan ortiq vaqt davomida maishiy texnikaga texnik xizmat ko'rsatish bo'yicha har qanday ishni amalga oshirmoqda. Siz Toshkentda Mutaxassis chaqirishingiz mumkin, u zudlik bilan Xonadonlarga borib kir yuvish mashinalarini ta'mirlashni arzon narxlarda amalga oshiradi, shuningdek, muzlatgich, pechka va boshqa barcha rusumdagi maishiy texnikalarni ta'mirlaydi.",
    body2: "Mutahasis chaqirish siz uchun qulay vaqtda Toshkentning istalgan tumanida bo'lishi mumkin: mutaxasislarimiz shaharning har bir tumanida ishlaydi va so'rov bo'yicha bir soat ichida yetib borishi mumkin.",
    body3: "Toshkentda kir yuvish mashinalarini uyda ta'mirlash bo'yicha ishimiz uchun kamida 1 yil kafolat beriladi.",
    body4: "'Mater Stiral' ning uchta asosiy qadriyati - samaradorlik, professionallik va mijozlarga e'tibor.",
});
let lang = { now: 'ru' };

import mit from 'mitt';
const event = mit();
export {
    store,
    lang,
    event
};