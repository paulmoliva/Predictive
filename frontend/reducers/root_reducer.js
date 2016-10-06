import { combineReducers } from 'redux';
  import SessionReducer from './session_reducer';
  import ContractReducer from './contract_reducer';

const RootReducer = combineReducers({

    contract: ContractReducer,
    session: SessionReducer
});

export default RootReducer;
