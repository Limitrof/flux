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
       	id:1,
           unicname:'price_combez',
           indexid:1,
           usehiddencheckbox:false,
           ischecked:false,
           category: "POS-materails",
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'Полукомбинезон мехканика',
           baseprice: 24.55,
           price: 24.55,
           stocked: true,
           name: 'Полукомбинезон мехканика',
           arrOfVlue:[{valOf:200,strInfo:'200 шт.'},{valOf:300,strInfo:'300 шт.'},{valOf:400,strInfo:'400 шт.'}],
           formula: 'select',
           multinumber:200,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
           id:2,
           unicname:'price_autocloak',
           indexid:2,
           usehiddencheckbox:false,
           ischecked:false,
           category: "POS-materails",
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'Накидка на крыло автомобиля',
           baseprice: 16.15,
           price: 16.15,
           stocked: true,
           name: 'Накидка на крыло автомобиля',
           arrOfVlue:[{valOf:200,strInfo:'200 шт.'},{valOf:300,strInfo:'300 шт.'},{valOf:400,strInfo:'400 шт.'}],
           formula: 'select',
           multinumber:200,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
           id:3,
           unicname:'price_gloves',
           indexid:3,
           usehiddencheckbox:false,
           ischecked:false,
           category: "POS-materails",
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'Перчатки для механика',
           baseprice: 2.73,
           price: 2.73,
           stocked: true,
           name: 'Перчатки для механика',
           arrOfVlue:[{valOf:500,strInfo:'500 шт.'},{valOf:1000,strInfo:'1000 шт.'}],
           formula: 'select',
           multinumber:500,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
           id:4,
           unicname:'price_tshirt',
           indexid:4,
           usehiddencheckbox:false,
           ischecked:false,
           category: "POS-materails",
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'Футболка',
           baseprice: 5.94,
           price: 5.94,
           stocked: true,
           name: 'Футболка',
           arrOfVlue:[{valOf:500,strInfo:'500 шт.'},{valOf:1000,strInfo:'1000 шт.'}],
           formula: 'select',
           multinumber:500,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
           id:5,
           unicname:'price_bag',
           indexid:5,
           usehiddencheckbox:false,
           ischecked:false,
           category: "POS-materails",
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'Полиэтиленовый пакет-майка 40х24 см',
           baseprice: 0.03228,
           price: 0.03228,
           stocked: true,
           name: 'Полиэтиленовый пакет-майка 40х24 см',
           arrOfVlue:[{valOf:25000,strInfo:'25000 шт.'},{valOf:30000,strInfo:'30000 шт.'}],
           formula: 'select',
           multinumber:25000,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
           id:6,
           unicname:'price_bannerlu',
           indexid:6,
           usehiddencheckbox:false,
           ischecked:false,
           category: "POS-materails",
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'Баннер с люверсами, 1х1,5 м',
           baseprice: 6.25,
           price: 6.25,
           stocked: true,
           name: 'Баннер с люверсами, 1х1,5 м',
           arrOfVlue:[{valOf:200,strInfo:'200 шт.'},{valOf:300,strInfo:'300 шт.'}],
           formula: 'select',
           multinumber:200,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
           id:7,
           unicname:'price_poster',
           indexid:7,
           usehiddencheckbox:false,
           ischecked:false,
           category: "POS-materails",
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'Плакат А2 полноцветный',
           baseprice: 0.756,
           price: 0.756,
           stocked: true,
           name: 'Плакат А2 полноцветный',
           arrOfVlue:[{valOf:500,strInfo:'500 шт.'},{valOf:1000,strInfo:'1000 шт.'}],
           formula: 'select',
           multinumber:500,
           needit: false, min:0,multinumber_source_unicname:'none'
       },
       {
           id:8,
           unicname:'price_catalog',
           indexid:8,
           usehiddencheckbox:false,
           ischecked:false,
           category: "POS-materails",
           showwordprefix:'',
           showwordsuffix:'€',
           comment:'Каталог , формат А4',
           baseprice: 3.5,
           price: 3.5,
           stocked: true,
           name: 'Каталог , формат А4',
           arrOfVlue:[{valOf:500,strInfo:'500 шт.'},{valOf:1000,strInfo:'1000 шт.'}],
           formula: 'select',
           multinumber:500,
           needit: false, min:0,multinumber_source_unicname:'none'
       },  
	   {id:10,unicname:'plat',indexid:22,usehiddencheckbox:true,ischecked:false,category: 'Хранение и доставка дистрибьюторам',   showwordprefix:'Цена по запросу', showwordsuffix:'', comment:'',baseprice: 0,price: '', stocked: false, name: 'Хранение и доставка дистрибьюторам', arrOfVlue:'none',formula: 'multi',multinumber:1, additionaltitle:'',needit: false, min:0,multinumber_source_unicname:'none'},
        


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
                case "POS-materails":
                    if(currentRow.unicname=='price_for_banner'){
                        billDesign =  billDesign + items[index].price*items[index].multinumber + 30;

                    }else{

                        billDesign += parseInt(items[index].price*items[index].multinumber);
                    }
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
