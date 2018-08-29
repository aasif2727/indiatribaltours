angular.module('indiaTours').factory("sharedFactory", function ($sce) {
    /*******************************************************/
    /*common functions shared between different controllers*/
    /*******************************************************/
    var dataFactory = {};

    dataFactory.addCommas = function (nStr) {
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
    };

    dataFactory.rating = function (starVal) {
        if(Math.round(starVal) < 0){
            return 1;
        }
        else{
            return Math.round(starVal);
        }
    };

    dataFactory.camelCase = function (text) {
        if(text == undefined){
            return;
        }
        return text.replace(/(&)?([a-z])([a-z]{2,})(;)?/ig,
            function (all, prefix, letter, word, suffix) {
            if (prefix && suffix) {
                return all;
            }
            return letter.toUpperCase() + word.toLowerCase();
        });
    };

    dataFactory.formatItinerary = function (text) {
        var colorText = text.slice(0, 6);
        var htmlbuilder = '<span style="color:orange;font-weight:bold">'+ colorText +'</span>';
        var remainingText = text.slice(6, text.length);
        return htmlbuilder + remainingText;
    };  

    dataFactory.formatDate = function (dateValue) {
        var date = new Date(parseInt(dateValue.substr(6)));
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        return (month > 9 ? month : '0' + month + '/' + (day > 9 ? day : '0' + day) + '/' + year);
    }

    dataFactory.formatTimeSimple = function (timeValue) {
        d = Number(timeValue);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
    }


    dataFactory.formatTime = function (secs) {
        var format = "hh:mm:ss";
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = Math.floor(secs - (hr * 3600) - (min * 60));

        if (hr < 10) { hr = "0" + hr; }
        if (min < 10) { min = "0" + min; }
        if (sec < 10) { sec = "0" + sec; }
        if (hr) { hr = "00"; }

        if (format != null) {
            var formatted_time = format.replace('hh', hr);
            formatted_time = formatted_time.replace('h', hr * 1 + ""); // check for single hour formatting
            formatted_time = formatted_time.replace('mm', min);
            formatted_time = formatted_time.replace('m', min * 1 + ""); // check for single minute formatting
            formatted_time = formatted_time.replace('ss', sec);
            formatted_time = formatted_time.replace('s', sec * 1 + ""); // check for single second formatting
            return formatted_time;
        } else {
            return hr + ':' + min + ':' + sec;
        }
    };

    dataFactory.boldText = function (searchText,text) {
        var htmlText;
        var regex = RegExp(searchText, 'gi');
        var replacement = '<strong style="color:yellow">$&</strong>';
        htmlText = $sce.trustAsHtml(text.replace(regex, replacement));
        return htmlText;
    };

    dataFactory.generateFontSize = function() {
        var arr = ['2', '6', '10', '14', '16', '12', '18', '20'];
        return arr[Math.floor(Math.random() * arr.length)];
    };

    dataFactory.trimStringToFit = function (strBody,size) {
        if(strBody == undefined){
            return;
        }
        return strBody.substring(0, size)+'...';
    };

    dataFactory.convertToK = function (num) {
        if(num == undefined){
            return;
        }
        if(num < 1000){
            return num;
        }
        else{
            return (num/1000).toFixed(num % 1000 != 0)+'k';
        }
    };

    dataFactory.formatDuration = function(_actualDuration){
        if(_actualDuration == undefined){
            return;
        }
        var arr = _actualDuration.split(' ');
        return arr[0] + arr[1].substr(0,1).toUpperCase() + ' ' + arr[2] + ' ' + arr[3] + arr[4].substr(0,1).toUpperCase();
    };

    return dataFactory;
});