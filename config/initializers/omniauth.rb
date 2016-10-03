OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '345331055803372', 'b5712074730ef2255a31027e9da2d0cb', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
end
