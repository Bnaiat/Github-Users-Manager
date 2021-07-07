import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import User from "../pages/User";

import PAGE_ROUTES from "../constants/routes";
import GuestGuard from "../components/GuestGuard";
import AuthGurad from "../components/AuthGuard";
import { DashboardContextProvider } from "../context/DashboardContext";

export default [
  {
    path: PAGE_ROUTES.PAGE_SIGN_IN,
    exact: true,
    page: SignIn,
    guard: GuestGuard,
    context: undefined,
  },
  {
    path: PAGE_ROUTES.PAGE_SIGN_UP,
    exact: false,
    page: SignUp,
    guard: GuestGuard,
    context: undefined,
  },
  {
    path: PAGE_ROUTES.PAGE_DASHBOARD,
    exact: false,
    page: Dashboard,
    guard: AuthGurad,
    context: DashboardContextProvider,
  },
  {
    path: PAGE_ROUTES.PAGE_SEARCH,
    exact: false,
    page: Search,
    guard: AuthGurad,
    context: DashboardContextProvider,
  },
  {
    path: PAGE_ROUTES.PAGE_FAVORITES,
    exact: false,
    page: Favorites,
    guard: AuthGurad,
    context: DashboardContextProvider,
  },
  {
    path: PAGE_ROUTES.PAGE_USER,
    exact: false,
    page: User,
    guard: AuthGurad,
    context: DashboardContextProvider,
  },
];
