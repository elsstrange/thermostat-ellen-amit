# Thermostat Challenge

## Requirements
- Thermostat starts at 20 degrees
- You can increase the temp with an up function
- You can decrease the temp with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
- Low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)


## Stories

As a user,
So I know "Is it just me, or is it cold in here?"
I want to see the current thermostat target temperature

As a user,
So I'm reasonably comfy at all times
I want a default target temperature of 20 degrees

As a user,
So I can get warm when it's cold
I want to turn the thermostat up

As a user,
So I can cool off when it's warm
I want to turn the thermostat down

As a user,
So my pipes don't freeze
I want a minimum target temperature of 10 degrees


## Domain

**Thermostat**
- default temperature (20)
- minimum temperature (10)
- targetTemperature
- up (increases temperature by 1)
- down (decreases temperature by 1)