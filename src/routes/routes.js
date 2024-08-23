import config from "~/config";

import Home from "~/pages/Home";
import Admin from "~/pages/Admin";
import User from "~/pages/User";
import NotFound from "~/pages/NotFound";

import AdminLayout from "~/layouts/AdminLayout";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.admin, component: Admin, layout: AdminLayout },
  { path: config.routes.user, component: User },
  { path: config.routes.notFound, component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
