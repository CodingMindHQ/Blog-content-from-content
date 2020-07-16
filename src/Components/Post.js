import React from 'react'
import marked from 'marked'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
   card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));
const Post = ({ article }) => {
    console.log(article)
       const classes = useStyles();
    const { name, title ,courseImage, description  } = article.fields
    
    return (
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item item md={12} >
          <Paper className={classes.paper}> {courseImage && <img className='featuredImage' src={courseImage.fields.file.url} alt={name} title={name} />}</Paper>
        </Grid> 
        <Grid item md={13} xs={6}>
        <Paper className={classes.paper}>{courseImage && <img className='featuredImage' src={courseImage.fields.file.url} alt={name} title={name} />}</Paper>
          
               <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
           
            <CardContent>
                <Typography component="h2" variant="h5">
                              {article.fields.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {article.fields.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} />
          </Hidden>
        </Card>
      </CardActionArea>>
              
         
        </Grid>
        <Grid item xs={13} sm={6}>
          <Paper className={classes.paper}>{courseImage && <img className='featuredImage' src={courseImage.fields.file.url} alt={name} title={name} />}</Paper>
        <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
           
            <CardContent>
                <Typography component="h2" variant="h5">
                              {article.fields.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {article.fields.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} />
          </Hidden>
        </Card>
      </CardActionArea>>
               </Grid>
        </Grid>
        
        <div className='post'>
            <h2 className='title'>{name}</h2>
          {/*{courseImage && <img className='featuredImage' src={courseImage.fields.file.url} alt={name} title={name} />}*/}
             <p>{description}</p>
        </div></div>
    )
}

export default Post