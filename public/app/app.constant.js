angular.module('ecommerce').constant('state', (stateprovider, name) => {
  stateprovider.state(name, {
    url: '/' + name,
    controller: name + 'Controller',
    templateUrl: 'app/View/' + name + '.html',
    resolve: {
      loadMyCtrl: [
        '$ocLazyLoad',
        $ocLazyLoad => {
          return $ocLazyLoad.load([
            { files: ['app/Controller/' + name + 'Controller.js'] }
          ]);
        }
      ]
    }
  });
});
/*angular
  .module('ecommerce')
  .constant('host', );
*/
