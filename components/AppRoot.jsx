// AppRoot.jsx
import React from 'react';
import ListStore from '../stores/ListStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

// Sub components
import NewItemForm from './NewItemForm';


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


// Method to retrieve state from Stores
let getListState = () => {
  return {
    items: ListStore.getItems()
  };
}

class AppRoot extends React.Component {
  
  // Method to setState based upon Store changes
  _onChange() {
    this.setState(getListState());
  }

  constructor() {
    super();
    this.state = getListState();
	this.handleClickCheckbox = this.handleClickCheckbox.bind(this) ; 
	
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
  addToSum(e){
	 alert('go'+e.target.dataset.id); 
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
let lastCategory = '';
    let items = ListStore.getItems();
    let currentSum = ListStore.getSum();
	alert('currentSum='+currentSum);
    let itemHtml = items.map(( listItem,index ) => {
		
		//UNIC FORMULA
				 var usersControlFormula = [];
				if (listItem.unicname=='disributors_quantity') {
					//this.state.distributorquantity = this.state.resultPrices[index].multinumber;
					usersControlFormula.push(<div><input className="width20" type="text"  onChange={_this.setDistributorQuantiy}  value={listItem.multinumber}/></div>);
				}
else {usersControlFormula.push(<div>zzzzzzzzzz</div>);}

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
					useOrNotCheckbox.push(<input className='checkboxforprice'  onClick={ _this.addToSum } data-id={ listItem.id } type='checkbox' id={listItem.unicname}  value={listItem.price} checked={this.ischecked} />);
				}
		
				//check prefix and set if exist
				if (listItem.showwordprefix != '') {	
					var pricewithprefix = listItem.showwordprefix + ' ' + listItem.price;
				} else {
					pricewithprefix = listItem.price;
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
				
		/* 		 if (listItem.category !== lastCategory) {
				var itogo='Итого: ';
					switch (lastCategory) {
								case "Разработка программы: услуги агентства":

					buttonListElements.push(<div className="row"><div className="col-md-9 itogo">ИТОГО: </div><div className="col-md-3 itogo_sell">{this.state.billDev} €</div></div>);
								  break;	   
							  case "Платформа для Программы лояльности:":
					buttonListElements.push(<div className="row"><div className="col-md-9 itogo">ИТОГО: </div><div className="col-md-3 itogo_sell">{this.state.billPlatform} €</div></div>);
								  break;
							  case "Дизайн key visual:":
					buttonListElements.push(<div className="row"><div className="col-md-9 itogo">ИТОГО: </div><div className="col-md-3 itogo_sell">{this.state.billDesign} €</div></div>);
								  break;

							}

                      buttonListElements.push(<div><div className="row bcwhite margintop80"><div className="col-md-12 blueColor_h80_pt5"><h3>{product.category}</h3></div></div></div>);
					
				 } */
				
				
				
		//		<div className={hideinputonphone}>{usersControlFormula}</div>
      return <div className="row" key={ listItem.id } title={listItem.comment}>
					<div className="col-md-5 bcgray">
				{useOrNotCheckbox}
						<label   htmlFor={listItem.unicname}>{listItem.name}</label>
					</div>
					
					<div className={hideinputonphone}>{usersControlFormula}</div>
					
					<div className={hidepriceonphone}><SomeSum priceinrow={pricewithprefixandsuffix} key={listItem.price} /><button onClick={ _this.removeItem } data-id={ listItem.id }>×</button></div>
	          </div>;
    });
		 // 

    return (
      <div>
        <div className="allControls">
          { itemHtml }
        </div>
        <NewItemForm />
      </div>
    );  	
  }
 //////////////////////////////
 // block of my functions
 
 handleClickCheckbox(someval,indexinarray) {
		alert(this.state.resultPrices[indexinarray].needit == false);
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
		alert('dis');
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
