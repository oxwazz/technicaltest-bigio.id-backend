import appIndex from './components/Index.vue'
import appLogin from './components/Login.vue'
import appAdmin from './components/Admin.vue'
import appSurveyor from './components/Surveyor.vue'

export const routes = [
    { path: '/', component: appIndex },
    { path: '/login', component: appLogin },
    { path: '/admin', component: appAdmin },
    { path: '/surveyor', component: appSurveyor },
]