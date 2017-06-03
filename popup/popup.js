var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope){
    var bg = chrome.extension.getBackgroundPage();
    var locali18nService = new Locali18nService();
    
    // works
    $scope.bar = bg.myService.foo();
    
    // works
    $scope.directHello = chrome.i18n.getMessage('hello');
    // works
    $scope.localHello = locali18nService.hello;
    // DOES NOT work in Edge
    $scope.bgProxyHello = bg.myProxyi18nService.hello;
    // works
    $scope.bgFunctionHello = bg.myFunctioni18nService.get('hello');

    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

function Locali18nService() {
    return new Proxy({}, {
        get: function (target, name) {
            return chrome.i18n.getMessage(name);
        },
        set: function (target, name, value) {
            throw 'set not allowed for i18n';
        }
    });
};
