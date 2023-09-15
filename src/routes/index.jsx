import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default routes;