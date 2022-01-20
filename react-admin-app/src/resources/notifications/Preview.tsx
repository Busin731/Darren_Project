import * as React from 'react';
import ShowMoreText from '../../utils/showMoreText';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ImageField } from 'react-admin';

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
  }
});

const Preview = (props: any) => {
    const classes = useStyles();
    const { record } = props;
    return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { record.title }
                    </Typography>
                    <ShowMoreText
                        lines={3}
                        more={<div className={ classes.showButton }>
                                Learn More
                            </div>}
                        less={<div className={ classes.showButton }>
                                Show Less
                        </div>}
                        anchorClass=''
                        keepNewLines={true}
                    >
                    { record.body }
                    </ShowMoreText>
                    <ImageField  className={classes.img} source='image'/>
                </CardContent>
            </Card>
    )
}

export default Preview;

