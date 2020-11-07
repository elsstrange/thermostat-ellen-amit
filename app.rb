require 'sinatra'
require 'sinatra/json'
require 'pry'

class Thermostat < Sinatra::Base
  enable :sessions
  # set :app_file, __FILE__
  # set :public_folder, Proc.new { File.join(root, 'static') }

  get '/' do
    erb :thermostat
  end

  get '/api/thermostat' do
    temperature = session[:temperature] || '20'
    json temperature: temperature
  end

  post '/api/thermostat' do
    # binding.pry
    # parsedbody = JSON.parse(params.keys.first)
    session[:temperature] = params['temperature']
  end

end
