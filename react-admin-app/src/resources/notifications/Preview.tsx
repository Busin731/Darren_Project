import * as React from 'react';
import ShowMoreText from '../../utils/showMoreText';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { NotificationState } from '../../admins/type';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '13px'
},
});


const Preview = (props : any) => {
    const classes = useStyles();
    const imageUrl = useSelector((state: NotificationState) => state.imageUrl)
    const { title, body, buttonLabel,basePath,record } = props;
    const [id, setId] = useState(0);

    React.useEffect(() => {
      if(record!== undefined){
        setId(record.id);
      }
      else{
        setId(0);
      }
    },[record])

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
                    {
                      buttonLabel.trim().length>0&&(
                        <Button
                            component={Link}
                            disabled={record === undefined}
                            color = {'primary'}
                            className={classes.link}
                            to={{ pathname: `${basePath}/${id}` }}
                        >
                          {buttonLabel.trim()}
                        </Button>
                      )
                    }
                    
                </CardContent>
            </Card>
    )
}

export default Preview;

