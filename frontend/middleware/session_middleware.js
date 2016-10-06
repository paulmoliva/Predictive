// Session API Util
import { fetchSessions,
         fetchSession,
         createSession,
         updateSession,
         destroySession
       } from '../util/session_api_util';
// Session Action
import { requestSessions,
         receiveSession,
         receiveSessions,
         removeSession,
         sessionError,
// Session Constants
         REQUEST_SESSIONS,
         REQUEST_SESSION,
         CREATE_SESSION,
         UPDATE_SESSION,
         DESTROY_SESSION
       } from '../actions/session_actions';

 export default ({getState, dispatch}) => next => action => {
   const sessionsSuccess = data => dispatch(receiveSessions(data));
   const sessionSuccess = data => dispatch(receiveSession(data));
   const sessionRemoved = data => dispatch(removeSession(data));
   const sessionErrored = data => dispatch(sessionError(data.responseJSON));
   switch(action.type){
     case REQUEST_SESSIONS:
       fetchSessions(sessionsSuccess);
       return next(action);
     case REQUEST_SESSION:
       fetchSession(action.id, sessionSuccess);
       return next(action);
     case CREATE_SESSION:
       createSession(action.session, sessionSuccess, sessionErrored);
       return next(action);
     case UPDATE_SESSION:
       updateSession(action.session, sessionSuccess);
       return next(action);
     case DESTROY_SESSION:
       destroySession(action.session, sessionRemoved);
       return next(action);
     default:
       return next(action);
   }
 };
