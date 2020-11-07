require 'sinatra'

class Thermostat < Sinatra::Base
  enable :sessions
  # set :app_file, __FILE__
  # set :public_folder, Proc.new { File.join(root, 'static') }

  get '/' do
    erb :thermostat
  end
end
