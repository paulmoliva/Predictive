export const REQUEST_CONTRACTS = "REQUEST_CONTRACTS";
export const REQUEST_CONTRACT = "REQUEST_CONTRACT";
export const RECEIVE_CONTRACTS = "RECEIVE_CONTRACTS";
export const RECEIVE_CONTRACT = "RECEIVE_CONTRACT";
export const REMOVE_CONTRACT = "REMOVE_CONTRACT";
export const CREATE_CONTRACT = "CREATE_CONTRACT";
export const UPDATE_CONTRACT = "UPDATE_CONTRACT";
export const DESTROY_CONTRACT = "DESTROY_CONTRACT";
export const CONTRACT_ERROR = "CONTRACT_ERROR";

export const requestContracts = () => ({
  type: REQUEST_CONTRACTS
});

export const requestContract = id => ({
  type: REQUEST_CONTRACT,
  id
});

export const receiveContracts = contracts => ({
  type: RECEIVE_CONTRACTS,
  contracts
});

export const receiveContract = contract => ({
  type: RECEIVE_CONTRACT,
  contract
});

export const removeContract = contract => ({
  type: REMOVE_CONTRACT,
  contract
});

export const createContract = contract => ({
  type: CREATE_CONTRACT,
  contract
});

export const updateContract = contract => ({
  type: UPDATE_CONTRACT,
  contract
});

export const destroyContract = contract => ({
  type: DESTROY_CONTRACT,
  contract
});

export const contractError = error => ({
  type: CONTRACT_ERROR,
  error
});
