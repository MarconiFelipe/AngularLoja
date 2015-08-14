app.controller('controllerLista', ['$scope', function($scope){
    $scope.pesquisaChave = {
        categoria: "",
         $: ""
    };
    $scope.listaProduto = Produtos;
}]);

app.controller('controllerDetalhe', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.produto = Produtos[$routeParams.codigo];
    $scope.intervalo = 2000;
}]);
