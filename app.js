(function () {
    
    'use strict';

    angular.module('lunch', [])
    .controller('check', function($scope)
    {
    $scope.str = "";
    $scope.message="Enter the items";
    $scope.turn=function(){
        var naman = $scope.str.split('');
        if(naman.length==0)
        {
            $scope.message="Enter the items";
        }
        else if(naman.length<4)
        {
            $scope.message="Enjoy!";
        }
        else if(naman.length>3){
            $scope.message="Too much!";

        }
    }
    })

    }

)();