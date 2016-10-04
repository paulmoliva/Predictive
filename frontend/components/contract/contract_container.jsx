import { connect } from 'react-redux';
import Contract from './contract';
// Actions
import { requestContracts,
         createContract,
         destroyContract
       } from '../../actions/contract_actions';

const mapStateToProps = state => ({
  contracts: state.contracts
});

const mapDispatchToProps = dispatch => ({
  requestContracts: () => dispatch(requestContracts()),
  createContract: contract => dispatch(createContract(contract))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contract);
