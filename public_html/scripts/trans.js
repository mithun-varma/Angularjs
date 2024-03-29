/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var stock = angular.module('stockMarketApp', [])
        .controller('MainCtrl', [function () {
                var self = this;
                self.stocks = [
                    {name: 'First Stock', price: 100, previous: 220},
                    {name: 'Second Stock', price: 140, previous: 120},
                    {name: 'Third Stock', price: 110, previous: 110},
                    {name: 'Fourth Stock', price: 400, previous: 420}
                ];
            }]);
stock.directive('simpleStockRepeat',
 ['$parse',function($parse) {
 return {
 restrict: 'A',
 // Capture and replace the entire element
 // instead of just its content
 transclude: 'element',
 // A $transclude is passed in as the fifth
 // argument to the link function
 link: function($scope, $element, $attrs, ctrl, $transclude) {
 var stock =  $parse($attrs.simpleStockRepeat);
 var myArray = stock($scope);
 var container = angular.element('<div class="container"></div>');
 for (var i = 0; i < myArray.length; i++) {
 // Create an element instance with a new child
 // scope using the clone linking function
 var instance = $transclude($scope.$new(),
 function(clonedElement, newScope) {    
 // Expose custom variables for the instance
 newScope.currentIndex = i;
 newScope.stock = myArray[i];
 });
 // Add it to our container
 container.append(instance);
 }
 // With transclude: 'element', the element gets replaced
 // with a comment. Add our generated content
 // after the comment
 $element.after(container);
 }
 };
 }]);