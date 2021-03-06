import * as React from 'react';
import {RouteProps} from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DashboardView from './views/dashboard';
import HomeView from './views/home';
import EditorView from './views/editor';
import ScoutView from './views/scout';

export interface IAppRoute {
  name: string;
  to: string;
  group: number;
  component: (routeProps: RouteProps) => React.ReactElement;
  icon?: React.ReactElement;
  visible: boolean;
}

const routes: IAppRoute[] = [
  {
    name: 'Home',
    icon: <HomeIcon/>,
    to: '/',
    group: 0,
    component: (routeProps: RouteProps) => <HomeView/>,
    visible: true
  },
  {
    name: 'Schema Editor',
    icon: <OpenInNewIcon/>,
    to: '/editor',
    group: 0,
    component: (routeProps: RouteProps) => <EditorView/>,
    visible: true
  },
  {
    name: 'Scouting Mode',
    icon: <DataUsageIcon/>,
    to: '/scouting',
    group: 0,
    component: (route: RouteProps) => <ScoutView/>,
    visible: true
  },
  {
    name: 'Data Dashboard',
    icon: <DashboardIcon/>,
    to: '/dashboard',
    group: 0,
    component: (route: RouteProps) => <DashboardView/>,
    visible: true
  },
  {
    name: 'Contribute',
    icon: <GitHubIcon/>,
    to: '/contribute',
    group: 1,
    component: (routeProps: RouteProps) => <div>Want to contribute? Visit the repository <a className='inline-link' href='https://github.com/kyle-flynn/universal-scouter'>here</a></div>,
    visible: true
  }
];

export default routes;