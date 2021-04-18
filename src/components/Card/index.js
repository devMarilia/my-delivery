import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    pagina:{
        display:'flex',
    },

  root: {
    maxWidth: 345,
    marginLeft: 100,
    marginBottom: 50,
    WebkitBorderRadius: 5,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function CardFood() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <section className= {classes.pagina}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        title="Pizza"
        subheader="Recheios variados"
      />
      <CardMedia
        className={classes.media}
        image='https://i2.wp.com/www.wine.com.br/winepedia/wp-content/uploads/2018/06/Pizzas-e-Vinhos.jpg?resize=1180%2C517&ssl=1'
        title="Pizza"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Temos deliciosas Pizzas de vários sabores. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><h3>Cardápio Pizzas:</h3></Typography>
          <Typography paragraph>
            <strong>Pizzas Gourmet, Vegetarianas, Tradicionais e Especiais</strong>
          </Typography>
          <Typography paragraph>
            Pizza Gourmet - R$59,90
            Pizza Vegetariana - R$49,90
          </Typography>
          <Typography paragraph>
           Pizza Tradional - R$ 39,90
           Pizza Especial - R$ 45,00
          </Typography>
          <Typography>
           <strong>Faça seu pedido conosco!</strong>
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
      <Card  className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            H
          </Avatar>
        }
        title="Hamburgues"
        subheader="Artesanais e Tradicionais"
      />
      <CardMedia
        className={classes.media}
        image='https://blog.sonoma.com.br/wp-content/uploads/2019/08/917/w6ueavuptbtz3u3ywh1c.jpg'
        title="Hamburguer"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Temos os melhores hamburgueres da região. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><h3>Cardápio Hamburguer:</h3></Typography>
          <Typography paragraph>
            <strong>Hamburguer Artesanal e Tradicional</strong>
          </Typography>
          <Typography paragraph>
            Hamburguer Artesanal - R$29,90
          </Typography>
          <Typography paragraph>
           Hamburguer Tradional - R$ 19,90
          </Typography>
          <Typography>
          <strong>Faça seu pedido conosco!</strong>
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        title="Batata Recheada"
        subheader="Com bastante queijo e bacon"
      />
      <CardMedia
        className={classes.media}
        image='https://www.minervafoods.com/wp-content/uploads/2019/09/batata_recheada_com_bacon.jpg'
        title="Pizza"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Você nunca comeu uma batata tão gostosa!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })} 
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><h3>Cardápio Batata:</h3></Typography>
          <Typography paragraph>
            <strong>Batata Gourmet - Todas acompanham queijo e bacon.</strong>
          </Typography>
          <Typography paragraph>
            Batata de frango  - R$29,90
            Batata de calabresa - R$29,90
          </Typography>
          <Typography paragraph>
           Batata Carne - R$ 29,90
          </Typography>
          <Typography>
          <strong>Faça seu pedido conosco!</strong>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </section>
  );
}

export default CardFood