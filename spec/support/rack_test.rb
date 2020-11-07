require 'rack/test'

RSpec.configure do |config|
  config.include Rack::Test::Methods
  def app
    Thermostat
  end
end
