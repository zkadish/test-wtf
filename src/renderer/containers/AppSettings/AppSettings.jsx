import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import routes from '../../constants/routes';
import UserSettings from './UserSettings';
import PasswordSettings from './PasswordSettings';
import SalesCoachSettings from './SalesCoachSettings';
import CompanySettings from './CompanySettings';
import AdminSettings from './AdminSettings';
import BillingSettings from './BillingSettings';
import CalendarSettings from './CalendarSettings';
import CrmSettings from './CrmSettings';
import VideoPlatformSettings from './VideoPlatformSettings';

import classes from './AppSettings.styles';

const AppSettings = () => {
  return (
    <Box sx={{ ...classes.root }}>
      <Box className="settingsMenu">
        <MenuList>
          <Box className="title">Settings</Box>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.USER_SETTINGS}`}>
              <Box className="subTitle">User</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">First Name</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Last Name</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Email</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Phone Number</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Timezone</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.PASSWORD_SETTINGS}`}>
              <Box className="subTitle">Password</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Reset</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Two Factor</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.SALES_COACH_SETTINGS}`}>
              <Box className="subTitle">Sales Coach</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Font</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Color</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">transparency</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">timer</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.COMPANY_SETTINGS}`}>
              <Box className="subTitle">Company</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">HQ Location</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.ADMIN_SETTINGS}`}>
              <Box className="subTitle">Admin</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Users</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.BILLING_SETTINGS}`}>
              <Box className="subTitle">Billing</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Address</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Credit Card</Box>
          </MenuItem>
          <Box className="title">Integrations</Box>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.CALENDAR_SETTINGS}`}>
              <Box className="subTitle">Calendar</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Google</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">OutLook</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.CRM_SETTINGS}`}>
              <Box className="subTitle">CRM</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">SalesForce</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">HubSpot</Box>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Link to={`${routes.VIDEO_PLATFORM_SETTINGS}`}>
              <Box className="subTitle">Video Platform</Box>
            </Link>
          </MenuItem>
          <MenuItem sx={{ ...classes.menuItem }}>
            <Box className="option">Zoom</Box>
          </MenuItem>
        </MenuList>
      </Box>
      <Box className="settings">
        <Paper sx={{ ...classes.header }} elevation={2}>
          Header
        </Paper>
        <Paper sx={{ ...classes.calls }}>
          <Paper sx={{ ...classes.paper }}>
            <Switch>
              <Route path={routes.VIDEO_PLATFORM_SETTINGS}>
                <VideoPlatformSettings />
              </Route>
              <Route path={routes.CRM_SETTINGS}>
                <CrmSettings />
              </Route>
              <Route path={routes.CALENDAR_SETTINGS}>
                <CalendarSettings />
              </Route>
              <Route path={routes.BILLING_SETTINGS}>
                <BillingSettings />
              </Route>
              <Route path={routes.ADMIN_SETTINGS}>
                <AdminSettings />
              </Route>
              <Route path={routes.COMPANY_SETTINGS}>
                <CompanySettings />
              </Route>
              <Route path={routes.SALES_COACH_SETTINGS}>
                <SalesCoachSettings />
              </Route>
              <Route path={routes.PASSWORD_SETTINGS}>
                <PasswordSettings />
              </Route>
              <Route path={[routes.APP_SETTINGS, routes.USER_SETTINGS]}>
                <UserSettings />
              </Route>
            </Switch>
            {/* <SaveCancel /> */}
          </Paper>
        </Paper>
      </Box>
    </Box>
  );
};

export default AppSettings;
