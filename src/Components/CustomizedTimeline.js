import './CustomizedTimeline.css';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import star from '../assets/star.png';
import gold from '../assets/star-gold.png';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useDispatch} from 'react-redux';
import { toggleFavourite } from '../redux/actions/rocketLaunchesActions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline({ launches, favourites }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();


  const toggleFavAction = (id) => {
    dispatch(toggleFavourite(id));
  };

  return (
    <div>
      <Timeline align="alternate">
        {launches.map((launch) => (
          <TimelineItem onClick={() => history.push(`/launches/${launch.id}`)} key={launch.id}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Launch date: {launch.window_start}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <img
                alt={'click'}
                className={'image'}
                src={launch.image || 'https://img.icons8.com/plasticine/2x/rocket.png'}
              />
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={4} className={`item ${classes.paper}`}>
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavAction(launch.id);
                  }}
                  alt={'favourite'}
                  className={'star'}
                  src={favourites.includes(launch.id) ? gold : star}
                />
                <Typography variant="h5" component="h1">
                  {launch.name}
                </Typography>
                <Typography>{launch.status.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
