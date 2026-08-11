import { useState , useEffect} from "react"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Step4 from "./components/Step4"
import { Toaster , toast } from "react-hot-toast"

function App() {

  const [current , setCurrent] = useState(1);
  const [error , setError] = useState({});



  const [formData , setFormData] = useState(()=>{

    const savedData = localStorage.getItem("formData");

    if(savedData){
      return JSON.parse(savedData);
    }

    return{

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

    }

  })

  useEffect(()=>{
    localStorage.setItem("formData" , JSON.stringify(formData));
  },[formData])



  const validate1 = () =>{

    const newerror = {};

    if(!formData.name.trim()){
      newerror.name ="Please enter valid name" ;
    }
    if(!formData.age){
      newerror.age ="Please enter valid age" ;
    }
    if(!formData.sex){
      newerror.sex ="Please select gender" ;
    }
    if(!formData.dob){
      newerror.dob ="Please enter valid DOB" ;
    }
    if(!formData.address.trim()){
      newerror.address ="Please enter valid address" ;
    }
    if(!formData.pincode){
      newerror.pincode ="Please enter valid pincode" ;
    }

    setError(newerror);

    return Object.keys(newerror).length === 0 ;

  };

  const validate2 = () =>{
    const newerror = {}

    if(!formData.phone){
      newerror.phone= "Please enter valid phone number" ;
    }
    if(!formData.alternativephone){
      newerror.alternativephone= "Please enter valid phone number" ;
    }
    if(!formData.state){
      newerror.state= "Please select state" ;
    }
    if(!formData.country){
      newerror.country= "Please enter country" ;
    }
    if(!formData.parentphone){
      newerror.parentphone= "Please enter valid phone number" ;
    }
    if(!formData.email){
      newerror.email= "Please enter valid email" ;
    }

    setError(newerror);
    
    return Object.keys(newerror).length === 0 ;

  }


  const validate3 = () =>{
    const newerror = {}

    if(!formData.college){
      newerror.college = "Please enter college name" ;
    }
    if(!formData.course){
      newerror.course = "Please select course" ;
    }
    if(!formData.branch){
      newerror.branch = "Please select branch" ;
    }
    if(!formData.enroll){
      newerror.enroll = "Please select enrollment year" ;
    }
    if(!formData.graduate){
      newerror.graduate = "Please select graduation year" ;
    }
    if(!formData.experience){
      newerror.experience = "Please select your experience" ;
    }
    if(!formData.currstudy){
      newerror.currstudy = "Please select" ;
    }

    setError(newerror);
    
    return Object.keys(newerror).length === 0 ;

  }

  const resetForm = () =>{
    setFormData({
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

    setError({})
    setCurrent(1);
  }



  const handlechange = (e)=>{
    const{name , value} = e.target;
    setFormData({...formData,[name]:value});

    setError({...error , [name]:""});
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


  const nextStep = () =>{

    let isvalid = true;

    if(current === 1){
       isvalid = validate1();
    }
    if(current === 2){
       isvalid = validate2();
    }

    if(current === 3){
       isvalid = validate3();
    }

    if(isvalid){
      setCurrent(prev=>prev+1);
    }    
    
  }

  const handleSubmit = () =>{
    toast.success("Form submitted Successfully!")
  }


  return (

    <div className="min-h-screen bg-linear-[135deg] from-gray-900 via-blue-900 to-purple-900 ">

      <Toaster position="top-center"/>

    {
      current === 1 && (
        <Step1 
        setCurrent={setCurrent} 
        formData = {formData}         
        handlechange={handlechange}
        error = {error}
        nextStep = {nextStep}
        /> 
      )
    }
    
    {
      current === 2 &&  (<Step2 setCurrent={setCurrent} formData={formData} error={error} nextStep={nextStep}  setFormData={setFormData} handlechange={handlechange}/>)
    } 
    {
      current === 3 &&  (<Step3 setCurrent={setCurrent} formData={formData} error={error} nextStep={nextStep} setFormData={setFormData} handlechange={handlechange} handleskillchange={handleskillchange}/>)
    } 
    {
      current === 4 &&  (<Step4 setCurrent={setCurrent} formData={formData} handleSubmit={handleSubmit} resetForm={resetForm}/>)
    } 

    </div>
  )
}

export default App
