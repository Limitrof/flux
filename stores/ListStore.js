// ListStore.js
import {EventEmitter} from 'events';
import _ from 'lodash';

let ListStore = _.extend({}, EventEmitter.prototype, {
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
			  	arrOfVlue:[{valOf:1,strInfo:'1-3 месяца'},{valOf:2,strInfo:'4-6 месяцев'},{valOf:5,strInfo:'более 6 месяцев'}],
				formula: 'select',
				multinumber:1, 
				needit: false
				},
		//2
			  {
				  id:2,
				unicname:'disributors_quantity',
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
				formula: 'set_distributor_number',
				multinumber:1, 
				needit: false
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
				  formula: 'set_budget_number',
				  multinumber:50000,
				  needit: false
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
				  formula: 'set_geo',
				  multinumber:1, 
				  needit: false
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
				  name: 'условия программы',
				  arrOfVlue:'none',
				  formula: 'multi',
				  multinumber:1, 
				  needit: false
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
				  name: 'концепция со слоганом, название',
				  arrOfVlue:'none',
				  formula: 'multi',
				  multinumber:1, 
				  needit: false
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
  
  //sum recount
     addSumItem: function(item_id){
		 
		  let items = this.items;
		  let sum = this.sum;
		 
		items.map(function(currentRow,index) {
			if(currentRow.id == item_id){
				if(currentRow.ischecked == false){
					items[index].ischecked=true;
					sum += currentRow.price;
				} else {
					items[index].ischecked=false;
					sum -= currentRow.price;
				}
				
			}
		});
    console.log("sum="+sum);
    this.items = items;
	this.sum = sum;

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
