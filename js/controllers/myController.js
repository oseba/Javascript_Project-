angular.module("myControllerModule",[])

.controller("HomeController",["$scope","GroceryService",function($scope,GroceryService){

            $scope.appTitle = " Liste des courses"
    $scope.groceryItems = GroceryService.groceryItems;


    $scope.markCompleted = function(entry)
    {

        GroceryService.markCompleted(entry);
    };

    $scope.removeItem = function(entry)
    {
        GroceryService.removeItem(entry);
    };


}])


.controller("GroceryListeItemsController",["$scope","$routeParams","$location","GroceryService",function($scope, $routeParams,$location,GroceryService){


    $scope.changer = function(){
        $(function () {
            $('#mamap').rwdImageMaps();
            $('#mamap').maphilight({ fillColor: "0000FF",fillOpacity: 0.6 });


            });


    };

    $scope.changer();
    if(!$routeParams.id)
        {

            $scope.groceryItem = {id: 0 , completed: false , itemName:"" , date: new Date()};
        }
        else
        {
            $scope.groceryItem = _.clone(GroceryService.findById(parseInt($routeParams.id)));
        }

        $scope.groceryItems = GroceryService.groceryItems;


        $scope.classes = [
            ["Classe 1","Classe 2","Classe 3","Classe 4"],
                ["Classe 5","Classe 6","Classe 7","Classe 8"],
                ["Classe 9","Classe 10","Classe 11","Classe 12"]

        ];

        $scope.save = function()
        {
            GroceryService.save($scope.groceryItem);
            $location.path("/main");

        };

       // console.log($scope.groceryItems);
}]);

















/*

.factory("Calculations",function(){

        let calculations = {};

        let tab = [];

        let res;


        calculations.inverser = function(phrase)
        {
            for(let lettre in Array.from(phrase)){
                tab.push(phrase[lettre]+"|");
            }

            res = tab.join('');
            return res;

        };

        return calculations;


});*/
/*
.directive("direBonjour", function(){

    return{
        restrict: "E",
        template: "<p> Ouais bg kel bay ?</p>"

    }


});
*/