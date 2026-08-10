import { useState } from "react"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Step4 from "./components/Step4"

function App() {

  const [current , setCurrent] = useState(1);
  const [formData , setFormData] = useState({
    name:"",
    age:"",
    sex:"",
    dob:"",
    address:"",
    pincode:"",

    //step2 =>
    phone:"",
    alternativephone:"",
    state:"",
    country:"",
    parentphone:"",
    email:"",

    //step3 =>
    college:"",
    course:"",
    branch:"",
    enroll:"",
    graduate:"",
    experience:"",
    currstudy:"",
    skills:[],

  })

  const handlechange = (e)=>{
    const{name , value} = e.target;
    setFormData({...formData,[name]:value});
  };

  const handleskillchange = (e)=>{
    const {value , checked} = e.target;
    if(checked){
      setFormData({
        ...formData,
        skills: [...formData.skills , value]
      })
    }else{
      setFormData({
        ...formData,
        skills:formData.skills.filter(
          skill => skill !== value
        )
      })
    }
  }


  return (

    <div className="min-h-screen bg-linear-[135deg] from-gray-900 via-blue-900 to-purple-900 ">

    {
      current === 1 && (
        <Step1 
        setCurrent={setCurrent} 
        formData = {formData} 
        setFormData={setFormData}
        handlechange={handlechange}
        /> 
      )
    }
    
    {
      current === 2 &&  (<Step2 setCurrent={setCurrent} formData={formData} setFormData={setFormData} handlechange={handlechange}/>)
    } 
    {
      current === 3 &&  (<Step3 setCurrent={setCurrent} formData={formData} setFormData={setFormData} handlechange={handlechange} handleskillchange={handleskillchange}/>)
    } 
    {
      current === 4 &&  (<Step4 setCurrent={setCurrent} formData={formData} setFormData={setFormData} handlechange={handlechange}/>)
    } 

    </div>
  )
}

export default App
