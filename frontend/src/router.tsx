import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import AppLayout from "./AppLayout";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
    {path:'/',
        Component:AppLayout,
        children: [
            {index:true, Component:Home},
            {path:'cart',Component:Cart},
            {path:'collection', Component:Collection},
            {path:'contact', Component:Contact},
            {path:'login', Component:Login},
            {path:'orders', Component:Orders},
            {path:'place-order', Component:PlaceOrder},
            {path:'products/:productId', Component:Product},
            {path:'*', Component:NotFoundPage}
        ]
    }
])