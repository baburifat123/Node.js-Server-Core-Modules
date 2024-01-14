
import { FaDollarSign } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import Credit from '../Credit/Credit';
const Body = ({CoursData, ButtonHanler}) => {
    const {image,course_name,credit,price,course_details} = CoursData;
    return (
        <div className="w-[312px] h-[402px] bg-white drop-shadow p-3 space-y-3">
            <img src={image} alt="" />
            <h1 className="font-bold">{course_name}</h1>
            <h1 className='text-slate-500'>{course_details}</h1>

          <div className='flex justify-between m-3 '>

          <div className='flex  items-center'>
               <p className='text-2xl'><FaDollarSign></FaDollarSign></p>
               <span className='text-lg ml-2 text-slate-500'>Price : {price}</span>
             </div>
             
             <div className='flex items-center'>
                 <p className='text-2xl'><FaRegBookmark></FaRegBookmark></p>
                 <h1 className='text-lg mx-2 text-slate-500'>Credit: {credit}hr</h1>
             </div>

          </div> 

               <div className='bg-blue-600 p-3 text-center rounded-lg mb-2'>
                <button className='text-white' onClick={ ()=>ButtonHanler(price,credit,course_name)} >Select</button>
              </div>
              
        </div>
      
    );
};

export default Body;