import '../components/HeaderContainer'
import Welcome from '../pages/Welcome'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Dashboard from '../pages/Dashboard'
export let enrutadorApp = [
    {
        element: <Welcome/>,
        path:'/' 
    },
    {
        element: <Login/>,
        path: '/login'
    },
    {
        element: <Register/>,
        path: '/register'
    },
    {
        element: <Dashboard/>,
        path:'/dashboard'

    }
]