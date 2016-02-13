/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        fixWrapHeight ();
        jQuery('.social-meida').fadeIn(400,function(){
              jQuery('.app-logo').fadeIn(600,function(){
                 jQuery('.about-page').fadeIn(400);
                // jQuery('#debug').html(jQuery('body').css('background-image'));
                 //alert(jQuery('body').css('background-image'));

              });
        });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
      //  var parentElement = document.getElementById(id);
       // var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        //console.log('Received Event: ' + id);
    }
};
function fixWrapHeight () {
    var h =  window.screen.availHeight;
    var w =  window.screen.availWidth;
    var ratio = window.devicePixelRatio || 1;
    var w = screen.width * ratio;
    var h = screen.height * ratio;
    //document.getElementById('deviceready').style.height = (h) + "px";
    //document.getElementById('deviceready').style.width = (w) + "px";
    //document.getElementById('app').style.height = (h) + "px";
    //alert(h);
    //jQuery('#debug').html(jQuery('.app').css('background-image')+ ' Height: '+h );
    //document.getElementById('app').style.width = (w) + "px";
}
function fixHeight() {

   var h =  window.screen.availHeight;
   document.getElementById('mainframe').height = (h) + "px";
   document.getElementById('app').style.height = (h) + "px";
}
window.addEventListener("resize", function() {
    // Get screen size (inner/outerWidth, inner/outerHeight)
    fixWrapHeight ();
}, false);
jQuery(document).ready(function(){
    jQuery(window).on("orientationchange",function(event){fixWrapHeight ();});

});
