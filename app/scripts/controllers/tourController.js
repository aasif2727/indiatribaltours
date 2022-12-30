'use strict';

angular.module('indiaTours').controller("tourController", function ($scope,$location, indiaTourService,sharedFactory) {
    $scope.categoryParam = $location.search()['category'];
    $scope.stateParam = $location.search()['state'];
    $scope.packageTitle = $location.search()['title'];
    $scope.tourlistItems = [];
    $scope.itineraries = [];
    $scope.globalStorage = [];
    $scope.itineraryCount = {};
    $scope.chunkData;
    $scope._ = _;
    $scope.util = sharedFactory;
    $scope.events = [];
    $scope.region = getRegion();
    /*Get routePath details*/
    var url = $location.path().split('/');
    $scope.firstParameter = url[2];
    getItineraryCount($scope.stateParam);
    getEvents($scope.stateParam);
    /*********Load Itinerary on page Load**************/
    getTourByState($scope.stateParam,$scope.categoryParam);

    function getTourByState(_state,_category) {
        if((_state != undefined && _state != null) && _category == undefined){
            if($scope.firstParameter  == 'list'){
                $scope.itineraries = indiaTourService.getTourByState(_state);
                $scope.globalStorage = indiaTourService.getTourByState(_state);
            }
            else{
                var loadedResult = [];
                var resultArray = indiaTourService.getTourByState(_state);
                resultArray.$loaded().then(function(data){
                    data.forEach(item =>{
                        loadedResult.push(item);
                        $scope.chunkData = chunkBuilder(loadedResult,2);
                    });
                });
            }
        }
        if((_state != undefined && _state != null) && (_category != undefined && _category != null)){
            var loadedResult = [];

            if(_category == 'tribal'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Tribal Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "Tribal Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Tribal Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'temple'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Temple Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "Temple Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Temple Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'city'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "City Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "City Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "City Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'beach'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Beach Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "Beach Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Beach Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'camping'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Camping Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "Camping Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Camping Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'heritage'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Heritage Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "Heritage Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Heritage Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'wildlife'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Wildlife Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "Wildlife Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Wildlife Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'craft'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Art & Craft Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "Art & Craft Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Art & Craft Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'cultural'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Cultural Tour"});
                            $scope.globalStorage = _.where(loadedResult,{ category : "Cultural Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Cultural Tour"}),2);
                        });
                    });
                }
            }
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'adventure'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Adventure Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Adventure Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'camping'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Camping Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Camping Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'trekking'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Trekking Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Trekking Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'wildlife'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Wildlife Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Wildlife Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'heritage'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Heritage Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Heritage Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'cultural'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Cultural Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Cultural Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'tribal'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Tribal Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Tribal Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'city'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "City Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "City Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'temple'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Temple Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Temple Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'festival'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Festival Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Festival Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'craft'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Art & Craft Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Art & Craft Tour"});
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all' && _category != undefined && _category == 'beach'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory();
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraries = _.where(loadedResult,{ category : "Beach Tour"});
                    $scope.globalStorage = _.where(loadedResult,{ category : "Beach Tour"});
                });
            });
        }
    };

    /*********Load Itinerary Count**************/
    function getItineraryCount(_state){
        if((_state != undefined && _state != null)){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByState(_state);
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraryCount.all = loadedResult.length;
                    $scope.itineraryCount.beach = _.where(loadedResult,{ category : "Beach Tour"}).length;
                    $scope.itineraryCount.tribal = _.where(loadedResult,{ category : "Tribal Tour"}).length;
                    $scope.itineraryCount.temple = _.where(loadedResult,{ category : "Temple Tour"}).length;
                    $scope.itineraryCount.heritage = _.where(loadedResult,{ category : "Heritage Tour"}).length;
                    $scope.itineraryCount.wildlife = _.where(loadedResult,{ category : "Wildlife Tour"}).length;
                    $scope.itineraryCount.craft = _.where(loadedResult,{ category : "Art & Craft Tour"}).length;
                    $scope.itineraryCount.cultural = _.where(loadedResult,{ category : "Cultural Tour"}).length;
                    $scope.itineraryCount.city = _.where(loadedResult,{ category : "City Tour"}).length;
                    $scope.itineraryCount.camping = _.where(loadedResult,{ category : "Camping Tour"}).length;
                    $scope.itineraryCount.adventure = _.where(loadedResult,{ category : "Adventure Tour"}).length;
                });
            });
        }
        if((_state != undefined && _state != null) && _state == 'all'){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByCategory('all');
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    $scope.itineraryCount.trekking = _.where(loadedResult,{ category : "Trekking Tour"}).length;
                    $scope.itineraryCount.camping = _.where(loadedResult,{ category : "Camping Tour"}).length;
                    $scope.itineraryCount.adventure = _.where(loadedResult,{ category : "Adventure Tour"}).length;
                    $scope.itineraryCount.temple = _.where(loadedResult,{ category : "Temple Tour"}).length;
                    $scope.itineraryCount.heritage = _.where(loadedResult,{ category : "Heritage Tour"}).length;
                    $scope.itineraryCount.craft = _.where(loadedResult,{ category : "Art & Craft Tour"}).length;
                    $scope.itineraryCount.cultural = _.where(loadedResult,{ category : "Cultural Tour"}).length;
                    $scope.itineraryCount.city = _.where(loadedResult,{ category : "City Tour"}).length;
                });
            });    
        }
    };


    function getEvents(_state){
        if(_state != undefined && _state != null){
            if($scope.firstParameter  == 'list'){
                $scope.itineraries = indiaTourService.getEventsByState(_state);
            }
            else{
                var loadedResult = [];
                var resultArray = indiaTourService.getEventsByState(_state);
                resultArray.$loaded().then(function(data){
                    data.forEach(item =>{
                        loadedResult.push(item);
                        $scope.chunkData = chunkBuilder(loadedResult,2);
                    });
                });
            }
        }
    };

    /***Split array of data into chunks to bind to gridView******/
    function chunkBuilder(arr, size) {
        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {
          newArr.push(arr.slice(i, i+size));
        }
        return newArr;
    };

    $scope.updateLike = function(itineraryCode,category,itineraryTitle){
        var _email = localStorage.getItem('email');
        var _signUpMode = localStorage.getItem('signUpMode');
        if(_email != undefined && (_signUpMode != undefined && _signUpMode == 'true') && $scope.stateParam != undefined){
            var linkMap = "/review/itinerary?state="+$scope.stateParam+"&category="+category+"&title="+itineraryTitle+"&code="+itineraryCode;
            var userSession = {
                name: _email,
                email: _email,
                link: linkMap,
                timestamp: new Date().toDateString()
            };
            indiaTourService.updateItineraryLikes(userSession);
        }
        else{
            alert('Please log-in!');
            return;
        }
    };

    function getRegion(){
        if($scope.stateParam == 'odisha' || $scope.stateParam == 'sikkim' || $scope.stateParam == 'mizoram' 
            || $scope.stateParam == 'nagaland' || $scope.stateParam == 'assam' || $scope.stateParam == 'arunachal')
            return 'east';
        if($scope.stateParam == 'gujarat' || $scope.stateParam == 'rajasthan' || $scope.stateParam == 'chandigarh' 
            || $scope.stateParam == 'punjab')
            return 'west';
        if($scope.stateParam == 'delhi' || $scope.stateParam == 'uttarakhand' || $scope.stateParam == 'himanchal-pradesh' 
            || $scope.stateParam == 'jammu-kashmir')
            return 'north';
        if($scope.stateParam == 'tamil-nadu' || $scope.stateParam == 'kerela' || $scope.stateParam == 'telangana' 
            || $scope.stateParam == 'karnataka' || $scope.stateParam == 'maharastra' || $scope.stateParam == 'goa' 
            || $scope.stateParam == 'puducherry')
            return 'south';
        else
            return 'north';
    };
  
    $('#state_mobileview').val($scope.stateParam);
    $scope.chkState = $scope.stateParam;
    $scope.filterByState = function(){
        var selectedState = $('#state_mobileview').val();
        if(selectedState != ''){
            window.location.href = '/view/list?state=' + selectedState;
        }
    };
    if($scope.categoryParam != ''){
        $('#category_mobileview').val($scope.categoryParam);
        $scope.chkCategory = $scope.categoryParam;
    }
    $scope.filterByCategory = function(){
        var selectedCategory = $('#category_mobileview').val();
        if(selectedCategory != '' && $scope.stateParam != ''){
            window.location.href = '/view/list?state=' + $scope.stateParam + '&category=' + selectedCategory;
        }
        if(selectedCategory == '' && $scope.stateParam != ''){
            window.location.href = '/view/list?state=' + $scope.stateParam;
        }
    };

    $scope.orderByHits = function(){
        var _orderBy = $('#state_webview').val();
        if(_orderBy != '' && _orderBy == 'asc'){
            $scope.itineraries = _.sortBy($scope.itineraries,'hits');
        }
        if(_orderBy != '' && _orderBy == 'desc'){
            $scope.itineraries = _.sortBy($scope.itineraries,'hits').reverse();
        }
    };

    $scope.filterByDuration = function(){
        var duration = $('#ddlDuration').val();
        $scope.itineraries = _.filter($scope.globalStorage, function(obj) {
            var durationArr = obj.duration.split(' ');
            var nights =  parseInt(durationArr[0]);
            var days =  parseInt(durationArr[3]);
            if(duration == undefined || duration == '') 
                return obj;
            if(parseInt(duration) == 7 && days <= parseInt(duration)) 
                return obj;
            if(parseInt(duration) == 15 && nights >= 7 && days <= parseInt(duration)) 
                return obj;
            if(parseInt(duration) > 15 && days >= parseInt(duration)) 
                return obj;
        });
    };

    $scope.isNumberKey = function(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }

    $scope.enquiry = function(){
        if($('#startDt').val() == '' || $scope.enquiry.startDt == undefined){
            $('#startDt').focus();
            $('#startDt').css({'border-color':'red'});
            return false;
        }
        if($('#endDt').val() =='' || $scope.enquiry.endDt == undefined){
            $('#endDt').focus();
            $('#endDt').css({'border-color':'red'});
            return false;
        }
        if($('#fullname').val() =='' || $scope.enquiry.fullname == undefined){
            $('#fullname').focus();
            $('#fullname').css({'border-color':'red'});
            return false;
        }
        if($('#email').val() =='' || $scope.enquiry.email == undefined){
            $('#email').focus();
            $('#email').css({'border-color':'red'});
            return false;
        }
        if($('#adultCount').val() =='' || $scope.enquiry.adultCount == undefined){
            $('#adultCount').focus();
            $('#adultCount').css({'border-color':'red'});
            return false;
        }
        else {
            var enquiry = { 
                name: $scope.enquiry.fullname,
                email: $scope.enquiry.email,
                phone: ($scope.enquiry.phone == '' || $scope.enquiry.phone == undefined)? 'NA': $scope.enquiry.phone,
                members:{
                    adultCount: $scope.enquiry.adultCount,
                    childCount: ($scope.enquiry.childCount == '' || $scope.enquiry.childCount == undefined)? 0 :$scope.enquiry.childCount,
                    infantCount: ($scope.enquiry.infantCount == '' || $scope.enquiry.infantCount == undefined)? 0: $scope.enquiry.infantCount
                },
                startDt: $scope.enquiry.startDt.toDateString(),
                endDt: $scope.enquiry.endDt.toDateString(),
                timestamp: new Date().toDateString()
            };
            indiaTourService.submitUserEnquiry(enquiry)
            .then(function(){
                alert('Enquiry submitted successfully!');
                $('#fullname').val('');
                $('#fullname').css({'border-color':'#8c8585'});
                $('#email').val('');
                $('#email').css({'border-color':'#8c8585'});
                $('#startDt').val('');
                $('#startDt').css({'border-color':'#8c8585'});
                $('#endDt').val('');
                $('#endDt').css({'border-color':'#8c8585'});            
                $('#phone').val('');
                $('#phone').css({'border-color':'#8c8585'});       
            })
            .catch(function(err){
                alert(err);
            });
        }
    };

    $scope.startOpened = false;
    $scope.endOpened = false;
    $scope.openStartDt = function() {
        $scope.startOpened = true;
    };

    $scope.openEndDt = function() {
        $scope.endOpened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
});