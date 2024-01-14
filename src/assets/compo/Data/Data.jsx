import { useEffect } from "react";
import { useState } from "react";
import Body from "../body/Body";

const Data = ({ButtonHanler}) => {
    const [data, setdata]= useState([]);
useEffect(()=>{
      fetch('Assignment.json')
      .then(res => res.json())
      .then(datas => setdata(datas))
},[])
    return (
        <div>
           <div className="w-[1000px] grid grid-cols-3 gap-y-5">
           {
              data.map((Cours, idx)=> <Body key={idx} CoursData={Cours} ButtonHanler={ButtonHanler}></Body>)
            }
           </div>
        </div>
        
    );
};

export default Data;