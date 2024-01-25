//This function is used for to fill custom colors on bars.it automatically fill colors on dynamic data coming from JSON
const getColorBasedOnValue = (value) => {
    if (value === 0.5) {
    return '#93CFA9'; 
  } else if (value ===3.2) {
    return '#93CFA9';
  } else if(value === 1.5){
    return '#93CFA9';
  } else if(value === 4){
    return '#FFE9C0';
  } else if(value === 1){
      return '#E69E9E';
  } else if(value === 3){
      return '#E69E9E';
  } else if(value === 3.5){
      return '#FF5E7B';
  }

};


//This function is used for to draw custom Bar in a Bargraph
const CustomBar = (props) => {
    const { x, y, width, height,  barSize, payload} = props;
    const colors = getColorBasedOnValue(payload.value)
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={colors} rx={8} ry={8} barSize={barSize} />
      </g>
    );
  };

export default CustomBar;