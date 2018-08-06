angular.module('indiaTours').controller("authController", function ($scope, $window,$uibModal) {

    $scope.userObj = {};
    $scope.signUpMode = false;
    /*********Check User Logged In Status**********/
    initUser();

    function initUser() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {
                $scope.userObj.name = user.displayName;
                $scope.userObj.email = user.email;
                $scope.userObj.photoUrl = user.photoURL;
                $scope.signUpMode = true;

                localStorage.setItem('email', user.email);
                localStorage.setItem('signUpMode', 'true');
            }
        })
        if (localStorage.getItem('signUpMode') != null && localStorage.getItem('signUpMode') == 'true') {
            $scope.signUpMode = true;
            $scope.userObj.email = localStorage.getItem('email');
        }
    };

    /*********Email SignIn********************/
    $scope.SignIn = function () {
        if($scope.user == undefined){
            alert('Enter valid emailID/password');
            return;
        }
        var _email = $scope.user.email;
        var _password = $scope.user.password;
        if(_email == undefined){
            alert('Enter email ID');
            return;
        }
        if(_password == undefined){
            alert('Enter password');
            return;
        }
        firebase.auth().signInWithEmailAndPassword(_email, _password)
            .then(function (user) {
                $scope.userObj.name = user.displayName;
                $scope.userObj.email = user.email;
                $scope.userObj.photoUrl = user.photoURL;
                $scope.signUpMode = true;
                localStorage.setItem('email', user.email);
                localStorage.setItem('signUpMode', 'true');
                $window.location.reload();
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert(errorMessage);
                }
                if (errorCode === 'auth/user-not-found') {
                    alert(errorMessage);
                }
            });
    }

    /*********Email SignOut********************/
    $scope.SignOut = function () {
        firebase.auth().signOut()
            .then(function () {
                $scope.signUpMode = false;
                localStorage.setItem('email', '');
                localStorage.setItem('signUpMode', '');
                $window.location.reload();
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    /*********Email SignUp********************/
    // $scope.SignUp = function () {
    //     var _email = $scope.user.email;
    //     var _password = $scope.user.password;
    //     firebase.auth().createUserWithEmailAndPassword(_email, _password)
    //         .then(function (user) {
    //             console.log("Email: " + firebase.auth().currentUser.email); 
    //             $scope.signUpMode = true;
    //             $window.location.reload();
    //         })
    //         .catch(function (error) {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             if (errorCode == 'auth/weak-password') {
    //                 alert('The password is too weak.');
    //             } else {
    //                 alert(errorMessage);
    //             }
    //             console.log(error);
    //         });
    // }

    /*********GOOGLE SignIn********************/
    $scope.GoogleSignIn = function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }

    /*********GOOGLE SignOut********************/
    $scope.GoogleSignOut = function () {
        firebase.auth().signOut()
            .then(function () {
                $scope.signUpMode = false;
                localStorage.setItem('email', '');
                localStorage.setItem('signUpMode', '');
            }).catch(function (error) {
                console.log(error);
            });
    }

    /*********FACEBOOK SignIn********************/
    $scope.FBSignIn = function () {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(fbProvider);
    }

    /*********FACEBOOK SignOut********************/
    $scope.FBSignOut = function () {
        firebase.auth().signOut()
            .then(function () {
                $scope.signUpMode = false;
                localStorage.setItem('email', '');
                localStorage.setItem('signUpMode', '');
            }).catch(function (error) {
                console.log(error);
            });
    }

    /********Register User & Save in Firebase******/
    $scope.SignUp = function(){
        $uibModal.open({
            templateUrl: 'views/register.html',
            backdrop: true,
            windowClass: 'modal', 
            controller: function ($scope, $uibModalInstance,user) {
                $scope.user = user;
                $scope.submit = function () {
                    $uibModalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel'); 
                };
            },
            resolve: {
                user: function () {
                    return $scope.user;
                }
            }
            // animation: true,
            // templateUrl: 'views/register.html',
            // controller: 'authController',
            // size: 'sm',
            // resolve: {
            //   items: function() {
            //     return $scope.items;
            //   }
            // }
        });//end of modal.open
    }
});