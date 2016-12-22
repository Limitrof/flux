// AppRoot.jsx
import React from 'react';
import ListStore from '../stores/ListStoreBrandPromo';
import AppDispatcher from '../dispatcher/AppDispatcherBrandPromo';

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







class AppBrandPromo extends React.Component {
  
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
  }

  constructor() {
    super();
    this.state = getListState();

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

//Разработка программы
      let billDev = ListStore.inStore_getBillDev();

//Платформа для Программы лояльности
      let billPlatform = ListStore.inStore_getBillPlatform();

//Дизайн key visual
      let billDesign = ListStore.inStore_getBillDesign();

//Призовой фонд
      let billBonus = ListStore.inStore_getBillBonus();


      var arrSize = items.length;//ПОЛУЧАЕМ последнее занчение для вывода последнего блока ИТОГО (раздела "Призовой
	  // фонд")
	let itemHtml = items.map(( listItem,index ) => {

        var promopart = [];
        switch (listItem.category) {
            case "Пакет “А” Optimal online (B2B), 3 месяца":
                promopart.push(
				<div className="row grayinrow border-bottom  ">
					<div className="col-md-9 grayinrow" >
						<div className="row height40 text-center hidden-print" >
							<div className="col-md-4 bggraycol border-right width120">Ресурс</div>
							<div className="col-md-6 bggraycol border-right">Формат</div>
						   <div className="col-md-2 bggraycol  border-left">Кол-во</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth">
								<img className="inheritcenterimg" src="img/infoparts.png"/>
								<a href="http://www.info-parts.ru">www.info-parts.ru</a><p><span className="greencol">online</span></p>
							</div>
							<div className="col-md-6 bggraycol border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>баннер* 785х120 рх в ротации 1/3</li>
									<li>написание и размещение статей**</li>
									<li>e-mail digest</li>
									<li>репост статей в соц. сетях</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>6</li>
									<li>3</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth">
								<img className="inheritcenterimg" src="img/kuzov.png"/>	<a href="http://www.kuzov-media.ru">www.kuzov-media.ru</a><p><span className="greencol">online</span></p></div>
							<div className="col-md-6 bggraycol border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>баннер 217 х 358 рх на главной</li>
									<li>размещение статьи</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/autokomp.png"/><a href="http://www.a-kt.ru">www.a-kt.ru</a><p><span className="greencol">online</span></p></div>
							<div className="col-md-6 bggraycol border-right mediawidth">
							<ul className="ulnotbulleted">
								<li>баннер 1052 х 90 рх на главной</li>
								<li>размещение статьи</li>
							</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol-nobottom border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/abs.png"/><a href="http://www.abs-magazine.ru">www.abs-magazine.ru</a><p><span className="greencol">online</span></p></div>
							<div className="col-md-6 bggraycol-nobottom border-right mediawidth">
								<ul className="ulnotbulleted widthprint">
									<li>баннер сквозной 280х190 рх</li>
									<li>статья в топ-ротации <p>с баннером на главной</p></li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol-nobottom border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>3</li>
								</ul>
							</div>
						</div>
					</div>
				<div className="col-md-3 text-center bggraycolinher">
					<div className="fontblue">
						Охват ЦА <br/><span className="size24">{listItem.name}</span>
					</div>
					<br/>
					<div className="fontgreen">
						Стоимость контакта<br/><span className="size24">{listItem.comment} евро</span>
					</div>
				</div>
			</div>);
                break
            case "Пакет “B” Online + Offline (B2B), 3 месяца":
                promopart.push(<div className="row grayinrow border-bottom">
					<div className="col-md-9 grayinrow" >
						<div className="row height40 text-center hidden-print">
							<div className="col-md-4 bggraycol border-right width120">Ресурс</div>
							<div className="col-md-6 bggraycol border-right">Формат</div>
						   <div className="col-md-2 bggraycol  border-left">Кол-во</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 text bggraycol border-right imgpadding text-center width120 mediawidth">
								<img className="inheritcenterimg" src="img/infoparts.png"/>
								<a href="http://www.info-parts.ru">www.info-parts.ru</a><p><span className="greencol">online</span></p>
							</div>
							<div className="col-md-6 bggraycol border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>баннер* 785х120 рх в ротации 1/3</li>
									<li>написание и размещение статей**</li>
									<li>e-mail digest</li>
									<li>репост статей в соц. сетях</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>6</li>
									<li>3</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100">
							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/autobusiness.png"/><p className="bluecol"><span>offline</span></p></div>
							<div className="col-md-6 bggraycol border-right mediawidth">
							<ul className="ulnotbulleted">
								<li>макет А4, 2-я обложка</li>
								<li>статья 1/1 полосы</li>
							</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>1</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >

							<div className="col-md-4 bggraycol-nobottom border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/kuzov.png"/><p className="bluecol"><span>offline</span></p></div>
							<div className="col-md-6 bggraycol-nobottom border-right mediawidth">

								<ul className="ulnotbulleted">
									<li>статья 1/2 полосы</li>
									<li>макет, 3-я обложка</li>
								</ul>
							</div>

							<div className="col-md-2 bggraycol-nobottom border-left mediawidth">

								<ul className="ulnotbulleted">
									<li>2</li>
									<li>1</li>
								</ul>
							</div>
						</div>
					</div>
				<div className="col-md-3 text-center grbgaycolinher">
					<div className="fontblue">
						Охват ЦА <br/><span className="size24">{listItem.name}</span>
					</div>
					<br/>
					<div className="fontgreen">
						Стоимость контакта<br/><span className="size24">{listItem.comment} евро</span>
					</div>
				</div>
			</div>);
                break
            case "Пакет “С” Online + Offline VIP (B2B), 3 месяца":
                promopart.push(<div className="row grayinrow border-bottom">
					<div className="col-md-9 grayinrow " >
						<div className="row height40 text-center hidden-print">
							<div className="col-md-4 bggraycol border-right width120">Ресурс</div>
							<div className="col-md-6 bggraycol border-right">Формат</div>
						   <div className="col-md-2 bggraycol border-left">Кол-во</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 text bggraycol border-right imgpadding text-center width120 mediawidth">
								<img className="inheritcenterimg" src="img/infoparts.png"/>
								<a href="http://www.info-parts.ru">www.info-parts.ru</a><p><span className="greencol">online</span></p>
							</div>
							<div className="col-md-6 bggraycol border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>баннер* 785х120 рх в ротации 1/3</li>
									<li>написание и размещение статей**</li>
									<li>e-mail digest</li>
									<li>репост статей в соц. сетях</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>6</li>
									<li>3</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/autokomp.png"/><p className="bluecol"><span>offline</span></p></div>
							<div className="col-md-6 bggraycol border-right mediawidth">
							<ul className="ulnotbulleted">
								<li>макет, 2-я обложка 215х275 мм <span className="colorblue">+бонус (статья/макет)</span></li>
								<li>статья 1/2 полосы</li>
							</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/kuzov.png"/><span className="bluecol">offline</span></div>
							<div className="col-md-6 bggraycol border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>статья 1/2 полосы</li>
									<li>макет, 3-я обложка</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>2</li>
									<li>1</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol-nobottom border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/autonews.png"/><p className="bluecol"><span>offline</span></p></div>
							<div className="col-md-6 bggraycol-nobottom border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>статья 1/1 полосы</li>
									<li>макет, 3-я обложка</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol-nobottom border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>2</li>
									<li>1</li>
								</ul>
							</div>
						</div>
					</div>
				<div className="col-md-3 text-center bggraycolinher">
					<div className="fontblue">
						Охват ЦА <br/><span className="size24">{listItem.name}</span>
					</div>
					<br/>
					<div className="fontgreen">
						Стоимость контакта<br/><span className="size24">{listItem.comment} евро</span>
					</div>
				</div>
			</div>);
                break
            case "Пакет ”С+” Online (B2B) MAX EFFECT (B2B+B2C), 3 месяца":
                promopart.push(<div className="row grayinrow border-bottom">
					<div className="col-md-9 grayinrow " >
						<div className="row height40 text-center hidden-print">
							<div className="col-md-4 bggraycol border-right width120">Ресурс</div>
							<div className="col-md-6 bggraycol border-right">Формат</div>
						   <div className="col-md-2 bggraycol  border-left">Кол-во</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 text bggraycol border-right imgpadding text-center width120 mediawidth">
								<img className="inheritcenterimg" src="img/infoparts.png"/>
							<a href="http://www.info-parts.ru">www.info-parts.ru</a><p><span className="greencol">online</span></p>
							</div>
							<div className="col-md-6 bggraycol border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>баннер* 785х120 рх в ротации 1/3</li>
									<li>написание и размещение статей**</li>
									<li>e-mail digest</li>
									<li>репост статей в соц. сетях</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>6</li>
									<li>3</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/kuzov.png"/><a href="http://www.kuzov-media.ru">www.kuzov-media.ru</a><p><span className="greencol">online</span></p></div>
							<div className="col-md-6 bggraycol border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>баннер 217 х 358 рх на главной</li>
									<li>размещение статьи</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/autokomp.png"/><a href="http://www.a-kt.ru">www.a-kt.ru</a><p><span className="greencol">online</span></p></div>
							<div className="col-md-6 bggraycol border-right mediawidth">
							<ul className="ulnotbulleted">
								<li>баннер 1052 х 90 рх на главной</li>
								<li>размещение статьи</li>
							</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >

							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/abs.png"/><a href="http://www.abs-magazine.ru">www.abs-magazine.ru</a><p><span className="greencol">online</span></p></div>
							<div className="col-md-6 bggraycol border-right mediawidth">

								<ul className="ulnotbulleted">
									<li>баннер сквозной 280х190 рх</li>
									<li>статья в топ-ротации <p>с баннером на главной</p></li>
								</ul>
							</div>

							<div className="col-md-2 bggraycol border-left mediawidth">

								<ul className="ulnotbulleted">
									<li>1</li>
									<li>3</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >

							<div className="col-md-4 bggraycol border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg" src="img/autodoc.png"/><a href="http://www.autodoc.ru">www.autodoc.ru</a><p><span className="greencol">online, B2C</span></p></div>
							<div className="col-md-6 bggraycol border-right mediawidth">

								<ul className="ulnotbulleted">
									<li>баннер 158х200 рх на главной</li>
								</ul>
							</div>
							<div className="col-md-2 bggraycol border-left mediawidth">

								<ul className="ulnotbulleted">
									<li>1</li>
								</ul>
							</div>
						</div>
						<div className="row height100" >
							<div className="col-md-4 bggraycol-nobottom border-right imgpadding text-center width120 mediawidth"><img className="inheritcenterimg"/><a href="http://www.zr.ru/">www.zr.ru/</a><p><span className="greencol">online, B2C</span></p></div>
							<div className="col-md-6 bggraycol-nobottom border-right mediawidth">
								<ul className="ulnotbulleted">
									<li>баннер 240х 400 рх в сайдбаре</li>

								</ul>
							</div>
							<div className="col-md-2 bggraycol-nobottom border-left mediawidth">
								<ul className="ulnotbulleted">
									<li>1</li>
									<li>3</li>
								</ul>
							</div>
						</div>
					</div>
				<div className="col-md-3 text-center bggraycolinher">
					<div className="fontblue">
						Охват ЦА <br/><span className="size24">{listItem.name}</span>
					</div>
					<br/>
					<div className="fontgreen">
						Стоимость контакта<br/><span className="size24">{listItem.comment} евро</span>
					</div>
				</div>
			</div>);
                break
        }

if(listItem.ischecked){
    classNameShow = "showItForPrint";
} else {
    classNameShow = "hideItForPrint";
}


            return <div className={classNameShow}>

					<div className="row bcwhite margintop10">
						<div className="col-md-12 blueColor_pt5">
							<img src={listItem.sticker}/><h4>{listItem.category}</h4>
							<span className="grayColor">Охват ЦА</span> {listItem.name} <span className="grayColor">Стоимость контакта</span> {listItem.comment} €
						</div>
					</div>



	{promopart}


				<div className="row grayinrow ">

					<div className="col-md-3 tiny-text">* изготовление баннера включено</div>
					<div className="col-md-4 tiny-text">** авторство AGV/клиент - 50/50</div>
					<div className="col-md-2 itogo">СТОИМОСТЬ ПАКЕТА</div>
					<div className="col-md-3 itogo_sell hidden-print ">{listItem.price} €</div>
				</div>

				<div className="row grayinrow">
					<div className="col-md-12">
						<div className="width120-center">
							<button className='checkboxforprice button btn'  onClick={ _this.addToSum } data-id={ listItem.id } id={listItem.unicname}  value={listItem.price} checked={listItem.ischecked} disabled={listItem.ischecked}>ДОБАВИТЬ В КОРЗИНУ</button>
						</div>
					</div>
				</div>

			</div>;


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

	  <div className="row" key="mainform" id="reactroot">
		  <div className="col-md-8">{itemHtml}</div>
		  <div className="col-md-4">
              <div id="staticPriceBrandPromo">

				  <div className="row">
					  <div className="col-md-9 colorblue">Результаты</div>

				  </div>



				  <div className="row">
					  <div className="col-md-8">Пакет “А” Optimal online (B2B), 3 месяца</div>
					  <div className="col-md-3">{this.state.billDev} €  </div>
					  <div className="col-md-1">
						  <img onClick={_this.cleanCategory} data-id="Пакет “А” Optimal online (B2B), 3 месяца" src="/img/clear.png" />
					  </div>
				  </div>

				  <div className="row">
					  <div className="col-md-8 ">Пакет “B” Online + Offline (B2B), 3 месяца</div>
					  <div className="col-md-3">{this.state.billPlatform} €    </div>
					  <div className="col-md-1">
						  <img onClick={_this.cleanCategory} data-id="Пакет “B” Online + Offline (B2B), 3 месяца" src="/img/clear.png" />
					  </div>
				  </div>

				  <div className="row">
					  <div className="col-md-8">Пакет “С” Online + Offline VIP (B2B), 3 месяца</div>
					  <div className="col-md-3">{this.state.billDesign} €    </div>
					  <div className="col-md-1">
						  <img onClick={_this.cleanCategory} data-id="Пакет “С” Online + Offline VIP (B2B), 3 месяца" src="/img/clear.png" />
					  </div>
				  </div>

				  <div className="row">
					  <div className="col-md-8">Пакет ”С+” Online (B2B) MAX EFFECT (B2B+B2C), 3 месяца</div>
					  <div className="col-md-3">{this.state.billBonus} €    </div>
					  <div className="col-md-1">
						  <img onClick={_this.cleanCategory} data-id="Пакет ”С+” Online (B2B) MAX EFFECT (B2B+B2C), 3 месяца" src="/img/clear.png" />
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
					  <div className="col-md-9"><span className="textalignright ">Итого</span></div>
					  <div className="col-md-3">{this.state.allAmount} €</div>
				  </div>

			  </div>
		  </div>

	  </div>);
  }
 //////////////////////////////
 // block of my functions

    cleanCategory(e){
        //addSumItem
        let category = e.target.dataset.id;
        AppDispatcher.dispatch({
            action: 'clean-category',
            category: category
        });
    }

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

export default AppBrandPromo;
