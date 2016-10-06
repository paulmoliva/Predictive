import { RECEIVE_SESSIONS,
         RECEIVE_SESSION,
         REMOVE_SESSION,
         SESSION_ERROR
       } from '../actions/session_actions';
import merge from 'lodash/merge';


const SessionsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_SESSIONS:
      let newState = {};
      action.sessions.forEach(session => {
        newState[session.id] = session;
      });
      return newState;
    case RECEIVE_SESSION:
      const newSession = {[action.session.id]: action.session};
      return merge({}, state, newSession);
    case REMOVE_SESSION:
      newState = merge({}, state);
      delete newState[action.session.id];
      return newState;
    case SESSION_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default SessionsReducer;
