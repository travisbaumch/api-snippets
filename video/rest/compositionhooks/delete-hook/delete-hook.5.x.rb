# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Find your credentials at twilio.com/console
api_key_sid = 'SKXXXX'
api_key_secret = 'your_api_key_secret'

@client = Twilio::REST::Client.new(api_key_sid, api_key_secret)

deleted = @client.video.compositionHooks(HKXXXX)
    .delete()

puts deleted
