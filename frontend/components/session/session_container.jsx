import { connect } from 'react-redux';
import Session from './session';
// Actions
import { requestSessions,
         createSession,
         destroySession
       } from '../../actions/session_actions';

const mapStateToProps = state => ({
  sessions: state.sessions
});

const mapDispatchToProps = dispatch => ({
  requestSessions: () => dispatch(requestSessions()),
  createSession: session => dispatch(createSession(session))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
