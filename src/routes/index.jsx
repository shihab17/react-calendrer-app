import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import ErrorBoundary from "../components/UI/ErrorBoundary/ErrorBoundary";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorBoundary/>
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default routes;