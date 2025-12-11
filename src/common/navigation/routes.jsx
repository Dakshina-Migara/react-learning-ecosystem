import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import RegisterForm from "../../pages/RegisterForm/RegisterForm";
import Student from "../../pages/Student/Student";

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: <Home />
    },
    {
        name: 'About',
        path: '/about',
        component: <About />
    },
    {
        name: 'RegisterForm',
        path: '/registerForm',
        component: <RegisterForm />
    },
    {
        name: 'Student',
        path: '/student',
        component: <Student />
    },
];
export default routes;