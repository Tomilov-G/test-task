import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/404";
import { Layout } from "./layout/Layout";
import { ManageTypesPage } from "./pages/ManageTypesPage";
import { AllMachinesPage } from "./pages/AllMachinesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <AllMachinesPage /> },
      { path: "manage-types", element: <ManageTypesPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
