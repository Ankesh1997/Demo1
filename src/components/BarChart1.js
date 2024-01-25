import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Rectangle } from 'recharts';
import CustomBar from './CustomBar'
import {CustomXAxisTick, CustomYAxisTick,} from './CustomXAxixTick';

const BarChart1 = () => {
    const data = [
        { id: 0, name: 'Monday', value: 0.5,},
        { id: 1, name: 'Tuesday', value: 3.2,},
        { id: 2, name: 'Wednesday', value: 1.5,},
        { id: 3, name: 'Thursday', value: 4,},
        { id: 4, name: 'Friday', value: 1,},
        { id: 5, name: 'Saturday', value: 3,},
        { id: 6, name: 'Sunday', value: 3.5,},
        { id: 7, name: ''}
      ];
        
    
    return(
        <div style={{ width: '50%', height: 500, backgroundColor:'#0D1836'}}>
        <ResponsiveContainer>
          <BarChart data={data} layout='vertical'  margin={{
            top: 30,
            right: 30,
            left: 60,
            bottom: 5,
          }}  barCategoryGap="70%">
              <CartesianGrid  horizontalCoordinatesGenerator={(props) => props.height > 500 ? [50] : []} />
              <XAxis type="number" interval={0} axisLine={false} tick={<CustomXAxisTick/>}/>
              <YAxis dataKey="name" type="category"  tick={<CustomYAxisTick /> } tickLine={false} tickMargin={30} interval={0}/>
              <Bar dataKey="value"  shape={<CustomBar height={30} />} />

          {/* <Bar dataKey="value1" fill="#FF5733" shape={<CustomBar height={30} />}/>
          <Bar dataKey="value2" fill="#33FFA8" shape={<CustomBar height={30} />} />
          <Bar dataKey="value3" fill='#336AFF' shape={<CustomBar height={30}/>}/>
          <Bar dataKey="value4" fill='#FF33DD' shape={<CustomBar height={30}/>}/>
          <Bar dataKey="value5" fill='#FF5733' shape={<CustomBar height={30}/>}/>
          <Bar dataKey="value6" fill="#33FFA8" shape={<CustomBar height={30}/>}/>
          <Bar dataKey="value7" fill="#FF5733" shape={<CustomBar height={30}/>}/> */}

                      </BarChart>
        </ResponsiveContainer>
      </div>
    );
};


export default BarChart1;