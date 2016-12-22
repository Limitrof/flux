// AppRoot.jsx
import React from 'react';
import ListStore from '../stores/ListStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

// Sub components
import NewItemForm from './NewItemForm';

//ВЫВЕСТИ КАК ОТДЕЛЬНЫЙ КОМПОНЕНТ
class SomeSum extends React.Component{
	
	
	  render() {
		  //to do - сюда таскать значение из резалт-таблицы
		   if(this.props.priceinrow){ 
			/*  alert(this.props.priceinrow); */
				return <div className="price_sell">{this.props.priceinrow}</div>;
		   }
		   return <span></span>;
	  }
}
//ВЫВЕСТИ КАК ОТДЕЛЬНЫЙ КОМПОНЕНТ
class ProductSelect extends React.Component {


    constructor(props, context) {
        super(props, context)
        this.state = {
			/* 	value: 1 */
        }
    }


    render() {
        var arrOfOptions = [];
        var setChecked = false;
        this.props.category.map(function (currOption, index) {
        	if(currOption.valOf=='checked'){
        		setChecked=currOption.strInfo;
        	} else {
                if(currOption.valOf == setChecked){
                    arrOfOptions.push(<option key={index} value={currOption.valOf} selected="selected">{currOption.strInfo}</option>);
                } else {
                    arrOfOptions.push(<option key={index} value={currOption.valOf}>{currOption.strInfo}</option>);
                }
			}


        });
        return <div><select onChange={this.props.onChange} value={this.state.value} data-id={this.props.unic}>{arrOfOptions}</select></div>;
        //return <div><select onChange={this.props.onClick} value={this.state.value}>{arrOfOptions}</select></div>;

    }
}

// Method to retrieve state from Stores
let getListState = () => {
  return {
    items: ListStore.getItems()
  };
}
//////////////////////
// определение статуса зависимых блоков
let getBonusCreateStatus = () => {
	return {
        bonusCreateStatus: ListStore.inStore_getBonusCreateStatus()
	}
}
//////////////////////////////////////
// блок данных вводимых пользователем
let getDistributorQuantiy = () => {
	return {
        distributorQuantiy: ListStore.inStore_getDistributorQuantiy()
	}
}


//////////////////////
// блок выходного чека
//Разработка программы
let getBillDev = () => {
    return {
        billDev: ListStore.inStore_getBillDev()
    }
}
//Платформа для Программы лояльности
let getBillPlatform= () => {
    return {
        billPlatform:ListStore.inStore_getBillPlatform()
    }
}

//Дизайн key visual
let getBillDesign= () => {
    return {
        billDesign:ListStore.inStore_getBillDesign()
    }
}

//Призовой фонд
let getBillBonus = () => {
    return {
        billBonus:ListStore.inStore_getBillBonus()
    }
}

//Охват (количество участников)
let getUsersQuantity= () => {
    return {
        usersQuantity:ListStore.inStore_getUsersQuantity()
    }
}

//Качество контакта
let getQualityLevel= () => {
    return {
        qualityLevel:ListStore.inStore_getQualityLevel()
    }
}

//Среднее количество контактов за Программу
let getContactsQuantity= () => {
    return {
        contactsQuantity:ListStore.inStore_getContactsQuantity()
    }
}


let getAllSum = () => {
	return {
        allAmount:ListStore.getSum()
	}
}
// блок выходного чека
//////////////////////







class AppRoot extends React.Component {
  
  // Method to setState based upon Store changes
  _onChange() {
    this.setState(getListState());
//usercanchange
      this.setState(getDistributorQuantiy());
//usercantchange
    this.setState(getBillDev());
    this.setState(getBillPlatform());
    this.setState(getBillDesign());
    this.setState(getBillBonus());
    this.setState(getUsersQuantity());
    this.setState(getQualityLevel());
    this.setState(getContactsQuantity());

    this.setState(getAllSum());
    this.setState(getBonusCreateStatus())
  }

