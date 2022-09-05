import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';

const LeftNav = () => {
   const userData = useSelector((state) => state.userReducer);
  let pathname = window.location.pathname;
  useEffect(() => {
    // eslint-disable-next-line
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  return (
    <aside className="left-nav-container">
      <div className="icons">
        <nav className="icons-bis">
          <Link
            to="/home"
            className={`${pathname.match('/home') ? 'active-left-nav' : ''}`}
          >
            <HomeRoundedIcon className="iconsSVG" />
          </Link>
          <br />
          <Link
            to="/profil"
            className={`${pathname.match('/profil') ? 'active-left-nav' : ''}`}
          >
            <Person2RoundedIcon className="iconsSVG" />
          </Link>
          <br />
          <Link
            to="/trending"
            className={`${
              pathname.match('/trending') ? 'active-left-nav' : ''
            }`}
          >
            <RocketRoundedIcon className="iconsSVG" />
          </Link>
          <br />
          {userData.isAdmin === true && (
            <Link
              to="/dashboard"
              className={`${
                pathname.match('/dashboard') ? 'active-left-nav' : ''
              }`}
            >
              <DashboardIcon className="iconsSVG" />
            </Link>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default LeftNav;
