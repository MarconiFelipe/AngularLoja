var app = angular.module('appProduto', ['ngRoute','ui.bootstrap']);

app.config( function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'estrutura/paginas/lista.html',
            controller: 'controllerLista'
        })
        .when('/lista', {
            templateUrl: 'estrutura/paginas/lista.html',
            controller: 'controllerLista'
        })
        .when('/detalhe/:codigo', {
            templateUrl: 'estrutura/paginas/detalhe.html',
            controller: 'controllerDetalhe'
        });
});
