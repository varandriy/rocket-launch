import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunches } from '../redux/actions/rocketLaunchesActions';
import CustomizedTimeline from './CustomizedTimeline';
import './RocketLaunch.css';

export const RocketLaunch = () => {
  const dispatch = useDispatch();
  const launches = useSelector(state => state.launches.launches);
  const favourites = useSelector(state => state.launches.favourites);
  const [inputSearch, setInputSearch] = useState('');

  const launchesFromSearch = launches.filter((launch) => launch.name.toLowerCase().indexOf(inputSearch.toLowerCase()) > -1);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <div>
      <input placeholder={'search'} className={'input-search'} onChange={(e) => setInputSearch(e.target.value)}/>
      <CustomizedTimeline launches={launchesFromSearch} favourites={favourites}/>
    </div>
  );
};
