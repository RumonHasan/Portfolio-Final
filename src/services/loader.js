import * as React from 'react';
import PropTypes from 'prop-types';
import {LinearProgress, Typography, Box} from '@material-ui/core';
import {colors} from '../services/theme/colors';
import { useGlobalContext } from '../context/context';

const LinearProgressWithLabel = (props)=> {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
      <Box sx={{ width: props.smallScreen ? '50%': '30%', mr: 1, transition: '450ms' }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography style={{color:colors.mainBlue}}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
// basic linear progress value prop type restricting to a number
LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };

const  LinearWithValueLabel =()=> {
  const [progress, setProgress] = React.useState(0);
  const {smallScreen} = useGlobalContext();
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} smallScreen={smallScreen}/>
    </Box>
  )

}

export default LinearWithValueLabel;