/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp', ['ui.grid']);
app.controller('MyCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
        $scope.mySelections = [];
        $scope.myData = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];
        $scope.customSort  =  function (a, b, rowA, rowB, direction) {  
            console.log(a+"  "+b)
            var nulls = $scope.gridApi.core.sortHandleNulls(a, b);
            if (nulls !== null) {
                return nulls;
            } else {
                if (a === b) {
                    return 0;
                }
                if (a > b) {
                    return 1;
                } else {
                    return -1;
                }

                return 0;
            }
        };                 
        $scope.gridOptions = {
            data: 'myData',
            enableSorting: true,
            columnDefs: [
                {
                    field: 'name',
                    /*sort: {
                        direction: uiGridConstants.DESC,
                        priority: 1
                    }*/
                },
                {
                    field: 'age',
                    /*sort: {
                        direction: uiGridConstants.DESC,
                        priority: 0
                    } */                  
                    sortingAlgorithm : $scope.customSort
                }
            ],
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            }
        };
        $scope.sortManual = function () {
            console.log($scope.gridOptions.columnDefs[1]);
            //$scope.gridOptions.columnDefs[0].enableSorting = false;
            var column = $scope.gridOptions.columnDefs[1];
            $scope.gridApi.grid.sort(column, uiGridConstants.DESC, false).then(function () {             
                $scope.gridApi.grid.notifyDataChange(uiGridConstants.dataChange.COLUMN);
            });
        };
    }]);