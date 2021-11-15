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
    document.getElementById("changeColor").addEventListener("click", eingabefarbe);
    document.getElementById("changeColor").addEventListener("click", farbegreen);
}
function changeColor() {
    console.log("color changed")
    document.body.style.background = '#4B946A';
    $('body').css('background', '#ccc');

}
window.addEventListener = {};
window.addEventListener("load",function() { changeColor('red') });

function farbegreen() {
document.bgColor = "#4B946A";
document.getElementsByTagName("body")[0].style.backgroundColor = document.bgColor;
document.form1.bgfarbe.value = document.bgColor;
}
function eingabefarbe() {
    console.log("color changed");

document.getElementsByTagName("body")[0].style.backgroundColor=document.form2.farbfeld.value;
console.log(document.getElementsByTagName("body")[0].style.backgroundColor=document.form2.farbfeld.value);
document.form1.bgfarbe.value=document.getElementsByTagName("body")[0].style.backgroundColor;
}

