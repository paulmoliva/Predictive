// Contract API Util
import { fetchContracts,
         fetchContract,
         createContract,
         updateContract,
         destroyContract
       } from '../util/contract_api_util';
// Contract Action
import { requestContracts,
         receiveContract,
         receiveContracts,
         removeContract,
         contractError,
// Contract Constants
         REQUEST_CONTRACTS,
         REQUEST_CONTRACT,
         CREATE_CONTRACT,
         UPDATE_CONTRACT,
         DESTROY_CONTRACT
       } from '../actions/contract_actions';

 export default ({getState, dispatch}) => next => action => {
   const contractsSuccess = data => dispatch(receiveContracts(data));
   const contractSuccess = data => dispatch(receiveContract(data));
   const contractRemoved = data => dispatch(removeContract(data));
   const contractErrored = data => dispatch(contractError(data.responseJSON));
   switch(action.type){
     case REQUEST_CONTRACTS:
       fetchContracts(contractsSuccess);
       return next(action);
     case REQUEST_CONTRACT:
       fetchContract(action.id, contractSuccess);
       return next(action);
     case CREATE_CONTRACT:
       createContract(action.contract, contractSuccess, contractErrored);
       return next(action);
     case UPDATE_CONTRACT:
       updateContract(action.contract, contractSuccess);
       return next(action);
     case DESTROY_CONTRACT:
       destroyContract(action.contract, contractRemoved);
       return next(action);
     default:
       return next(action);
   }
 };
