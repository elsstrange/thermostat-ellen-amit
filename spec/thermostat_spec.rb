# Test
#
# our thermostat is now an api so it can store persisted state
#
# test that we can do a get request to our api we want a response of the temperature
#
# when we do a post request we update the temperature and get a successfull status (testing both)

describe 'api' do
  context 'get' do
    it 'starts at 20' do
      get '/api/thermostat'
      parsedbody = JSON.parse(last_response.body)
      expect(last_response).to be_ok
      expect(parsedbody['temperature']).to eq('20')
    end

    it 'retrieves a new temperature after one has been posted' do
      post '/api/thermostat', {temperature: '5'}
      get '/api/thermostat'
      parsedbody = JSON.parse(last_response.body)
      expect(parsedbody['temperature']).to eq('5')
      expect(last_response).to be_ok
    end
  end

  context 'post' do
    it 'returns 200' do
      post '/api/thermostat', {temperature: '5'}
      expect(last_response.status).to eq(200)
    end
  end

end
