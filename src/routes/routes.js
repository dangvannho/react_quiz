import config from "~/config";

import Home from "~/pages/Home";
import User from "~/pages/User";
import Admin from "~/pages/Admin";
import ManageUser from "~/pages/Admin/ManageUser";
import ManageQuiz from "~/pages/Admin/ManageQuiz";
import ManageQuestion from "~/pages/Admin/ManageQuestion";
import Login from "~/pages/Login";
import SignUp from "~/pages/SignUp";
import NotFound from "~/pages/NotFound";

import AdminLayout from "~/layouts/AdminLayout";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.admin, component: Admin, layout: AdminLayout },
  { path: config.routes.user, component: User },
  {
    path: config.routes.manageUser,
    component: ManageUser,
    layout: AdminLayout,
  },
  {
    path: config.routes.manageUser,
    component: ManageUser,
    layout: AdminLayout,
  },
  {
    path: config.routes.manageQuiz,
    component: ManageQuiz,
    layout: AdminLayout,
  },
  {
    path: config.routes.manageQuestion,
    component: ManageQuestion,
    layout: AdminLayout,
  },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.signup, component: SignUp, layout: null },
  { path: config.routes.notFound, component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
