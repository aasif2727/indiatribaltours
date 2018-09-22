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
        if($('#country_contact').val() =='' ||$scope.user.country == undefined){
            //alert('Last Name required.');
            $('#country_contact').focus();
            $('#country_contact').css({'border-color':'red'});
            return false;
        }
        if($('#email_contact').val() =='' ||$scope.user.email == undefined){
            //alert('Email required.');
            $('#email_contact').focus();
            $('#email_contact').css({'border-color':'red'});
            return;
        }
        // if($('#phone_contact').val() =='' ||$scope.user.phone == undefined){
        //     //alert('Phone required.');
        //     $('#phone_contact').focus();
        //     $('#phone_contact').css({'border-color':'red'});
        //     return false;
        // }
        if($('#message_contact').val() =='' ||$scope.user.query == undefined){
            //alert('Please type your query.');
            $('#message_contact').focus();
            $('#message_contact').css({'border-color':'red'});
            return false;
        }
        else{
            //submit user request
            var user = { 
                name: $scope.user.firstName,
                country: $scope.user.country,
                email: $scope.user.email,
                phone: ($scope.user.phone == '' || $scope.user.phone == undefined)? 'NA': $scope.user.phone,
                query: $scope.user.query,
                timestamp: new Date().toString()
            };
            indiaTourService.submitUserReq(user)
            .then(function(){
                alert('Enquiry submitted successfully!');
                $('#name_contact').val('');
                $('#name_contact').css({'border-color':'#8c8585'});
                $('#country_contact').val('');
                $('#country_contact').css({'border-color':'#8c8585'});
                $('#email_contact').val('');
                $('#email_contact').css({'border-color':'#8c8585'});
                $('#phone_contact').val('');
                $('#phone_contact').css({'border-color':'#8c8585'});
                $('#message_contact').val('');
                $('#message_contact').css({'border-color':'#8c8585'});
            })
            .catch(function(err){
                alert(err);
            });
        }
    };
});