@app
begin-app

@http
get  /env
get  /todos
post /todos
post /todos/delete

@ws

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
