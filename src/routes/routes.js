import config from "~/config";

import Home from "~/pages/Home";
import User from "~/pages/User";
import Admin from "~/pages/Admin";
import ManageUser from "~/pages/Admin/ManageUser";
import ManageQuiz from "~/pages/Admin/ManageQuiz";
import ManageQuestion from "~/pages/Admin/ManageQuestion";
import Login from "~/pages/Login";
import SignUp from "~/pages/SignUp";
import ListQuiz from "~/pages/User/ListQuiz";
import NotFound from "~/pages/NotFound";
import DetailQuiz from "~/pages/User/DetailQuiz";

import AdminLayout from "~/layouts/AdminLayout";

const publicRoutes = [
  // Layout default
  { path: config.routes.home, component: Home },
  { path: config.routes.user, component: ListQuiz },

  // Layout admin
  { path: config.routes.admin, component: Admin, layout: AdminLayout },
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

  // None layout
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.signup, component: SignUp, layout: null },
  { path: config.routes.notFound, component: NotFound, layout: null },
  { path: config.routes.detailQuiz, component: DetailQuiz, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
