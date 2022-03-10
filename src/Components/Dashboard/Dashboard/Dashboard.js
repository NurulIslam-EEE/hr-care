import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CampaignIcon from "@mui/icons-material/Campaign";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import GolfCourseOutlinedIcon from "@mui/icons-material/GolfCourseOutlined";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import DashNav from "../DashNav/DashNav";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const useStyle = makeStyles({
    linkItem: {
      margin: "0 0 0 30px !important",
    },
    dashLink: {
      display: "flex",
      alignItems: "center",
      color: "#fff",
      padding: "5px 0",
    },
    dashIcon: {
      marginTop: "-1px !important",
      marginRight: "8px",
      color: "#fff",
    },
  });

  const { linkItem, dashLink, dashIcon } = useStyle();

  const drawer = (
    <div style={{ background: "rgb(1 87 138)", color: "white", height: "1000px" }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          flexGrow: 2,
          padding: "11px",
          textAlign: "center",
          background: "rgb(1 87 138)",
          color: "#fff",
          fontWeight: "700",
          borderBottom: "2px solid #fff",
          marginBottom: "20px",
        }}
      >
        <Link style={{ color: "white" }} to="/home"> HR CARE</Link>
      </Typography>
      <Box sx={{ pl: 2 }}>
        <Typography variant="h6">Main</Typography>
        <List className={linkItem}>
          <Link className={dashLink} to="/dashboard">
            <DashboardOutlinedIcon className={dashIcon} />
            Dashboard
          </Link>
        </List>
      </Box>
      <Divider />

      <Box sx={{ pl: 2 }}>
        {/* Employees */}
        <Typography variant="h6">Employees</Typography>
        <List className={linkItem}>

          <Link className={dashLink} to="/dashboard/myinfo">
            <AccountBoxOutlinedIcon className={dashIcon} />
            My Information
          </Link>

          <Link className={dashLink} to="/dashboard/attendance">
            <CoPresentOutlinedIcon className={dashIcon} />
            Attendance
          </Link>

          <Link className={dashLink} to="/dashboard/announcements">
            <CampaignIcon className={dashIcon} />
            Announcement
          </Link>

          <Link className={dashLink} to="/dashboard/course">
            <GolfCourseOutlinedIcon className={dashIcon} />
            Courses
          </Link>
          <Link className={dashLink} to="/dashboard/leave">
            <ExitToAppOutlinedIcon className={dashIcon} />
            Leave
          </Link>
        </List>
      </Box>
      <Divider />

      {/* HRM */}
      <Box sx={{ pl: 2 }}>
        <Typography variant="h6">HRM</Typography>
        <List className={linkItem}>
          <Link className={dashLink} to="/dashboard/all_employees">
            <AccountBoxOutlinedIcon className={dashIcon} />
            All Employees
          </Link>
          <Link className={dashLink} to="/dashboard/task_assign">
            <AccountBoxOutlinedIcon className={dashIcon} />
            Task Assign
          </Link>
          <Link className={dashLink} to="/dashboard/id_card">
            <BadgeOutlinedIcon className={dashIcon} />
            ID Card
          </Link>

          <Link className={dashLink} to="/dashboard/manage_attendance">
            <CoPresentOutlinedIcon className={dashIcon} />
            Attendance
          </Link>

          <Link className={dashLink} to="/dashboard/LeaveRequests">
            <ExitToAppOutlinedIcon className={dashIcon} />
            Leave Requests
          </Link>

          <Link className={dashLink} to="/dashboard/holiday">
            <HolidayVillageOutlinedIcon className={dashIcon} />
            Holiday
          </Link>

          <Link className={dashLink} to="/dashboard/add_announcement">
            <CampaignIcon className={dashIcon} />
            Add Announcement
          </Link>

          <Link className={dashLink} to="/dashboard/add_course">
            <GolfCourseOutlinedIcon className={dashIcon} />
            Add Course
          </Link>

          <Link className={dashLink} to="/dashboard/salary_sheet">
            <ListAltIcon className={dashIcon} />
            Salary Sheet
          </Link>

          <Link className={dashLink} to="/dashboard/make_admin">
            <AdminPanelSettingsIcon className={dashIcon} />
            Make Admin
          </Link>
        </List>
      </Box>

      <Divider />
      {/* Performances */}
      <Box sx={{ pl: 2 }}>
        <Typography variant="h6">Performances</Typography>
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ background: "rgb(1 87 138)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <DashNav />
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, mt: 8, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
