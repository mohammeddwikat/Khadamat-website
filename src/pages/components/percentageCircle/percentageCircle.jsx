import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyle from './percentageCircleStyle'


function CircularProgressWithLabel(props) {

  const classes = useStyle()

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress size={210} className={classes.root} color={"#0077b6"} variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography className={classes.textStyle} variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const PercentageRateCircle = (props) => {
  
    return <CircularProgressWithLabel value={props.percent} />;
};

export default PercentageRateCircle
