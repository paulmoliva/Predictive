export const REQUEST_SESSIONS = "REQUEST_SESSIONS";
export const REQUEST_SESSION = "REQUEST_SESSION";
export const RECEIVE_SESSIONS = "RECEIVE_SESSIONS";
export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const REMOVE_SESSION = "REMOVE_SESSION";
export const CREATE_SESSION = "CREATE_SESSION";
export const UPDATE_SESSION = "UPDATE_SESSION";
export const DESTROY_SESSION = "DESTROY_SESSION";
export const SESSION_ERROR = "SESSION_ERROR";

export const requestSessions = () => ({
  type: REQUEST_SESSIONS
});

export const requestSession = id => ({
  type: REQUEST_SESSION,
  id
});

export const receiveSessions = sessions => ({
  type: RECEIVE_SESSIONS,
  sessions
});

export const receiveSession = session => ({
  type: RECEIVE_SESSION,
  session
});

export const removeSession = session => ({
  type: REMOVE_SESSION,
  session
});

export const createSession = session => ({
  type: CREATE_SESSION,
  session
});

export const updateSession = session => ({
  type: UPDATE_SESSION,
  session
});

export const destroySession = session => ({
  type: DESTROY_SESSION,
  session
});

export const sessionError = error => ({
  type: SESSION_ERROR,
  error
});
