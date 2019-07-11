/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var lobby = angular.module('testLobby', []);



/*var LobbyController = function(scope) {
 var model = this;
 model.test = "test";
 model.testing = "sdfsdf";
 //console.log(globalsetting.appName)
 var Person = function(name){
 this.name = name;
 this.type = 'human';
 }
 
 Person.prototype.info = function(){
 console.log("Name:", this.name, "Type:", this.type);
 }
 
 var Robot = function(name){
 //Person.apply(this,arguments)
 this.name = name;
 this.type = 'robot';
 }
 
 Robot.prototype = Person.prototype;        // Set prototype to Person's
 Robot.prototype.constructor = Robot;   // Set constructor back to Robot
 
 person = new Person("Bob");
 robot = new Robot("Boutros");
 
 person.info();
 // Name: Bob Type: human
 
 robot.info();
 // Name: Boutros Type: robot
 
 model.clickme = function (){
 $("#testingID").trigger('testsample')
 model.testing = model.testing+42
 }
 scope.$watch('lobby.testing', function(newVal, oldVal){
 //if(newVal!=oldVal)
 alert(newVal)
 //scope.$broadcast('overlaychange',{"val":newVal})
 });
 
 }
 var gameDefinition = function gameDefinition(){
 
 var lobbyController = function($scope) {
 alert("what")
 var model = this;        
 // model.test = model.gameDetails.test;
 //alert("here"+model.test)       
 model.test = model.gameDetails.test;        
 $('#testingID').on('testsample',function (){
 alert("model is "+model.gameDetails.test)
 model.test = model.gameDetails.test;       
 })
 }
 
 return{
 restrict: 'E',
 scope: {
 gameDetails: '='           
 },    
 reqired:'lobbyController',
 link:function(scope, element, attrs, ctrl) {
 
 scope.$watch('lobbyController.test', function(){
 scope.$apply();
 alert("here for watch"+ctrl.test);
 });
 },
 template: "testing <input type='text' ng-model='lobbyController.test' id='testingID'>",
 controller: lobbyController,
 controllerAs: 'lobbyController',
 bindToController: true
 }
 
 };*/
var LobbyController = function (scope, globalsetting) {

    console.log("came here" + globalsetting.title)
};
lobby.provider('globalsetting', function () {
    
    var version = '1.2';
    return {
        setVersion: function (value) {
            version = value;
        },
        $get: function () {
            return {
                title: 'The Matrix' + ' ' + version
            };
        }
    };
    /*var appname = "LAWYER APP";
     this.setAppName = function (value) {
     appname = value; 
     }
     this.$get = function () {
     
     return {
     appName: appname
     };
     }*/
});
lobby.config(function (globalsettingProvider) {
    console.log(globalsettingProvider.value)
    //globalsettingProvider.setVersion("1");
});
lobby.controller('LobbyController', ['$scope', 'globalsetting', LobbyController]);
//lobby.directive('gameDefinition', gameDefinition);
