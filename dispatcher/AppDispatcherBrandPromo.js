// AppDispatcher.js
import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher();

import ListStore from '../stores/ListStoreBrandPromo';

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {

  let action = payload.action;
  let new_item = payload.new_item;
  let valuebyid = payload.valuebyid;
  let valuebyidinselect = payload.valuebyidinselect;
  let id = payload.id;
  //budget
    let valuebudget = payload.valuebudget;
    //clean category
    let category = payload.category;

    switch(action) {
        // clean category
        case 'clean-category':
            ListStore.clearCategory(category);
            break;

        // Calculate budget
      case 'set-budget':
          ListStore.culculateBudget(valuebudget);
          break;

      // Respond to change value by id
      case 'change-value-by-id-select':
      ListStore.changeValueInSelect(valuebyidinselect);
      break;

  // Respond to change value by id
      case 'change-value-by-id':
      ListStore.changeValue(valuebyid);
      break;

	// Calculate sum
	case 'add-sum-item':
		ListStore.addSumItem(id);
		break;


    // Respond to add-item action
    case 'add-item':
      ListStore.addItem(new_item);
      break;
    
    // Respond to remove-item action
    case 'remove-item':
      ListStore.removeItem(id);
      break;

	  default:
      return true;
  }

  // If action was responded to, emit change event
  ListStore.emitChange();

  return true;

});

export default AppDispatcher;
