import React, { useRef, useState, useEffect } from 'react';
import { object, string, func, array } from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { Box, Tab, Tabs } from '@mui/material';

import SalesCoach from './SalesCoach';
import Templates from './Templates';
import Blocks from './Blocks';
import Elements from './Elements';
import BattleCards from './BattleCards';
import BattleCard from './BattleCard';
import BreadCrumbs from './BreadCrumbs';

import routes from '../../constants/routes';
import classes from './Frameworks.styles';

const Frameworks = (props) => {
  const {
    // getFrameworks,
    // setTemplates,
    // setActiveTemplate,
    // setBlocks,
    // setElements,
    activeTemplate,
    // templates,
    history,
  } = props;

  const sec = useRef(0); // 59
  const min = useRef(30); // 59
  const hour = useRef(0); // 24
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('00');
  const { path } = useRouteMatch();
  const [showTabs, setShowTabs] = useState(false);
  const [value, setValue] = useState(0);

  const onTabsChange = (e, tabIndex) => {
    setValue(tabIndex);
    switch (tabIndex) {
      case 1:
        history.push('/app/library/battle-cards');
        break;
      case 2:
        history.push('/app/library/talk-tracks');
        break;
      default:
        history.push('/app/library/templates');
    }
  };

  useEffect(() => {
    setShowTabs(history.location.pathname === routes.FRAMEWORKS);
  }, [history.location.pathname]);

  const countDown = () => {
    const counter = setInterval(() => {
      sec.current -= 1;

      if (sec.current === 0 && min.current === 0 && hour.current === 0) {
        clearInterval(counter);
      }

      if (sec.current < 0) {
        sec.current = 59; // reset seconds to init val 59
        min.current -= 1; // increment minutes
      }

      if (min.current < 0) {
        min.current = 59;
        hour.current -= 1; // increment hours
      }

      if (hour.current < 0) {
        hour.current = 0;
      }

      const s = sec.current < 10 ? `0${sec.current}` : `${sec.current}`;
      const m = min.current < 10 ? `0${min.current}` : `${min.current}`;
      const h = hour.current < 10 ? `0${hour.current}` : `${hour.current}`;

      setSeconds(s);
      setMinutes(m);
      setHours(h);
    }, 1000);

    return counter;
  };

  // useEffect(() => {
  //   // debugger
  //   getFrameworks(history)
  //     .then(response => {
  //       console.log(response);
  //       return response;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       debugger;
  //     });
  // }, []);

  return (
    <Box sx={{ ...classes.container }}>
      <Box className="leftCol">
        <Box className="salesCoach">
          {/* TODO: move this counter and header into <SalesCoach /> */}
          <Box className="titleBar">
            Sales Coach
            {activeTemplate && ` - ${activeTemplate.label}`}
          </Box>
          <Box className="duration">{`${hours}:${minutes}:${seconds}`}</Box>
          <Box className="callFramework">
            <SalesCoach />
          </Box>
        </Box>
      </Box>
      <Box className="rightCol">
        <AppBar sx={{ ...classes.appBar }} position="static">
          {!showTabs && (
            <Box className="breadCrumbs">
              <BreadCrumbs />
            </Box>
          )}
          {showTabs && (
            <Tabs
              value={value}
              onChange={onTabsChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Templates" />
              <Tab label="Battle Cards" />
              <Tab label="Talk Tracks" />
            </Tabs>
          )}
        </AppBar>
        <Paper sx={{ ...classes.paper }}>
          <Switch>
            <Route path={routes.BATTLE_CARD}>
              <BattleCard />
            </Route>
            <Route path={routes.BATTLE_CARDS}>
              <BattleCards />
            </Route>
            <Route path={routes.ELEMENTS}>
              <Elements />
            </Route>
            <Route path={routes.BLOCKS}>
              <Blocks />
            </Route>
            <Route exact path={[routes.FRAMEWORKS, routes.TEMPLATES]}>
              <Templates history={history} />
            </Route>
          </Switch>
        </Paper>
      </Box>
    </Box>
  );
};

Frameworks.propTypes = {
  activeTemplate: object, // eslint-disable-line
  // getFrameworks: func.isRequired,
  // setActiveTemplate: func.isRequired,
  // setBlocks: func.isRequired,
  // setElements: func.isRequired,
  // setTemplates: func.isRequired,
  templates: array.isRequired,  // eslint-disable-line
  history: object, // eslint-disable-line
};

export default Frameworks;
