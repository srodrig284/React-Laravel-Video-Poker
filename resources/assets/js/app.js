
// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
// Grabs the Routes
//var routes = require("./config/routes");
import myroutes from "./config/routes";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/*import Dashboard from './components/Dashboard';*/

/*const app = new myroutes;*/
console.log('myroutes = ', myroutes);
if (document.getElementById('example')) {
    ReactDOM.render(myroutes, document.getElementById('example'));
}