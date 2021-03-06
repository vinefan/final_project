import Vue from 'vue'
import Router from 'vue-router';
import BasePage from './components/BasePage'
import UserPage from './components/UserPage'
import Login from './components/LoginPage/Login'
import Register from './components/RegisterPage/Register'
import Verify from './components/CommonComponents/Verify'
import EmailCheck from './components/RegisterPage/EmailCodeCheck'


Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: BasePage
        },{
            path: '/center',
            name: 'center',
            component: UserPage
        },{
            path: '/login',
            name: 'login',
            component: Login
        },{
            path: '/register',
            name: 'register',
            component: Register
        },{
            path: '/verify',
            name: 'verify',
            component: Verify,
            // props: true
        },{
            path: '/emailcheck',
            name: 'emailcheck',
            component: EmailCheck,
        }
    ]
})