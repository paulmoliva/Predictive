
if user.nil?
  json.user do
    {}
  end
else
  json.user do
    json.id user.id
    json.name user.name
    json.errors user.errors
  end
end
