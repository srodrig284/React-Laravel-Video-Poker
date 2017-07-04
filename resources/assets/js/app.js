
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

import React from "react"
import { render } from "react-dom"
/**
 * Loading React routes from routes.
 */
import myroutes from "./config/routes";

render(
    myroutes,
    document.getElementById('example')
)

