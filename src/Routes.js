import Home from './controllers/Home'
import Contact from './controllers/Contac'
const routes=[
    {
        path:'/',
        controller:Home
    },
    {
        path:'/contact',
        controller:Contact
    }
]
export default routes