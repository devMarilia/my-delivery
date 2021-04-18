import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Pizza',
    imgPath:
    'https://midias.agazeta.com.br/2021/01/28/710x388/pizzas-doces-e-salgadas-da-rede-de-pizzarias-carioca-forneria-original-inaugurada-em-vila-velha-408952.jpg',
      
  },
  {
    label: 'Pizza',
    imgPath:
      'https://viacafegardenshopping.com.br/wp-content/uploads/2019/07/shutterstock_225746563-1.jpg',
  },
  {
    label: 'Batata',
    imgPath:
      'https://i.pinimg.com/originals/42/c4/de/42c4de55be608455a7f55cde3336763e.jpg',
  },
  {
    label: 'Hamburguer',
    imgPath:
      'https://encontrefacilcomprebem.com.br/wp-content/uploads/2020/11/Lanches-15-6.jpg',
  },
  {
    label: 'batata',
    imgPath:
      'https://media-manager.noticiasaominuto.com/1920/1484505398/naom_5877c5a74225a.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 2000,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,

  },
  img: {
    height: "32rem",
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <div className={classes.root}>
     
      <AutoPlaySwipeableViews 
       
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label}/>
            ) : null}
            
          </div>

        ))}
      </AutoPlaySwipeableViews>
      
    </div>
  );
}

export default Header;