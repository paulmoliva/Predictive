export const fetchSessions = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/sessions',
    success
  });
};

export const fetchSession = function(id, success){
  $.ajax({
    method: 'GET',
    url: `api/sessions/${id}`,
    success
  });
};

export const createSession = function(session, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/sessions',
    data: session,
    success,
    error
  });
};

export const updateSession = function(session, success){
  $.ajax({
    method: 'PATCH',
    url: `api/sessions/${session.id}`,
    data: {session},
    success
  });
};

export const destroySession = function(session, success){
  $.ajax({
    method: 'DELETE',
    url: `api/sessions/${session.id}`,
    success
  });
};
