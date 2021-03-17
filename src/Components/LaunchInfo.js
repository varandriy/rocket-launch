import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import './LaunchInfo.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    width : '900px'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const LaunchInfo = () => {
  const launches = useSelector(state => state.launches.launches);
  const { id } = useParams();
  const launch = launches.find((launch) => launch.id === id);
  const classes = useStyles();
  const history = useHistory();

  if (!launch) {
    history.push('/');
    return null;
  }

  return (
    <div className={'main-container'}>
      <Button onClick={()=>history.goBack()} className={'back-btn'}>Back</Button>
      <Paper elevation={15} className={classes.paper}>
        {
          launch.image && <img align={'left'} className={'main-img'} src={launch.image} alt={''}/>
        }

        <h3 >
          {launch.name}
        </h3>
        <div>
          <div className={'title'}>Status description</div>
          {launch.status.description}
        </div>
        {
          launch.pad && <div>
            <Link target={'_blank'} href={launch.pad.wiki_url}>
              WikipediaLink
            </Link>
          </div>
        }
        {
          launch.mission && <div>
            <div className={'title'}>Mission description</div>
            {launch.mission.description}
          </div>
        }
        {launch.program && launch.program.length>0 && (<div>
          <h2>Programs description</h2>
          {
            launch.program.map((program, index) => (
              <div key = {index}>
                <div className={'title'}>{program.name}</div>
                {program.description}
              </div>
            ))
          }
        </div>)}
      </Paper>
    </div>
  );
};
