import { combineReducers } from 'redux';
  import ContractReducer from './contract_reducer';

const RootReducer = combineReducers({

    contract: ContractReducer
});

export default RootReducer;
