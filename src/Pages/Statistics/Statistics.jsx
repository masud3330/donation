
import { PieChart, Pie,   } from 'recharts';


const Statistics = () => {

 
    
    const totalData =12;
    const part= JSON.parse(localStorage.getItem("Donations")).length;
   console.log(part)
    const donationPercent= ((part/totalData)*100).toFixed(2);
    console.log(donationPercent)
    const remaing= 100-donationPercent;
    console.log(remaing)

    const data = [
      
        { name: 'Donation', value: donationPercent },
        { name: 'Remaing', value: remaing }
      ];
return (
        <div className='flex items-center'  >
            
      <div>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="green"
            label
          />
          
        </PieChart>
      </div>
      <div>
        <h3 className='font-bold text-xl'>Remaing:{remaing}% </h3>
        <h3 className='font-bold text-xl'>Donation:{donationPercent}% </h3>
      </div>
      
         
        </div>
    );
};

export default Statistics;