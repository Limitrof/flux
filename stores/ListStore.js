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
  ], */
   items: [{
	   id:1,
				name:'period',
				unicname:'period',
				indexid:1,
				usehiddencheckbox:true,
				ischecked:false,
				category: 'Вводные данные: общая информация о программе лояльности', 
				showwordprefix:'', 
				showwordsuffix:'', 
				comment:'ориентировочное время проведения Программы',
				baseprice: '0', 
				price: '', 
				stocked: true, 
				name: 'Укажите длительность Программы', 
			  	arrOfVlue:[{valOf:1,strInfo:'1 месяц'},{valOf:2,strInfo:'2 месяца'},{valOf:3,strInfo:'3 месяца'},{valOf:4,strInfo:'4 месяца'},{valOf:5,strInfo:'5 месяцев'},{valOf:6,strInfo:'более 6' +
                ' месяцев'}],
				formula: 'select',
				multinumber:1, 
				needit: false, min:0,multinumber_source_unicname:'none'
				},
		//2
			  {
				  id:2,
				unicname:'distributorQuantiy',
				indexid:2,
				usehiddencheckbox:true,
				ischecked:false,
				category: 'Вводные данные: общая информация о программе лояльности',
				showwordprefix:'',
				showwordsuffix:'', 
				comment:'кол-во дистрибьюторов',
				baseprice: '0', 
				price: '',
				stocked: false, 
				name: 'Укажите количество дистрибъюторов', 
				arrOfVlue:'none',
				formula: 'inputvalue',
				multinumber:1, 
				needit: false, min:0,multinumber_source_unicname:'none'
			  },
			//3
			  {
				  id:3,
				  unicname:'budget',
				  indexid:3,
				  usehiddencheckbox:true,
				  ischecked:false,
				  category: 'Вводные данные: общая информация о программе лояльности',
				  showwordprefix:'', 
				  showwordsuffix:'', 
				  comment:'рекомендуем оптимальный бюджет ',
				  baseprice: '0', 
				  price: '', 
				  stocked: false, 
				  name: 'Ориентировочный бюджет Программы', 
				  arrOfVlue:50000, 
				  formula: 'inputvalue',
				  multinumber:50000,
				  needit: false, min:0,multinumber_source_unicname:'none'
				  },
			//4
			  {
				  id:4,
				  unicname:'region',
				  indexid:4,
				  usehiddencheckbox:true,
				  ischecked:false,
				  category: 'Вводные данные: общая информация о программе лояльности',
				  showwordprefix:'', 
				  showwordsuffix:'', 
				  comment:'some comment text', 
				  baseprice: '0',
				  price: '', 
				  stocked: true,
				  name: 'География программы',	  
				  arrOfVlue:[{valOf:1,strInfo:'Беларусь'},{valOf:2,strInfo:'Россия'},{valOf:2,strInfo:'Украина'},{valOf:3,strInfo:'Казахстан'},{valOf:4,strInfo:'Другие страны'},{valOf:4,strInfo:'Три страны Прим. Украина, Россия, Казахстан'}], 
				  formula: 'select',
				  multinumber:1, 
				  needit: false, min:0,multinumber_source_unicname:'none'
				  },
				  
				{
					id:5,
				  unicname:'rooles',
				  indexid:10,
				  usehiddencheckbox:false,
				  ischecked:false,
				  category: 'Разработка программы: услуги агентства', 
				  showwordprefix:'от', 
				  showwordsuffix:'€', 
				  comment:'условия программы', 
				  baseprice: '550', 
				  price: 550, 
				  stocked: true, 
				  name: 'Условия программы',
				  arrOfVlue:'none',
				  formula: 'multi',
				  multinumber:1, 
				  needit: false, min:0,multinumber_source_unicname:'none'
				  },
				  {
					  id:6,
				  unicname:'programmdiv',
				  indexid:11,
				  usehiddencheckbox:false,
				  ischecked:false,
				  category: 'Разработка программы: услуги агентства',
				  showwordprefix:'от', 
				  showwordsuffix:'€',	
				  comment:'концепция со слоганом, название',
				  baseprice: '200', 
				  price: 200, 
				  stocked: true, 
				  name: 'Концепция со слоганом, название',
				  arrOfVlue:'none',
				  formula: 'multi',
				  multinumber:1, 
				  needit: false, min:0,multinumber_source_unicname:'none'
				  },

       {
       	id:7,
           unicname:'presentation',
           indexid:12,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Разработка программы: услуги агентства',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'презентация для дистрибьюторов',
           baseprice: '150',
           price: 150,
           stocked: true,
           name: 'Презентация для дистрибьюторов',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
	   {
           id:8,
           unicname:'agency',
           indexid:13,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Разработка программы: услуги агентства',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'инструкция для дистрибьюторов',
           baseprice: '100',
           price: 100,
           stocked: true,
           name: 'Инструкция для дистрибьюторов',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'none'},
       //ТРЕТИЙ раздел
       {
       	id:9,
           unicname:'funcplat',
           indexid:21,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Платформа для Программы лояльности:',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'website',
           baseprice: '7800',
           price: 7800,
           stocked: false,
           name: 'Платформа для Программы (website)',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {id:10,unicname:'plat',indexid:22,usehiddencheckbox:true,ischecked:false,category: 'Платформа для Программы лояльности:',   showwordprefix:'', showwordsuffix:'', comment:'',baseprice: '0',price: '', stocked: false, name: 'Функционал регистрации участников', arrOfVlue:'none',formula: 'multi',multinumber:1, needit: false, min:0,multinumber_source_unicname:'none'},
       {id:11,unicname:'turn',indexid:23,usehiddencheckbox:true,ischecked:false,category: 'Платформа для Программы лояльности:',  showwordprefix:'', showwordsuffix:'', comment:'', baseprice: '0',price: '', stocked: false, name: 'Функционал загрузки оборотов', arrOfVlue:'none',formula: 'multi',multinumber:1, needit: false, min:0,multinumber_source_unicname:'none'},
       {id:12,unicname:'usernote',indexid:24,usehiddencheckbox:true,ischecked:false,category: 'Платформа для Программы лояльности:',   showwordprefix:'', showwordsuffix:'', comment:'',baseprice: '0',price: '', stocked: false, name: 'Нотификация участников о результатах (e-mail)', arrOfVlue:'none',formula: 'multi',multinumber:1, needit: false, min:0,multinumber_source_unicname:'none'},

//ЧЕТВЕРТЫЙ раздел
       {
       	id:14,
           unicname:'designweb',
           indexid:31,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Дизайн key visual:',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'дизайн для платформы',
           baseprice: '1500',
           price: 1500,
           stocked: true,
           name: 'Дизайн для платформы (website)',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
       	id:15,
           unicname:'designadvert',
           indexid:32,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Дизайн key visual:',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'дизайн рекламного макета Программы',
           baseprice: '150',
           price: 150,
           stocked: true,
           name: 'Дизайн рекламного макета Программы',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
       	id:16,
           unicname:'price_for_banner',
           indexid:33,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Дизайн key visual:',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'дизайн баннеров для дистрибьюторов',
           baseprice: '30',
           price: 30,
           stocked: true,
           name: 'Дизайн баннеров для дистрибьюторов',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:5,
           needit: false, min:0,multinumber_source_unicname:'count_for_banner'
       },
       {
       	id:17,
           unicname:'count_for_banner',
           indexid:34,
           usehiddencheckbox:true,
           ischecked:false,
           category: 'Дизайн key visual:',
           showwordprefix:'',
           showwordsuffix:'',
           comment:'количество баннеров',
           baseprice: '0',
           price: 0,
           stocked: true,
           name: 'Количество баннеров',
           arrOfVlue:5,
           formula: 'inputvalue',
           multinumber:5,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
       	id:18,
           unicname:'gesignmaket',
           indexid:35,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Дизайн key visual:',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'дизайн рекламного макета Программы',
           baseprice: '1500',
           price: 1500,
           stocked: true,
           name: 'Дизайн рекламного макета Программы',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {

			id:19,
           unicname:'designsetificats',
           indexid:36,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Дизайн key visual:',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'дизайн сертификатов победителям',
           baseprice: '200',
           price: 200,
           stocked: true,
           name: 'Дизайн сертификатов победителям (до 3 макетов)',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       //пятый раздел
       {
       	id:20,
           unicname:'usersQuantity',
           indexid:41,
           usehiddencheckbox:true,
           ischecked:false,
           category: 'Призовой фонд',
           showwordprefix:'',
           showwordsuffix:'',
           comment:'укажите количество участников ИЛИ количество победителей',
           baseprice: '0',
           price: 0,
           stocked: true,
           name: 'Количество участников',
           arrOfVlue:1600,
           formula: 'inputvalue',
           multinumber:1600,
           needit: false, min:0,multinumber_source_unicname:'none'
       },

       {
       	id:21,
           unicname:'vinners_quantity',
           indexid:42,
           usehiddencheckbox:true,
           ischecked:false,
           category: 'Призовой фонд',
           showwordprefix:'',
           showwordsuffix:'',
           comment:'укажите количество участников ИЛИ количество победителей',
           baseprice: '0',
           price: 0,
           stocked: true,
           name: 'Количество победителей',
           arrOfVlue:500,
           formula: 'inputvalue',
           multinumber:500,
           needit: false, min:0,multinumber_source_unicname:'none'
       },

       {
       	id:22,
           unicname:'bonus_find',
           indexid:43,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Призовой фонд',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'подбор поощрений призового фонда',
           baseprice: '200',
           price: 200,
           stocked: true,
           name: 'Подбор поощрений призового фонда',
           formula: 'multi',
           arrOfVlue:'none',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
       	id:23,
           unicname:'bonus_create',
           indexid:44,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Призовой фонд',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'закупка/изготовление поощрений',
           baseprice: '19000',
           price: 38,
           stocked: true,
           name: 'Закупка/изготовление поощрений',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:500,
           needit: false, min:0,multinumber_source_unicname:'vinners_quantity'
       },

       {
       	id:24,
           unicname:'brending_goods',
           indexid:45,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Призовой фонд',
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'брендирование поощрений',
           baseprice: '(0.15*цена одного приза) * кол-во победителей || 5.7  * кол-во победителей',
           price: 5.7,
           stocked: true,
           name: 'Брендирование поощрений',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:500,
           needit: false, min:0,multinumber_source_unicname:'vinners_quantity'
       },

       {
       	id:25,
           unicname:'logistic',
           indexid:46,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Призовой фонд',
           showwordprefix:'от',
           showwordsuffix:'€',
           comment:'логистика (хранение, упаковка)',
           baseprice: '2100',
           price: 5,
           stocked: true,
           name: 'Логистика (хранение, упаковка)',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:500,
           needit: false, min:2100,multinumber_source_unicname:'vinners_quantity'
       },

       {
       	id:26,
           unicname:'delivery',
           indexid:47,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Призовой фонд',
           showwordprefix:'от',
           showwordsuffix:'€',
           comment:'доставка',
           baseprice: '600',
           price: 2,
           stocked: true,
           name: 'Доставка',
           arrOfVlue:[{valOf:2,strInfo:'Доставка дистрибьюторам'},{valOf:40,strInfo:'Адресная доставка победителям'}],
           formula: 'select',
           multinumber:500,
           needit: false, min:600,multinumber_source_unicname:'vinners_quantity'
       },

       {
       	id:27,
           unicname:'bonus_for_disr',
           indexid:49,
           usehiddencheckbox:false,
           ischecked:false,
           category: 'Призовой фонд',
           showwordprefix:'от',
           showwordsuffix:'',
           comment:'Рассчет осуществляется на основе количества дистрибъюторов указаного во Вводном разделе',
           baseprice: '600',
           price: 600,
           stocked: true,
           name: 'Поощрения сотрудников дистрибьюторов (супервайзеров)',
           arrOfVlue:'none',
           formula: 'multi',
           multinumber:1,
           needit: false, min:0,multinumber_source_unicname:'distributorQuantiy'}

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
                if(currentRow.unicname == "delivery" && currentRow.unicname == valueandidinobj.id ){
                    items[index].price=valueandidinobj.value;
					//МЕНЯЕМ ЗНАЧЕНИЕ БАЗОВОЙ ЦЕНЫ
				//во всех остальных случаях сохраняем новое значение в multinumber to do - возможно лучше хранить
					// занчения в переменных
				} else if(currentRow.unicname == "period") {
                    alert("valueandidinobj.value="+valueandidinobj.value);
                    //количество контактов = количество участников * количество месяцев проведения акции * 2
                    contactsQuantity = usersQuantity * valueandidinobj.value * 2;
                    alert("contactsQuantity="+contactsQuantity);
                    items[index].multinumber=valueandidinobj.value;
                } else {
                    items[index].multinumber=valueandidinobj.value;
				}
            }
        });
        this.items = items;//ОЧЕНЬ важно обновить хранилище
        this.contactsQuantity = contactsQuantity;
        this.addAndRecountAll();
        },

	//перезапись введенного в input значения
    changeValue:function(valuebyid){
  	//alert("We have id="+valuebyid.id+" and value="+valuebyid.value);
        let items = this.items;


        items.map(function(currentRow,index) {
        	
        	//- изменяем текущее значение инпута в соответствии со значением введенным пользователем
			// ИЛИ !!! изменяем дополнительно значение используемое для рассчета суммы подарка
        	if(currentRow.unicname == valuebyid.id || currentRow.multinumber_source_unicname == valuebyid.id ){
                items[index].multinumber=valuebyid.value;
			}
        });
        this.items = items;
        this.addAndRecountAll();
	},
    //calculate budget
    culculateBudget: function(value){
        let levelQuality = this.qualityLevel;
        if(value<20000){
            alert("Проведение акции с бюджетом менее 30000 не рентабельно.");
            return;
        }else if(value<42000){
            levelQuality = "среднее";
        }else{
            levelQuality = "высокое";
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
                        alert('distr items[index].multinumber='+items[index].multinumber);
                    }
                    simpleSum  += items[index].price*items[index].multinumber;
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
                case "Разработка программы: услуги агентства":
                    billDev += items[index].price*items[index].multinumber;
                    break
                case "Платформа для Программы лояльности:":
                        billPlatform += items[index].price*items[index].multinumber;
                    break
                case "Дизайн key visual:":
                        billDesign += items[index].price*items[index].multinumber;
                    break
                case "Призовой фонд":
                	if(currentRow.unicname=='bonus_create'){
                        var hiddenPay = items[index].multinumber*15 + 3000;
                        billBonus += hiddenPay + items[index].price*items[index].multinumber;
					} else{
                	    if(currentRow.min!=0 && items[index].price*items[index].multinumber<currentRow.min){
                            items[index].price  = currentRow.min;
                            billBonus += currentRow.min;
                        } else {
                            billBonus += items[index].price*items[index].multinumber;
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
    this.billBonus = billBonus;

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
