angular.module('indiaTours').controller("enquiryController", function ($scope,$location, indiaTourService,sharedFactory,vcRecaptchaService) {
    $scope.categoryParam = $location.search()['category'];
    $scope.stateParam = $location.search()['state'];
    $scope.packageCode = $location.search()['code'];
    $scope._ = _;
    $scope.util = sharedFactory;
    $scope.itineraryDetail = {};

    $scope.submitContactReq = function(){
        console.log($scope.user.myRecaptchaResponse);
        if($scope.user.firstName =='' ||$scope.user.firstName == undefined){
            alert('First Name required.');
            return;
        }
        if($scope.user.lastName =='' ||$scope.user.lastName == undefined){
            alert('Last Name required.');
            return;
        }
        if($scope.user.email =='' ||$scope.user.email == undefined){
            alert('Email required.');
            return;
        }
        if($scope.user.phone =='' ||$scope.user.phone == undefined){
            alert('Phone required.');
            return;
        }
        if($scope.user.query =='' ||$scope.user.query == undefined){
            alert('Please type your query.');
            return;
        }
        else{
            //submit user request
            var user = { 
                fname: $scope.user.firstName,
                lname: $scope.user.lastName,
                email: $scope.user.email,
                phone: $scope.user.phone,
                query: $scope.user.query,
                timestamp: new Date().toString()
            };
            indiaTourService.submitUserReq(user)
            .then(function(){
                alert('Enquiry submitted successfully!');
                $('#name_contact').val('');
                $('#lastname_contact').val('');
                $('#email_contact').val('');
                $('#phone_contact').val('');
                $('#message_contact').val('');
            })
            .catch(function(err){
                alert(err);
            });
        }
    };
});