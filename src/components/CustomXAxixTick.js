//This function used for to draw custom colors for X-axis data elements
export const getColorForBar = (value) => {
    if (value === 0) {
        return 'skyblue';
    } if (value === 1) {
      return '#FF5733'; 
    } else if (value === 2) {
      return '#33FFA8';
    } else if(value === 3){
      return '#336AFF';
    } else if(value === 4){
      return '#FF5733';
    } 
  };

  

//This function is used for to draw Custom x-axis co-ordinates of BarGraph
export const CustomXAxisTick = ({ x, y, payload }) => {
    const textColor = getColorForBar(payload.value) 
      const shadowBoxWidth = "100%";
      const shadowBoxHeight = 40;
  
      return (
        <g>
          <rect
            x={x - shadowBoxWidth / 2}
            y={y - shadowBoxHeight /2}
            width={shadowBoxWidth}
            height={shadowBoxHeight}
            fill="#ffffff38"
            opacity={0.2}
            rx={8}
            ry={8}
      
          />
          <text x={x} y={y} dy={8} textAnchor="middle" fill={textColor}>
            {payload.value === 0 ? "0" : payload.value}
          </text>
        </g>
      );
    };

  
//This function is used for to draw custom y-axis tricks for BarGraph
  export const CustomYAxisTick = ({ x, y, payload,}) => {
    if(payload.value === '') {
      return (
        <text x={x} y={y}  dy={42} textAnchor="end" fill="#FFFFFF" >
          Severity
        </text>
      );
    }

    return (
      <text x={x} y={y} dy={25} textAnchor="end" fill="#FFFFFF ">
        {payload.value}
      </text>
    );
  };



  