  constructor() {
    super();
    this.state = getListState();
//Доступ к чекинту подразделов "Призового фонда"
      this.state.bonusCreateStatus = getBonusCreateStatus();

//Данные о количестве дистрибьюторов
      this.state.distributorQuantiy = getDistributorQuantiy();




//Разработка программы
      this.state.billDev = getBillDev();

//Платформа для Программы лояльности
      this.state.billPlatform = getBillPlatform();

//Дизайн key visual
      this.state.billDesign = getBillDesign();

//Призовой фонд
      this.state.billBonus = getBillBonus();

//Охват (количество участников)
      this.state.usersQuantity = getUsersQuantity();

//Качество контакта
	  this.state.qualityLevel = getQualityLevel();

//Среднее количество контактов за Программу
      this.state.contactsQuantity = getContactsQuantity();


//Итого:
    this.state.allAmount = getAllSum();
	//this.handleClickCheckbox = this.handleClickCheckbox.bind(this) ;



  }

  // Add change listeners to stores
  componentDidMount() {
    ListStore.addChangeListener(this._onChange.bind(this));
  }

  // Remove change listeners from stores
  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange.bind(this));
  }

  setDistributorQuantiy(e){
	  alert("about");
  }

    changeValueBySelect(e){
        let id = e.target.dataset.id;
        let value = e.target.value;
        AppDispatcher.dispatch({
            action: 'change-value-by-id-select',
            valuebyidinselect: {
                id: id,
                value: value
            }
        });
	}
  changeValueInState(e){
  	//важно изменить через диспетчер в стейт придет само!
      let id = e.target.dataset.id;
		let value = e.target.value;
      AppDispatcher.dispatch({
          action: 'change-value-by-id',
          valuebyid: {
			  id: id,
			  value: value
		  }
      });
  }

    setBudget(e){
        let valuebudget = e.target.value;
        AppDispatcher.dispatch({
            action: 'set-budget',
            valuebudget: valuebudget
        });
	}

    cleanCategory(e){
        //addSumItem
        let category = e.target.dataset.id;
        AppDispatcher.dispatch({
            action: 'clean-category',
            category: category
        });
    }

  addToSum(e){
	 //addSumItem
	  let id = e.target.dataset.id;
    
    AppDispatcher.dispatch({
      action: 'add-sum-item',
      id: id
    });
  }
  
  removeItem(e){

    let id = e.target.dataset.id;
    
    AppDispatcher.dispatch({
      action: 'remove-item',
      id: id
    });
  }

  render(){

    let _this = this;
    let classNameShow = '';
	let lastCategory = '';
    let items = ListStore.getItems();
    //ОПРЕДЕЛЯЕМ нужен ли самостоятельный рассчет
	  var currentLocation = this.props.path.indexOf("self");

	  let checkedBonus = ListStore.inStore_getBonusCreateStatus();

      //Разработка программы
      let billDev = ListStore.inStore_getBillDev();

//Платформа для Программы лояльности
      let billPlatform = ListStore.inStore_getBillPlatform();

//Дизайн key visual
      let billDesign = ListStore.inStore_getBillDesign();

//Призовой фонд
      let billBonus = ListStore.inStore_getBillBonus();

    //let currentSum = ListStore.getSum();

	//alert('currentSum='+currentSum);
      //this.state.allAmount = ListStore.getSum();
      var arrSize = items.length;//ПОЛУЧАЕМ последнее занчение для вывода последнего блока ИТОГО (раздела "Призовой
	  // фонд")

	let itemHtml = items.map(( listItem,index ) => {


        if(listItem.ischecked){
            classNameShow = "showItForPrint";
        } else if(listItem.usehiddencheckbox && listItem.category != "Платформа для Программы лояльности:"){
            classNameShow = "showItForPrint";
        } else {
            classNameShow = "hideItForPrint";
        }
		//UNIC FORMULA
        var buttonListElements = [];
        var blockTitle = [];
        var blockItogo = [];
				 var usersControlFormula = [];
				if (listItem.formula == 'inputvalue') {
                    //кнопка рассчета для бюджета
                    if(listItem.unicname == 'budget' && currentLocation != -1){

                        usersControlFormula.push(<div className={classNameShow}><input className="width70" type="text"
															 onChange={_this.changeValueInState}
															 data-id={ listItem.unicname }
															 value={listItem.multinumber} />
							<button className="mleft100" onClick={_this.setBudget} value={listItem.multinumber}>Рассчитать</button></div>);


                   /* } else if(listItem.unicname == 'distributorQuantiy'){
                    	//кол-во дистрибьюторов с плюс-минусом

                        usersControlFormula.push(
                        	<div>
							<div className="input-group width120">
          <span className="input-group-btn">
              <button type="button" onClick={_this.changeValueInState} className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]"
					  data-id={ listItem.unicname }
					  value={parseInt(listItem.multinumber)-1}>
                  <span className="glyphicon glyphicon-minus"></span>
              </button>
          </span>
								<input type="text" name="quant[1]" className="form-control input-number" min="1" max="10" onChange={_this.changeValueInState}
									   data-id={ listItem.unicname }
									   value={listItem.multinumber}/>
          <span className="input-group-btn">
              <button type="button" onClick={_this.changeValueInState} className="btn btn-default btn-number" data-type="plus" data-field="quant[1]"
					  data-id={ listItem.unicname }
					  value={parseInt(listItem.multinumber)+1}>
                  <span className="glyphicon glyphicon-plus"></span>
              </button>
          </span>
							</div>
							</div>

						);*/

                       /* usersControlFormula.push(<div><input className="width70" type="text"
															 onChange={_this.changeValueInState}
															 data-id={ listItem.unicname }
															 value={listItem.multinumber}/></div>);*/
					} else {
                    //для всех остальных input(ов)
                        usersControlFormula.push(<div className={classNameShow}><input className="width70" type="text"
															 onChange={_this.changeValueInState}
															 data-id={ listItem.unicname }
															 value={listItem.multinumber}/></div>);
                    }
				} else if(listItem.formula=='select') {
					//для всех selectov
                        usersControlFormula.push(<ProductSelect onChange={_this.changeValueBySelect} category={listItem.arrOfVlue} unic={listItem.unicname} />);
                }
else {usersControlFormula.push(<div></div>);}
//else {usersControlFormula.push(<div>zzzzzzzzzz</div>);}

				/* else if  (listItem.unicname=='budget') {
					usersControlFormula.push(<div><input className="width70" type="text"  onChange={this.setBudgetInStateOnly}  value={listItem.multinumber}/><button  className="mleft100"  onClick={this.setBudget} value={listItem.multinumber}>Рассчитать</button></div>);
				} else if (listItem.unicname=='count_for_banner') {
					usersControlFormula.push(<div><input className="width20" type="text"  onChange={this.setBannerQuantiy}  value={listItem.multinumber}/></div>);				
				} else if (listItem.unicname=='users_quantity') {
					usersControlFormula.push(<div><input className="width70" type="text"  onChange={this.setUserQuantiy}  value={listItem.multinumber}/></div>);				
				} else if (listItem.unicname=='vinners_quantity') {
					//usersControlFormula.push(<div><input className="width70 noforc" readonly onChange={this.setVinnerQuantiy.bind(this,index)}  value={this.state.resultPrices[index].multinumber}/></div>);
					usersControlFormula.push(<div><input className="width70 noforc"  onChange={this.setVinnerQuantiy}  value={listItem.multinumber}/></div>);
				} else if (listItem.unicname=='delivery') {
					usersControlFormula.push(<listItemSelect onClick={this.changeDeliveryPriceMulti} category={listItem.arrOfVlue} key={listItem.indexid} />);
				} else if (listItem.arrOfVlue=='none') {
					usersControlFormula.push(<div></div>);//for comment and so on
				} else {		
					usersControlFormula.push(<listItemSelect onClick={this.changeItemPriceMulti} category={listItem.arrOfVlue} key={listItem.indexid} />);
				}  */
        //USE OR NOT checkbox
        var useOrNotCheckbox = [];
        if (listItem.usehiddencheckbox) {
            useOrNotCheckbox.push(<input className='checkboxforprice hiddencheckbox' type='checkbox' id={listItem.unicname}   value={listItem.price} checked/>);
        } else {
            //useOrNotCheckbox.push(<input className='checkboxforprice' onChange={this.handleClickCheckbox.bind(null, listItem.price,index)} type='checkbox' id={listItem.unicname}  value={listItem.price} checked={this.ischecked} />);
			//дополнительная проверка для организации\блокирования доступа к некоторым подразделам блока "Призовой фонд"
			if (listItem.unicname != 'bonus_create' && listItem.multinumber_source_unicname == 'vinners_quantity'){
                useOrNotCheckbox.push(<input className='checkboxforprice'  onClick={ _this.addToSum } data-id={ listItem.id } type='checkbox' id={listItem.unicname}  value={listItem.price} checked={listItem.ischecked} disabled={checkedBonus} />);
			} else {
                useOrNotCheckbox.push(<input className='checkboxforprice'  onClick={ _this.addToSum } data-id={ listItem.id } type='checkbox' id={listItem.unicname}  value={listItem.price} checked={listItem.ischecked} />);
			}

        }

		
		
		//учитываем минимальное значение
				var sumWithMinValue = 0;
        if (listItem.unicname=='price_for_banner'){
            sumWithMinValue = parseInt(listItem.baseprice*listItem.multinumber) + 30;
        }else if(listItem.min!=0 && (listItem.baseprice*listItem.multinumber)<listItem.min){
            sumWithMinValue = listItem.min;
        } else if (listItem.baseprice!=0 ){
			 sumWithMinValue = parseInt(listItem.baseprice*listItem.multinumber);
		}  else{
            sumWithMinValue = parseInt(listItem.price*listItem.multinumber);
        }
		
		
		
		
				//check prefix and set if exist
				//Блок подсчета суммы за текущую категорию
				if (listItem.showwordprefix != '') {	
					var pricewithprefix = listItem.showwordprefix + ' ' + sumWithMinValue;
				} else {
					pricewithprefix = sumWithMinValue;
				}				
				//check suffix and set if exist
				if (listItem.showwordsuffix != '') {	
					var pricewithprefixandsuffix = pricewithprefix + ' ' + listItem.showwordsuffix ;
				} else {
					pricewithprefixandsuffix = pricewithprefix;
				}
		
				//show or hide select or input
				var hideinputonphone = "col-md-4 bcgray";
				if (listItem.formula == 'none') {
					hideinputonphone = "col-md-4 bcgray hidden-sm hidden-xs";
				}		
				//show or hide price
				var hidepriceonphone = "col-md-3 bcgray";
				if (listItem.price == '') {
					hidepriceonphone = "col-md-3 bcgray hidden-sm hidden-xs";
				}
				
				 if (listItem.category !== lastCategory) {
//ОТРИСОВЫВАЕМ БЛОКИ ИТОГО (кроме последнего)
					switch (lastCategory) {
								case "Разработка программы":

                                    blockTitle.push(<div className="row hideItForPrint"><div className="col-md-9 itogo">ИТОГО: </div><div className="col-md-3 itogo_sell">{billDev} €</div></div>);
								  break;	   
							  case "Платформа для Программы лояльности:":
                                  blockTitle.push(<div className="row hideItForPrint"><div className="col-md-9 itogo">ИТОГО: </div><div className="col-md-3 itogo_sell">{billPlatform} €</div></div>);
								  break;
							  case "Дизайн key visual:":
                                  blockTitle.push(<div className="row hideItForPrint"><div className="col-md-9 itogo">ИТОГО: </div><div className="col-md-3 itogo_sell">{billDesign} €</div></div>);
								  break;

							}
//ВЫВОДИМ ТАЙТЛ для условия вышерасположенного if(a)   if (listItem.category !== lastCategory) {...
					 blockTitle.push(<div className="hideItForPrint"><div className="row bcwhite margintop10"><div className="col-md-12 blueColor_h80_pt5"><h3 id>{listItem.category}</h3><p>{listItem.additionaltitle}</p></div></div></div>);
					
				 } else if( (arrSize-1) == index){

                     blockItogo.push(<div className="row hideItForPrint">
				<div className="col-md-12 grayColor">*Призовой фонд
					(включая налоги (для РФ при условии, что фактическая стоимость поощрения не превышает 3500 руб.), комиссию агентства, юридическое и бухгалтерское сопровождение)</div><div className="row hideItForPrint"><div className="col-md-9 itogo">ИТОГО:</div><div className="col-md-3 itogo_sell" id="bottomitogo">{billBonus} €</div></div>
			</div>);
        } //СРАЗУ ПОСЛЕ ПРОВЕРКИ МЕНЯЕМ ЗНАЧЕНИЕ ТЕКУЩЕЙ КАТЕГОРИИ
        lastCategory = listItem.category;


        /*if(listItem.ischecked){
            classNameShow = "showItForPrint";
        } else {
            classNameShow = "hideItForPrint";
		}*/

//особый рендер для автоматического рассчета бюджета
        if(listItem.unicname == 'budget') {
            if(currentLocation != -1){
                return <div className={classNameShow}>{blockTitle}
					<div className="row" key={ listItem.id } title={listItem.comment}>
						<div className="col-md-5 bcgray">
                            {useOrNotCheckbox}
							<label className="main-label-text" htmlFor={listItem.unicname}>{listItem.name}</label>
						</div>

						<div className={hideinputonphone}>{usersControlFormula}</div>

						<div className={hidepriceonphone}><SomeSum priceinrow={pricewithprefixandsuffix} key={listItem.id}/>
						</div>
					</div>
                    {blockItogo}</div>;
			} else {
            	return <div></div>;
			}
            //		<div className={hideinputonphone}>{usersControlFormula}</div>

        }else {
            return <div className={classNameShow}>{blockTitle}
				<div className="row" key={ listItem.id } title={listItem.comment}>
					<div className="col-md-5 bcgray">
						<div className="row mtopmin17">
							<div className="col-md-3">{useOrNotCheckbox}</div>
							<div className="col-md-9 topm10">
								<label className={(listItem.name.indexOf('\n')>0?'display-linebreak':'')} htmlFor={listItem.unicname}>{listItem.name}</label>
							</div>
						</div>
					</div>

					<div className={hideinputonphone}>{usersControlFormula}</div>

					<div className={hidepriceonphone}><SomeSum priceinrow={pricewithprefixandsuffix} key={listItem.id}/>
					</div>
				</div>
                {blockItogo}</div>;
		}

    });
		 // <button onClick={ _this.removeItem } data-id={ listItem.id }>×</button>

   /* return (
      <div>
        <div className="allControls">
          { itemHtml }
        </div>
        <NewItemForm />
      </div>
    );*/


      return (
<div>
	  <div className="row" key="mainform" id="reactroot">
		  <div className="col-md-8" id="onebyone">{itemHtml}</div>
		  <div className="col-md-4">
			  <div id="staticPrice">

				  <div className="row">
					  <div className="col-md-9 colorblue">Результаты</div>

				  </div>


				  <div className="row">
					  <div className="col-md-8">Разработка программы</div>
					  <div className="col-md-3">{this.state.billDev} € </div>
					  <div className="col-md-1">
						  <img onClick={_this.cleanCategory} data-id="Разработка программы" src="/img/clear.png" />
					  </div>
				  </div>

				  <div className="row">
					  <div className="col-md-8">Платформа для Программы лояльности</div>
					  <div className="col-md-3">{this.state.billPlatform} € </div>
					  <div className="col-md-1">
						  <img onClick={_this.cleanCategory} data-id="Платформа для Программы лояльности:" src="/img/clear.png" />
					  </div>
				  </div>

				  <div className="row">
					  <div className="col-md-8">Дизайн key visual</div>
					  <div className="col-md-3">{this.state.billDesign} € </div>
					  <div className="col-md-1">
						  <img onClick={_this.cleanCategory} data-id="Дизайн key visual:" src="/img/clear.png" />
					  </div>
				  </div>

				  <div className="row">
					  <div className="col-md-8">Призовой фонд*</div>
					  <div className="col-md-3">{this.state.billBonus} € </div>
					  <div className="col-md-1">
						  <img onClick={_this.cleanCategory} data-id="Призовой фонд" src="/img/clear.png" />
					  </div>
				  </div>

				  <hr/>
				  <div className="row colorblue">
					  <div className="col-md-9">Охват (количество участников)</div>
					  <div className="col-md-3">{this.state.usersQuantity}</div>
				  </div>
				  <div className="row colorblue">
					  <div className="col-md-9">Качество контакта</div>
					  <div className="col-md-3">{this.state.qualityLevel}</div>
				  </div>
				  <div className="row colorblue">
					  <div className="col-md-9">Среднее количество контактов за Программу</div>
					  <div className="col-md-3">~ {this.state.contactsQuantity}</div>
				  </div>


				  <hr/>
				  <div className="row colorblue">
					  <div className="col-md-9"><span className="textalignright">Итого:</span></div>
					  <div className="col-md-3">{this.state.allAmount} €</div>
				  </div>

			  </div>

		  </div>
	  </div>
	  </div>);
  }
 //////////////////////////////
 // block of my functions
 
 handleClickCheckbox(someval,indexinarray) {
		//alert(this.state.resultPrices[indexinarray].needit == false);
		/* if(this.state.resultPrices[indexinarray].needit == false && this.state.resultPrices[indexinarray].ischecked == false) {
			var newArr = this.state.resultPrices;
	
			newArr[indexinarray].price = someval;
			newArr[indexinarray].needit = true;
			newArr[indexinarray].ischecked = true;
			this.setState({ resultPrices: newArr });

		} else {
			var newArr = this.state.resultPrices;
			newArr[indexinarray].needit = false;
			newArr[indexinarray].ischecked = false;
				
			this.setState({ resultPrices: newArr });

		}
			this.recountIt();*/
	}  
	
	setDistributorQuantiy(indexinarray,event){
		//alert('dis');
		/*   var valueForDistributorPrice = event.target.value;

		  var newArrForFormula = this.state.resultPrices;
		   newArrForFormula[indexinarray].multinumber = valueForDistributorPrice;
		   //alert(newArrForFormula[indexinarray].multinumber);//количество дистрибъюторов
		   
	   newArrForFormula.map(function(currentRow,index) {
			   if (currentRow.unicname == 'bonus_for_disr') {
                   console.log("valueForDistributorPrice="+valueForDistributorPrice);
				   //alert('about change');
				   newArrForFormula[index].multinumber = valueForDistributorPrice;
			   }
		   });
		  this.setState({ resultPrices: newArrForFormula });
		  
		  this.recountIt(); */
	}
	
		setBudgetInStateOnly(indexinarray,event){
			alert("budget");
		/*		  var valueForBudget = event.target.value;
		   	this.setState({ budget: valueForBudget });
		   	this.setState({ allAmount: 0 });
		   	this.setState({ billDev: 0 });
		   	this.setState({ billPlatform: 0 });
		   	this.setState({ billDesign: 0 });
		   	this.setState({ billBonus: 0 });

	 	participant:1600,
		coverage:"высокое",
		quanticont:1000,
		vinnerquantity:500, */
			
	}	
	
	setBannerQuantiy(indexinarray,event){
		alert("Banner");
/* 		 var valueForBannerQuantity = event.target.value;
		 var newArrForFormula = this.state.resultPrices;
		 newArrForFormula[indexinarray].multinumber = valueForBannerQuantity;
	 
		 newArrForFormula.map(function(currentRow,index) {
			   if (currentRow.unicname == 'price_for_banner') {
				   newArrForFormula[index].multinumber = valueForBannerQuantity;
			   }
		   });   
		  this.setState({ resultPrices: newArrForFormula });

		  this.recountIt(); */
	}
	
		setVinnerQuantiy(indexinarray,event){
					alert("Vinner");
		/* var valueForVinnerQuantity = event.target.value;
		var participantQuantity = valueForVinnerQuantity*3;
		this.setState({participant : participantQuantity});
		var newArrForFormula = this.state.resultPrices;
		newArrForFormula[indexinarray].multinumber = valueForVinnerQuantity;
		this.state.vinnerquantity = newArrForFormula[indexinarray].multinumber;
		  newArrForFormula.map(function(currentRow,index) {
			   if (currentRow.unicname == 'users_quantity') {
				   newArrForFormula[index].multinumber = participantQuantity;

			   }
		   }); 
		   
		   
		  this.setState({ resultPrices: newArrForFormula });

		  this.recountIt(); */
	}	
	
	 changeItemPriceMulti(indexinarray,event){
		 alert('Just multi');
		  /* var valueForMulti = event.target.value;
		  var newArrForFormula = this.state.resultPrices;
		  var basePrice = newArrForFormula[indexinarray].baseprice;
		  newArrForFormula[indexinarray].multinumber = valueForMulti;
		  newArrForFormula[indexinarray].price = parseInt(valueForMulti*basePrice);
		  this.setState({ resultPrices: newArrForFormula });
		  
		  this.recountIt(); */
	  }
		
  
}

export default AppRoot;
