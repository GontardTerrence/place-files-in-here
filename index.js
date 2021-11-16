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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    document.getElementById("changeColor").addEventListener("click", changeColor);
   document.getElementById("range").addEventListener("onchange", range);
//    document.getElementById("changeColor").addEventListener("click", farbegreen);
}
function changeColor() {
    console.log(document.page1.backgroundColor);
//    document.body.style.background = '#4B946A';
//   document.getElementById("page1")
//    document.body.background = background-color: #4B946A;
    if(target.id == "page1")
        {
          $("#page1 .page__background").css("background-color", "#4B946A");
        }
}
//window.addEventListener = {};
//window.addEventListener("load",function() { changeColor('red') });

//function farbegreen() {
//document.bgColor = "#4B946A";
//document.getElementsByClassName("page__background").style.backgroundColor = document.bgColor;
//document.form1.bgfarbe.value = document.bgColor;
//}

function eingabefarbe() {
    console.log("color changed");
    var elements = document.getElementsByClassName('page__background'); // get all elements
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = document.form2.farbfeld.value;
        }
    document.getElementById("test3").style.backgroundColor=document.form2.farbfeld.value;
document.getElementsByClassName("page__background").style.backgroundColor=document.form2.farbfeld.value;
console.log(document.getElementsByClassName("page__background").style.backgroundColor=document.form2.farbfeld.value);
    document.getElementsByClassName("page__background").style.opacity=document.hans.opac.value;
//document.form1.bgfarbe.value=document.getElementsByTagName("body")[0].style.backgroundColor;
}
