angular.module('indiaTours').controller("enquiryController", function ($scope,$location, indiaTourService,sharedFactory) {
    $scope.categoryParam = $location.search()['category'];
    $scope.stateParam = $location.search()['state'];
    $scope.packageCode = $location.search()['code'];
    $scope._ = _;
    $scope.util = sharedFactory;
    $scope.itineraryDetail = {};

    $scope.submitContactReq = function(){
        if($('#name_contact').val() == '' || $scope.user.firstName == undefined){
            //alert('First Name required.');
            $('#name_contact').focus();
            $('#name_contact').css({'border-color':'red'});
            return false;
        }
        if($('#lastname_contact').val() =='' ||$scope.user.lastName == undefined){
            //alert('Last Name required.');
            $('#lastname_contact').focus();
            $('#lastname_contact').css({'border-color':'red'});
            return false;
        }
        if($('#email_contact').val() =='' ||$scope.user.email == undefined){
            //alert('Email required.');
            $('#email_contact').focus();
            $('#email_contact').css({'border-color':'red'});
            return;
        }
        if($('#phone_contact').val() =='' ||$scope.user.phone == undefined){
            //alert('Phone required.');
            $('#phone_contact').focus();
            $('#phone_contact').css({'border-color':'red'});
            return false;
        }
        if($('#message_contact').val() =='' ||$scope.user.query == undefined){
            //alert('Please type your query.');
            $('#message_contact').focus();
            $('#message_contact').css({'border-color':'red'});
            return false;
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