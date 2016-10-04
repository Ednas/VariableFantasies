/**
 * Created by victo on 6/29/2016.
 *   Editied by Edna on 10/3/2016
 */

(function(){
    
    angular.module('app').
    controller("homeCtrl",homeCtrl);

    
    
    function homeCtrl(){
        var home = this;
        
        home.title = "What's up woman?";
    }
    
}());
