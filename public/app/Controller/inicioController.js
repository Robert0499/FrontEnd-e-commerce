angular.module('ecommerce').controller('inicioController', inicioController);
inicioController.$inject = [
  '$scope',
  'DataBaseService',
  'Upload',
  'host',
  '$state',
  '$sessionStorage'
];
function inicioController(
  $scope,
  DataBaseService,
  Upload,
  host,
  $state,
  $sessionStorage
) {
  console.log('Holaaa');
}
