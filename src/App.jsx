
import { useState } from 'react'
import './App.css'
import Credit from './assets/compo/Credit/Credit'
import Data from './assets/compo/Data/Data'

function App() {
 const [price, setprice]= useState(0);
 const [set, setcredit] = useState(0)
 const [sett, setname] = useState([])

 const ButtonHanler = (buttons, credit,course_name) =>{
     const Total = price + buttons;
    setprice(Total)
    const Credit = credit + set ;
    setcredit(Credit)
    setname(course_name) 

    if (!sett.includes(course_name)) {
      setname([...sett, course_name]);
      setPrevName([...sett]);
    } 
    
   else {
      
      alert(`The course "${course_name}" is already selected.`);
      setname([...prevSett]);
    }

 }

  return (
    <>
      <h1 className='text-center text-2xl font-bold my-4'>Course Registration</h1>
      <div className='flex max-w-screen-xl m-auto'>
      <div >
      <Data ButtonHanler={ButtonHanler} ></Data>
      </div>
      <Credit price={price} credit={set}  coursename={sett}></Credit>
      </div>
    </>
  )
}

export default App
