import React from 'react'

const Step1 = ({setCurrent ,formData , setFormData}) => {
  return (

    <div>

        <div className='pt-10'>
        

            <div className='w-full min-h-screen flex flex-col items-center justify-center '>
                <h1 className='text-5xl font-bold text-black-900 text-center pb-10' >[Personal Details]</h1>
                
                <div className=' w-250 h-140  border bg-black/30 backdrop-blur-md rounded-3xl'>
                    
                    <div className='flex'>
                        <div className='w-125 h-140 flex flex-col'>

                            <div className=' pl-15 pt-10  mt-10'>
                                <h2 className='p-2 text-3xl font-medium'>Name:</h2>

                                <input 
                                type="text" 
                                value={formData.name}
                                onChange={(e)=>setFormData({...formData, name: e.target.value})}
                                placeholder='Enter your name' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                />
                            </div>

                            <div className=' pl-15 pt-10  mt-12'>
                                <h2 className='p-2 text-3xl font-medium'>Age:</h2>

                                <input 
                                type="number" 
                                value={formData.age}
                                onChange={(e)=>setFormData({...formData , age:e.target.value})}
                                placeholder='Enter your Age' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                                />

                            </div>

                            <div className=' pl-15 py-5  mt-11'>

                                <h2 className='p-2 text-3xl font-medium'>Sex:</h2>

                                <input 
                                className="w-6 h-6 appearance-none rounded-full border border-gray-500 bg-transparent checked:bg-purple-900" 
                                type="radio" 
                                id='male' 
                                name='gender'
                                value="male"
                                checked = {formData.sex=== "male"}
                                onChange={(e)=>setFormData({...formData , sex:e.target.value})}
                                />
                                <label className='text-2xl font-medium pl-2 pr-10' htmlFor="male">Male</label>

                                <input 
                                className="w-6 h-6 appearance-none rounded-full border border-gray-500 bg-transparent checked:bg-purple-900 " 
                                type="radio" 
                                id='female' 
                                name='gender'
                                value="female"
                                checked ={formData.sex === "female"}
                                onChange={(e)=>setFormData({...formData , sex:e.target.value})}
                                />
                                <label className='text-2xl font-medium pl-2' htmlFor="female">Female</label>
            
                            </div>

                        </div>

                        <div className=' w-125 h-140'>

                            <div className=' pl-15 pt-10  mt-10'>
                                <h2 className='p-2 text-3xl font-medium'>Date of birth :</h2>

                                <input 
                                value={formData.dob}
                                onChange={(e)=>setFormData({...formData , dob:e.target.value})}
                                type="date" 
                                id='dob' 
                                name='dob' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent  placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                />

                            </div>

                            <div className=' pl-15 pt-10  mt-12'>
                                <h2 className='p-2 text-3xl font-medium'>Address :</h2> 

                                <input 
                                value={formData.address}
                                onChange={(e)=>setFormData({...formData , address :e.target.value})}
                                type="text" 
                                placeholder='Enter your Address' 
                                className='w-100 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                />

                            </div>

                            <div className=' pl-15 py-5  mt-8'>

                                <h2 className='p-2 text-3xl font-medium'>Pin code :</h2>
                                
                                <input 
                                value={formData.pincode}
                                onChange={(e)=>setFormData({...formData , pincode :e.target.value})}
                                type="text" 
                                id='pincode' 
                                name='pincode' 
                                placeholder='Enter pincode' 
                                maxLength="6" 
                                inputMode='numeric' 
                                className="w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500" 
                                />
            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-250 flex justify-end mt-10 mb-10">
                <button 
                className='bg-black/30 backdrop-blur-md border border-black  rounded-3xl text-2xl text-gray-400 p-3 w-35 '
                onClick={()=>setCurrent(prev => prev+1)}
                >next
                </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Step1
