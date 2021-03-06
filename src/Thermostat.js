"use strict";

function Thermostat () {
  this._temperature = 20;
  this._powerSaving = true
};
  Thermostat.prototype = {
    temperature: function() {
      return this._temperature;
    },

    changeTemperature: function(change) {
      if ((this._temperature + change) < 10) {
        throw(new Error('minimum temperature is 10'));
      } else if ((this._temperature + change) > 25) {
        throw(new Error('Max temp is 25 with power saving mode'));
      } else {
        this._temperature = this._temperature + change ;
        }
      },

      togglePowerSaving: function(){
        this._powerSaving = !this._powerSaving;
      },

      isPowerSaving: function(){
        return this._powerSaving
      }
  }
