export const fetchContracts = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/contracts',
    success
  });
};

export const fetchContract = function(id, success){
  $.ajax({
    method: 'GET',
    url: `api/contracts/${id}`,
    success
  });
};

export const createContract = function(contract, success, error){
  contract = {contract: {proposition: contract}};
  $.ajax({
    method: 'POST',
    url: 'api/contracts',
    data: contract,
    success,
    error
  });
};

export const updateContract = function(contract, success){
  $.ajax({
    method: 'PATCH',
    url: `api/contracts/${contract.id}`,
    data: {contract},
    success
  });
};

export const destroyContract = function(contract, success){
  $.ajax({
    method: 'DELETE',
    url: `api/contracts/${contract.id}`,
    success
  });
};
