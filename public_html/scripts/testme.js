/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
model.player = {
        setRank : function(value){
            this.rank = value;
        },
        getRank : function(){
            return this.rank;
        },
        setName : function(value){
            this.name = value;
        },
        getName : function(){
            return this.name;
        },
        setChips : function(value){
            this.chips = value;
        },
        getChips : function(){
            return this.chips;
        }        
    };

var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
   $scope.getTimes=function(n){
     return new Array(n);
   };   
   
   this.animals = new Array();
   this.count = 0;
    function Mammal(name) {
        this.name = name;        
    }
   for(var i =0; i < 5;i++){
       var mammel = new Mammal(i);
       this.animals.push(mammel);
   }
   this.getMammel = function(name){
       for(var index = 0; index < this.animals.length; index++ ){
           var animal = this.animals[index];  
           alert(animal.name+" "+name)
           if(animal.name == name){
               return animal;
           }
       }
   }
   this.getIndex = function(name){      
       var index = this.animals.indexOf(this.getMammel(name))
       alert(index);
   }
});