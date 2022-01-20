import * as React from 'react';
import ShowMoreText from '../../utils/showMoreText';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { NotificationState } from '../../admins/type';

const useStyles = makeStyles({
  root: {
    width: '400px',
  },
  showButton: {
    marginTop: '13px',
    marginBottom: '13px',
  },
  img: {
      margin: '0px !important',
      '& img': {
          width: '360px',
          margin: '0px !important',
      }
  },
  rawImg: {
    width: '360px',
  }
});

const Preview = (props : any) => {
    const classes = useStyles();
    const imageUrl = useSelector((state: NotificationState) => state.imageUrl)
    const { title, body } = props;
    return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { title }
                    </Typography>
                    <ShowMoreText
                        lines={3}
                        more={<div className={ classes.showButton }>
                                Learn More
                            </div>}
                        less={<div className={ classes.showButton }>
                                Show Less
                        </div>}
                    >
                    { body }
                    </ShowMoreText>
                    {
                     <img  className={classes.rawImg}  src={imageUrl} alt=""/>
                    } 
                </CardContent>
            </Card>
    )
}

export default Preview;

