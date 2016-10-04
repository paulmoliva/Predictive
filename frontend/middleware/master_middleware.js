import { applyMiddleware } from 'redux';
  import ContractMiddleware from './contract_middleware';

const masterMiddleware = applyMiddleware(
	
    ContractMiddleware
);

export default masterMiddleware;
