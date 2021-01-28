/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/index",
    name: "index",
    rtlName: "דף מידע",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "רשימת טבלאות",
    icon: "content_paste",
    component: TableList,
    layout: "/rtl"
  },
  {
    path: "/AddAsset",
    name: "AddAsset",
    rtlName: "הוספת נכס",
    icon: Person,
    component: UserProfile,
    layout: "/rtl"
  },
  {
    path: "/EditAsset",
    name: "EditAsset",
    rtlName: "עריכת נכס",
    icon: LibraryBooks,
    component: Typography,
    layout: "/rtl"
  },
  {
    path: "/asset",
    name: "Asset",
    rtlName: "הצגת נכס",
    icon: BubbleChart,
    component: Icons,
    layout: "/rtl"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "מפות",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "התראות",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/rtl"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: " שמאל לימין דשבורד",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "שדרג למשהו",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },
];

export default dashboardRoutes;
