(function() {
  'use strict';

  angular
  .module('houseDash')
  .factory('RLRHouseMember', RLRHouseMember);

  /** @ngInject */
  function RLRHouseMember() {
    var houseMembers = [
    {name: 'Ryan'},
    {name: 'Guy'},
    {name: 'Kyle'},
    {name: 'Matt'},
    {name: 'Calvin'}
    ];

    var factory = {};
    factory.getHouseMembers = function () {
      return houseMembers;
    };
    return factory;
  }})();