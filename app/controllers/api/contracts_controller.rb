class Api::ContractsController < ApplicationController
  def create
    @contract = Contract.new(contract_params)
    @contract.save
  end

  def contract_params
    params.require(:contract).permit(:proposition)
  end
end
