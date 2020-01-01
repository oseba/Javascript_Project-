angular.module("myControllerModule",[])



    .controller("RoomsController",["$scope","$rootScope",function($scope,$rootScope){



        $rootScope.appTitle= "Gestion des Salles";


        $scope.changer = function(){
            $(function () {
                $('#mamap').rwdImageMaps();
                $('#mamap').maphilight({ fillColor: "0000FF",fillOpacity: 0.6 });


            });


        };


        $scope.changer();




    }])

    .controller("EtageController",["$scope","$routeParams","$rootScope","$route",function($scope,$routeParams,$rootScope,$route){

        $rootScope.appTitle= "Gestion des Salles - "+$routeParams.name;
        $scope.nomSalle = $routeParams.name;
        $scope.etage = $routeParams.etage;

        $scope.salles = {};
        $scope.users = {};
        $scope.salle = {};


        $scope.changer = function(){
            $(function () {


                $('#etage').rwdImageMaps();

                $('#etage').maphilight({ fillColor: "00FF00",fillOpacity: 0.6 , alwaysOn:true});
             //   $('#5').data('maphilight', {"fillColor":"FF0000","fillOpacity":0.6});
                $('#etage').rwdImageMaps();
            });


        };
        $scope.changerCouleurs =  function(){
            $(function () {

                console.log("changement en cours");
                for (const salle in $scope.salles) {
                   console.log($scope.salles[salle].id+" : "+$scope.salles[salle].estReservee);
                    if($scope.salles[salle].estReservee == 1)
                    $('#'+$scope.salles[salle].id).data('maphilight', {"fillColor":"FF0000","fillOpacity":0.6});
                }

            });


        };

        $scope.changer();

        $scope.show = function(salle){


            $scope.salle = salle;

            for(let i=0;i < $scope.users.length; i++)
            {
               // console.log($scope.users[i]["pseudo"]);

                if($scope.users[i]["id"] == $scope.salle.reservateur)
                {
                    $scope.salle.reservateur = $scope.users[i];
                }

            }

            //console.log(salle);
            //console.log($scope.salle);
            $('#staticBackdrop').modal('show');

        };





        $.ajax({
            url : 'php/salles.php', // La ressource ciblée
            type : 'GET', // Le type de la requête HTTP
            dataType : 'json', // Le type de données à recevoir, ici, du HTML.
            success : function(data){


                $scope.salles = data;
                $scope.$digest();
                $scope.changer();
                $scope.changerCouleurs();


            },

            error : function(resultat, statut, erreur){
                console.log("Il y a eu une erreur" + erreur);
            }
        });
        $.ajax({
            url : 'php/users.php', // La ressource ciblée
            type : 'GET', // Le type de la requête HTTP
            dataType : 'json', // Le type de données à recevoir, ici, du HTML.
            success : function(data){


                $scope.users = data;
                $scope.$digest();


            },

            error : function(resultat, statut, erreur){
                console.log("Il y a eu une erreur" + erreur);
            }
        });


    }])

    .controller("RoomController",["$scope","$routeParams","$rootScope",function($scope,$routeParams,$rootScope){

        $rootScope.appTitle= "Gestion des Salles - "+$routeParams.name;
        $scope.nomSalle = $routeParams.name;


     /*   $.ajax({
            url : 'php/add.php', // La ressource ciblée
            type : 'POST', // Le type de la requête HTTP
            data:
                {
                    "pseudo" : "ya3tik saha !",
                    "password" : "blablabla"
                },

            success : function(data){

                console.log(" Tout s'est bien déroulé");
                console.log("data : "+data);


            },

            error : function(resultat, statut, erreur){
                console.log("Il y a eu une erreur" + erreur);
            }
        });*/
/*
        $.ajax({
            url : 'php/sql.php', // La ressource ciblée
            type : 'GET', // Le type de la requête HTTP
            dataType : 'json', // Le type de données à recevoir, ici, du HTML.
            success : function(data){

                console.log(" Tout s'est bien déroulé");
                console.log("La data : "+data[0]["pseudo"]);

                for(let i = 0; i < data.length; i++) {
                    let user = data[i];

                    console.log("pseudo : "+user.pseudo);
                    console.log("mot de passe : "+user.password);
                }

            },

            error : function(resultat, statut, erreur){
                console.log("Il y a eu une erreur" + erreur);
            }
        });*/


    }])


    .controller("HomeController",["$scope","$rootScope","User",function($scope,$rootScope,User){

        $rootScope.appTitle= "Gestion des Salles";

        $scope.loggedin = User.loggedin;






    }])

.controller("InscriptionController",["$scope","$rootScope",function($scope,$rootScope){

    $rootScope.appTitle= "Inscription";

    $scope.user = {};

    $scope.user.pseudo = "";
    $scope.user.password = "";

    $scope.addUser = function()
    {
        console.log("Pseudo : "+$scope.user.pseudo);
        console.log("Mdp : "+$scope.user.password);

        $.ajax({
            url : 'php/add.php', // La ressource ciblée
            type : 'POST', // Le type de la requête HTTP
            data:
                {
                    "pseudo" : $scope.user.pseudo,
                    "password" : $scope.user.password
                },

            success : function(data){

                console.log(" Tout s'est bien déroulé");
                console.log("data : "+data);


            },

            error : function(resultat, statut, erreur){
                console.log("Il y a eu une erreur" + erreur);
            }
        });

    };

}])

.controller("ConnexionController",["$scope","$rootScope",function($scope,$rootScope){

    $rootScope.appTitle= "Connexion";

    $scope.user = {};

    $scope.user.pseudo = "";
    $scope.user.password = "";

    $scope.login = function()
    {
        console.log("Pseudo : "+$scope.user.pseudo);
        console.log("Mdp : "+$scope.user.password);

        $.ajax({
            url : 'php/login.php', // La ressource ciblée
            type : 'POST', // Le type de la requête HTTP
            data:
                {
                    "pseudo" : $scope.user.pseudo,
                    "password" : $scope.user.password
                },
           // dataType: 'json',

            success : function(data){


             //  console.log("data : "+data+" dataType : "+typeof(data));

                if(data == "true")
                {
                    console.log(" Connexion réussie");
                }
                else {
                    console.log(" Erreur");
                }


            },

            error : function(resultat, statut, erreur){
                console.log("Il y a eu une erreur" + erreur);
            }
        });

    };

}]);

/*
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














*/


/*
.directive("direBonjour", function(){

    return{
        restrict: "E",
        template: "<p> Ouais bg kel bay ?</p>"

    }


});
*/