import { RECEIVE_CONTRACTS,
         RECEIVE_CONTRACT,
         REMOVE_CONTRACT,
         CONTRACT_ERROR
       } from '../actions/contract_actions';
import merge from 'lodash/merge';


const ContractsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CONTRACTS:
      let newState = {};
      action.contracts.forEach(contract => {
        newState[contract.id] = contract;
      });
      return newState;
    case RECEIVE_CONTRACT:
      const newContract = {[action.contract.id]: action.contract};
      return merge({}, state, newContract);
    case REMOVE_CONTRACT:
      newState = merge({}, state);
      delete newState[action.contract.id];
      return newState;
    case CONTRACT_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default ContractsReducer;
