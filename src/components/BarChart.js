import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

const BarChart = () => {

    const option={
        indexAxis:'y',
        elements:{
          bar:{
            borderWidth:1,
          }
        },
        responsive:true,
        plugins:{
          legend:{
            position:'right'
          },
        }
      }
      
      
      const data = {
        labels:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: "Product A",
            data: [ 10, 22, 44, 30, 60, 50, 95],
            backgroundColor: ["orange", "blue", "pink", "green","skyblue"],
          },

        ]
      };
      
      
    return(
    <div className="App">
      <Bar options={option} data={data} />
    </div>
    );
}

export default BarChart;