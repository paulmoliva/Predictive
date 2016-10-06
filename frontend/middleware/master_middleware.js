import { applyMiddleware } from 'redux';
  import SessionMiddleware from './session_middleware';
  import ContractMiddleware from './contract_middleware';

const masterMiddleware = applyMiddleware(
	
    ContractMiddleware,
    SessionMiddleware
);

export default masterMiddleware;
