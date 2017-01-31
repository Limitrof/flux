// ListStore.js
import {EventEmitter} from 'events';
import _ from 'lodash';

let ListStore = _.extend({}, EventEmitter.prototype, {


//Охват (количество участников)
    usersQuantity: 1600,
    inStore_getUsersQuantity: function(){
        return this.usersQuantity;
    },
//Количество участников
    /*usersQuantiy: 1600,
     inStore_getUsersQuantiy: function(){
     return this.usersQuantiy;
     },*/

//Количество победителей
    vinnersQuantiy: 500,
    inStore_getVinnersQuantiy: function(){
        return this.vinnersQuantiy;
    },

//Количество дистрибьюторов
    distributorQuantiy: 1,
    inStore_getDistributorQuantiy: function(){
        return this.distributorQuantiy;
    },

//Разработка программы
    billDev: 0,
    inStore_getBillDev: function(){
        return this.billDev;
    },

//Платформа для Программы лояльности
    billPlatform: 0,
    inStore_getBillPlatform: function(){
        return this.billPlatform;
    },

//Дизайн key visual
    billDesign:0,
    inStore_getBillDesign: function(){
        return this.billDesign;
    },

//Призовой фонд
    billBonus: 0,
    inStore_getBillBonus: function(){
        return this.billBonus;
    },

//Качество контакта
    qualityLevel:"высокое",
    inStore_getQualityLevel: function(){
        return this.qualityLevel;
    },

//Среднее количество контактов за Программу
    contactsQuantity:3200,
    inStore_getContactsQuantity: function(){
        return this.contactsQuantity;
    },

//Общая сумма
    sum: 0,
    getSum: function(){
        return this.sum;
    },

    // Mock default data
    /*   items: [
     {
     name: 'Item 1',
     id: 0
     },
     {
     name: 'Item 2',
     id: 1
     }
     ],




     Футболка	500 шт.	2970	EUR
     Описание
     Полиэтиленовый пакет-майка	____ шт.	____	EUR

     Баннер с люверсами, 1х1,5 м	200 шт.	1250	EUR

     Плакат А2 полноцветный	500 шт.	378	EUR

     Каталог , формат А4	500 шт.	1750	EUR
     Хранение и доставка дистрибьюторам		цена по запросу

     Цены указаны с учетом нанесения логотипа

     */



    items: [
        {
            id:14,
            unicname:'ыite_structure',
            indexid:31,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Структура сайта',
            baseprice: 0,
            price: 250,
            stocked: true,
            name: 'Структура сайта',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'none'
        },
        {
            id:15,
            unicname:'design_sayt',
            indexid:32,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Дизайн сайта',
            baseprice: 0,
            price: 750,
            stocked: true,
            name: 'Дизайн сайта',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'none'
        },
        {
            id:155,
            unicname:'site_layout',
            indexid:325,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Вёрстка сайта (адаптивная)',
            baseprice: 0,
            price: 1050,
            stocked: true,
            name: 'Вёрстка сайта (адаптивная)',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'none'
        },
        {
            id:16,
            unicname:'control_system',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Система управления',
            baseprice: 0,
            price: 750,
            stocked: true,
            name: 'Система управления',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:17,
            unicname:'basket',
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Корзина',
            baseprice: 0,
            price: 90,
            stocked: true,
            name: 'Корзина',
            arrOfVlue:1,
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'none'
        },
        {
            id:18,
            unicname:'one_click',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Заказ в один клик',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Заказ в один клик',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:19,
            unicname:'sayt3',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Зависимость стоимости товара от его модификации',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Зависимость стоимости товара от его модификации',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:20,
            unicname:'interactive_calculation',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Интерактивный расчёт стоимости',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Интерактивный расчёт стоимости',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:21,
            unicname:'interactive_calculation',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Личный кабинет покупателя',
            baseprice: 0,
            price: 300,
            stocked: true,
            name: 'Личный кабинет покупателя',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:22,
            unicname:'sign',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Авторизация через социальные сети',
            baseprice: 0,
            price: 120,
            stocked: true,
            name: 'Авторизация через социальные сети',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:23,
            unicname:'banner',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Баннеры с акциями и предложениями',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Баннеры с акциями и предложениями',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:24,
            unicname:'slider',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Слайдер',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Слайдер',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:25,
            unicname:'loyalty',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Инструменты лояльности, скидки, карты',
            baseprice: 0,
            price: 240,
            stocked: true,
            name: 'Инструменты лояльности, скидки, карты',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:26,
            unicname:'payment',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Оплата картой и онлайн-платежи',
            baseprice: 0,
            price: 120,
            stocked: true,
            name: 'Оплата картой и онлайн-платежи',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:27,
            unicname:'catalog',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Каталог продукции (от 100 до 3 000)',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Каталог продукции (от 100 до 3 000)',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:28,
            unicname:'sorting',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Сортировка товаров в каталоге',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Сортировка товаров в каталоге',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:29,
            unicname:'multicategories',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Мультикатегории',
            baseprice: 0,
            price: 120,
            stocked: true,
            name: 'Мультикатегории',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:30,
            unicname:'multicurrency',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Мультивалютность',
            baseprice: 0,
            price: 90,
            stocked: true,
            name: 'Мультивалютность',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:31,
            unicname:'import',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Импорт/экспорт товаров',
            baseprice: 0,
            price: 240,
            stocked: true,
            name: 'Импорт/экспорт товаров',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:32,
            unicname:'yandex',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Выгрузка каталога в Яндекс.Маркет',
            baseprice: 0,
            price: 120,
            stocked: true,
            name: 'Выгрузка каталога в Яндекс.Маркет',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:33,
            unicname:'search',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Поиск по каталогу (текстовый)',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Поиск по каталогу (текстовый)',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:34,
            unicname:'filter',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Фильтр товаров (до 10 категорий)',
            baseprice: 0,
            price: 120,
            stocked: true,
            name: 'Фильтр товаров (до 10 категорий)',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:35,
            unicname:'site_search',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Поиск по сайту',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Поиск по сайту',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:36,
            unicname:'compare_products',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Сравнение товаров',
            baseprice: 0,
            price: 150,
            stocked: true,
            name: 'Сравнение товаров',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:37,
            unicname:'favorites_module',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Модуль «Избранное»',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Модуль «Избранное»',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:38,
            unicname:'viewed_products',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Модуль «Просмотренные товары»',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Модуль «Просмотренные товары»',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:39,
            unicname:'featured_products',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Модуль «Рекомендуемые товары»',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Модуль «Рекомендуемые товары»',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:40,
            unicname:'geo_content',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Геозависимый контент',
            baseprice: 0,
            price: 120,
            stocked: true,
            name: 'Геозависимый контент',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:41,
            unicname:'news_feed',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Лента новостей',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Лента новостей',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:42,
            unicname:'subscribe_to_news',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Подписка на новости',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Подписка на новости',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:43,
            unicname:'rss',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'RSS-канал',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'RSS-канал',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:44,
            unicname:'publications',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Статьи и публикации',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Статьи и публикации',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:45,
            unicname:'tag_systems',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Система тегов',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Система тегов',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:46,
            unicname:'comment',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Комментарии к публикациям (собственная)',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Комментарии к публикациям (собственная)',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:47,
            unicname:'rating',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Рейтинг товаров',
            baseprice: 0,
            price: 90,
            stocked: true,
            name: 'Рейтинг товаров',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:48,
            unicname:'reviews',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Отзывы',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Отзывы',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:49,
            unicname:'surveys',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Голосования и опросы',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Голосования и опросы',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:50,
            unicname:'jivosite',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Онлайн-консультант (Jivosite)',
            baseprice: 0,
            price: 30,
            stocked: true,
            name: 'Онлайн-консультант (Jivosite)',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:51,
            unicname:'online_consultant(own)',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Онлайн-консультант (собственный)',
            baseprice: 0,
            price: 750,
            stocked: true,
            name: 'Онлайн-консультант (собственный))',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:52,
            unicname:'questions',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Часто задаваемые вопросы',
            baseprice: 0,
            price: 90,
            stocked: true,
            name: 'Часто задаваемые вопросы',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:53,
            unicname:'gallery',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Фотогалерея / портфолио',
            baseprice: 0,
            price: 120,
            stocked: true,
            name: 'Фотогалерея / портфолио',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:54,
            unicname:'feedback_form',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Форма обратной связи',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Форма обратной связи',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:55,
            unicname:'forum',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Форум',
            baseprice: 0,
            price: 360,
            stocked: true,
            name: 'Форум',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:56,
            unicname:'forum',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Карта сайта',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Карта сайта',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:57,
            unicname:'map',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Карта сайта',
            baseprice: 0,
            price: 60,
            stocked: true,
            name: 'Карта сайта',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        },
        {
            id:58,
            unicname:'social_networks',
            indexid:33,
            usehiddencheckbox:false,
            ischecked:false,
            category: 'Дизайн',
            showwordprefix:'от',
            showwordsuffix:'€',
            comment:'Интеграция с соцсетями',
            baseprice: 0,
            price: 360,
            stocked: true,
            name: 'Интеграция с соцсетями',
            arrOfVlue:'none',
            formula: 'multi',
            multinumber:1,
            additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'count_for_banneranim'
        }



    ],

    // Get all items
    getItems: function(){
        return this.items;
    },

    // Add item
    addItem: function(new_item){
        this.items.push(new_item);
    },

    // Remove item
    removeItem: function(item_id){

        let items = this.items;

        _.remove(items,(item) => {
            return item_id == item.id;
        });

        this.items = items;

    },
    //перезаписываем значение из select(a)
    changeValueInSelect: function(valueandidinobj){
        //let contactsQuantity = 0;//megaERROR - it actual only for "period"
        let contactsQuantity = this.contactsQuantity;
        let usersQuantity = this.usersQuantity;
        let items = this.items;
        items.map(function(currentRow,index) {
            if(currentRow.unicname == valueandidinobj.id || currentRow.multinumber_source_unicname == valueandidinobj.id ){
                //в случае если изменен формат доставки
                /*if(currentRow.unicname == "delivery" && currentRow.unicname == valueandidinobj.id ){
                 /!*
                 items[index].price=valueandidinobj.value;
                 items[index].baseprice=valueandidinobj.value;
                 *!/
                 //МЕНЯЕМ ЗНАЧЕНИЕ БАЗОВОЙ ЦЕНЫ
                 //во всех остальных случаях сохраняем новое значение в multinumber to do - возможно лучше хранить
                 // занчения в переменных
                 } else if(currentRow.unicname == "period") {
                 //alert("valueandidinobj.value="+valueandidinobj.value);
                 //количество контактов = количество участников * количество месяцев проведения акции * 2
                 contactsQuantity = usersQuantity * valueandidinobj.value * 2;
                 //alert("contactsQuantity="+contactsQuantity);
                 items[index].multinumber=valueandidinobj.value;
                 } else {*/
                items[index].multinumber=valueandidinobj.value;
                /*}*/
            }
        });
        this.items = items;//ОЧЕНЬ важно обновить хранилище
        //if(contactsQuantity!=0){
        this.contactsQuantity = contactsQuantity;
        //}
        this.addAndRecountAll();
    },

    //перезапись введенного в input значения
    changeValue:function(valuebyid){
        //alert("We have id="+valuebyid.id+" and value="+valuebyid.value);
        let items = this.items;
        let users_quantity = 0;
        let vinners_quantity = 0;
        let simple_users_quantity = 0;
        items.map(function(currentRow,index) {

            //инициализируем переменные для перерасчета кол-ва учатников на основе нового количества победителей
            // введнных пользователем
            if(currentRow.unicname == valuebyid.id && currentRow.unicname == 'vinners_quantity'){
                users_quantity = valuebyid.value*3;//
            } else if(currentRow.unicname == valuebyid.id && currentRow.unicname == 'usersQuantity'){
                vinners_quantity = parseInt(valuebyid.value/3);//valuebyid.value
                simple_users_quantity = valuebyid.value;
            }


            //- изменяем текущее значение инпута в соответствии со значением введенным пользователем
            // ИЛИ !!! изменяем дополнительно значение используемое для рассчета суммы подарка
            if(currentRow.unicname == valuebyid.id || currentRow.multinumber_source_unicname == valuebyid.id ){
                items[index].multinumber=valuebyid.value;
            }
        });

        //на второй итерации вводим значение переменной
        //запускаем ТОЛЬКО ЕСЛИ значения победителей или участников необходимо менять
        if(users_quantity != 0 || vinners_quantity != 0){
            items.map(function(currentRow,index) {
                if( (currentRow.unicname == 'vinners_quantity' || currentRow.multinumber_source_unicname ==  'vinners_quantity' ) && vinners_quantity != 0){
                    items[index].multinumber = vinners_quantity;
                } else if( currentRow.unicname == 'usersQuantity' && users_quantity != 0){
                    items[index].multinumber = users_quantity;
                }
            });
        }
        if(vinners_quantity!=0){
            this.vinnersQuantiy=vinners_quantity;
        }
        if(users_quantity!=0){
            this.usersQuantity=users_quantity;
        }
        if(simple_users_quantity!=0){
            this.usersQuantity=simple_users_quantity;
        }
        this.items = items;
        this.addAndRecountAll();
    },
    //calculate budget
    culculateBudget: function(value){
        let levelQuality = this.qualityLevel;
        if(value<30000){
            alert("Проведение акции с бюджетом менее 30000 не рентабельно.");
            return;
        }else if(value<42000){
            levelQuality = "среднее";
        }else{
            levelQuality = "высокое";
        }

        //let distributorQuantity = this.distributorQuantiy;
        if( (this.distributorQuantiy*600) > (value/2) ){
            alert("Для данного количество дистрибьюторов, при условии их премирования, бюджет недостаточен.");
            return;
        }

        this.qualityLevel = levelQuality;
        let items = this.items;
        let simpleSum = 0;
        let vinnerQuantity = 0;
        let usersQuantity  = 0;
        //let hiddenPay = 0
        items.map(function(currentRow,index) {
            //перебираем все чекбоксы и зачекиваем их
            if(!currentRow.usehiddencheckbox){
                items[index].ischecked = true;

                //Определяем общую сумму всех услуг во всех разделах кроме currentRow.ischecked == "Призовой фонд" +
                // подбор поощрений + сумма бонусов дистрибьюторам из "Призового фонда"
                if(currentRow.category != "Призовой фонд" || currentRow.unicname == 'bonus_for_disr' || currentRow.unicname == 'bonus_find'){
                    if(currentRow.unicname == 'bonus_for_disr'){
                        // alert('distr items[index].multinumber='+items[index].multinumber);
                    }
                    simpleSum  += parseInt(items[index].price*items[index].multinumber);
                }
            }

        });
        //console.log('Стоимость услуг в разделах 2-4 ' + simpleSum);
        //console.log("Призовой фонд="+ (value-simpleSum));
        //3000 - сумма на юридические услуги
        //66 - коэффициент рассчитываемый на основе  38 (за приз) + 5.7 (за брендирование приза) + 5(за хранение) +
        // 2 (за доставку)
        // + 15 (hidden)
        vinnerQuantity = parseInt((value-simpleSum-3000)/66);
        usersQuantity = vinnerQuantity*3;
        items.map(function(currentRow,index) {
            if(currentRow.unicname == 'vinners_quantity' || currentRow.multinumber_source_unicname == 'vinners_quantity'){
                items[index].multinumber = vinnerQuantity;
                //this.vinnerQuantity = vinnerQuantity; //ERRthis not contain vinnerQuantity;
            } else if(currentRow.unicname == 'usersQuantity') {
                items[index].multinumber = usersQuantity;

            }
        });
        this.vinnersQuantiy = vinnerQuantity;
        this.usersQuantity = usersQuantity;
        this.items = items;
        this.addAndRecountAll();
    },

    //sum recount
    addSumItem: function(item_id){
        let items = this.items;

        /*         let billDev = this.billDev;
         let billPlatform = this.billPlatform;
         let billDesign = this.billDesign;
         let billBonus = this.billBonus;*/

        items.map(function(currentRow,index) {
            if(currentRow.id == item_id){
                if(currentRow.ischecked == false){
                    items[index].ischecked=true;
                } else {
                    items[index].ischecked=false;
                }

            }
        });
        this.items = items;
        this.addAndRecountAll();
    },

    addAndRecountAll: function(){

        let items = this.items;
        let billDev = 0;
        let billPlatform = 0;
        let billDesign = 0;
        let billBonus = 0;

        items.map(function(currentRow,index) {
            if(currentRow.ischecked){
                switch (currentRow.category) {
                    case "Разработка программы":
                        billDev += items[index].price*items[index].multinumber;
                        break
                    case "Платформа для Программы лояльности:":
                        billPlatform += items[index].price*items[index].multinumber;
                        break
                    case "Дизайн":
                        /* if(currentRow.unicname=='price_for_banner'){
                         billDesign =  billDesign + items[index].price*items[index].multinumber + 30;

                         }else{ */

                        billDesign += parseInt(items[index].price*items[index].multinumber);
                        /*   } */
                        break
                    case "Призовой фонд":
                        if(currentRow.unicname=='bonus_create'){
                            // var hiddenPay = items[index].multinumber*15 ;
                            //billBonus += hiddenPay + items[index].price*items[index].multinumber;
                            billBonus += items[index].price*items[index].multinumber;
                        } else{
                            if(currentRow.min!=0 && items[index].baseprice!=0 && items[index].baseprice*items[index].multinumber<currentRow.min){
                                items[index].price  = currentRow.min;
                                billBonus += currentRow.min;
                            } else {
                                if(items[index].baseprice!=0){

                                    billBonus += items[index].baseprice*items[index].multinumber;
                                }else{

                                    billBonus += items[index].price*items[index].multinumber;
                                }
                            }

                        }
                        break
                }
            }
        });
        this.sum =  billDev + billPlatform + billDesign + billBonus;
        this.items = items;
        this.billDev = billDev;
        this.billPlatform = billPlatform;
        this.billDesign = billDesign;
        this.billBonus = parseInt(billBonus);

    },

    clearCategory: function(categoryName){
        let items = this.items;
        items.map(function(currentRow,index) {
            if (items[index].category == categoryName){
                items[index].ischecked = false;
            }
        });
        this.items = items;
        this.addAndRecountAll();
    },

    // Emit Change event
    emitChange: function(){
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback){
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

export default ListStore;
