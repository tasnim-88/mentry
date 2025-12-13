import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PublicLessons from "../Pages/PublicLessons/PublicLessons";
import LessonDetails from "../Pages/LessonDetails/LessonDetails";
import AddLesson from "../Pages/Dashboard/User/AddLesson";
import MyLessons from "../Pages/Dashboard/User/MyLessons";
import Pricing from "../Pages/Pricing/Pricing";
import DashboardLayout from "../Layouts/DashboardLayout";
import AdminDashboard from "../Pages/Dashboard/DashboardHome/AdminDashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import MyFavorites from "../Pages/Dashboard/User/MyFavorites";
import UserProfile from "../Pages/Dashboard/User/UserProfile";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageLessons from "../Pages/Dashboard/Admin/ManageLessons";
import ReportedLessons from "../Pages/Dashboard/Admin/ReportedLessons";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import UpdateLesson from "../Pages/Dashboard/User/UpdateLesson";
import Error404 from "../Components/Eerror404/Error404";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Payment/PaymentCancelled";
import PrivateRoute from "./PrivateRoute";
import FreeOnlyRoute from "./FreeOnlyRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { 
                path: '/publiclessons', 
                element: 
                    <PrivateRoute>
                        <PublicLessons />
                    </PrivateRoute> 
            },
            { 
                path: '/lessondetails', 
                element: 
                    <PrivateRoute>
                        <LessonDetails />
                    </PrivateRoute> 
            },
            {
                path: '/pricing',
                element:
                    <PrivateRoute>
                        <FreeOnlyRoute>
                            <Pricing />
                        </FreeOnlyRoute>
                    </PrivateRoute>
            },
            { path: '/payment/success', Component: PaymentSuccess },
            { path: '/payment/cancel', Component: PaymentCancelled },
            {
                path: 'updatelesson', 
                element:
                    <PrivateRoute>
                        <UpdateLesson />
                    </PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
            { index: true, Component: DashboardHome },
            // Admin routes
            { path: 'admin/manageusers', Component: ManageUsers },
            { path: 'admin/managelessons', Component: ManageLessons },
            { path: 'admin/reportedlessons', Component: ReportedLessons },
            { path: 'admin/adminprofile', Component: AdminProfile },
            // User routes
            { path: 'addlesson', Component: AddLesson },
            { path: 'mylessons', Component: MyLessons },
            { path: 'myfavorites', Component: MyFavorites },
            { path: 'profile', Component: UserProfile },
        ]
    },

    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    },
    {
        path: '/*', Component: Error404
    }
])