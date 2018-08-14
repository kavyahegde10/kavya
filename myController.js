app.controller('studentController', ['$scope','$state', function ($scope,$state) {  
                $scope.appTitle = "LocalStorage Demo";  
                $scope.appHeadline = "AngularJS and HTML5";  
                $scope.student = [];
  
                
                $scope.count = $scope.student.length;    
                $scope.addstudent = function () {  
                    $scope.student.push({ 'no': $scope.no, 'name': $scope.Name, 'email': $scope.email,'age': $scope.age,'address': $scope.address });  
                    
                    $scope.no = '';  
                    $scope.Name = '';  
                    $scope.email = '';  
					$scope.age = '';
					 $scope.address ='';
                    $scope.count = $scope.student.length; 
                    console.log($scope.student,"1"); 
                };  
  
                    $scope.deleteStudent=function(student){
                    $scope.student.splice($scope.student.indexOf(student), 1);  
                      
                    $scope.count = $scope.student.length;  
                };  

                $scope.navigate = function(){
                    $state.go('student')
                }
            }]);