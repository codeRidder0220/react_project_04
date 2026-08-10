import React from 'react'

const Step2 = ({setCurrent ,formData , setFormData}) => {
  return (

    <div>

        <div className='pt-10'>
        

            <div className='w-full min-h-screen flex flex-col items-center justify-center '>
                <h1 className='text-5xl font-bold text-black-900 text-center pb-10' >[Contact Details]</h1>
                
                <div className=' w-250 h-140  border bg-black/30 backdrop-blur-md rounded-3xl'>
                    
                    <div className='flex'>
                        <div className='w-125 h-140 flex flex-col'>

                            <div className=' pl-15 pt-10  mt-10'>
                                <h2 className='p-2 text-3xl font-medium'>phone number:</h2>

                                <input 
                                value={formData.phone}
                                onChange={(e)=>setFormData({...formData , phone:e.target.value})}
                                type="tel" 
                                placeholder='Enter your number_1' 
                                inputMode='numeric'
                                maxLength="10"
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                />
                            </div>

                            <div className=' pl-15 pt-10  mt-12'>
                                <h2 className='p-2 text-3xl font-medium'>Alternate number:</h2>

                                <input 
                                value={formData.alternativephone}
                                onChange={(e)=>setFormData({...formData , alternativephone :e.target.value})}
                                type="tel" 
                                placeholder='Enter your number_2' 
                                inputMode='numeric'
                                maxLength="10"
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500 '
                                />

                            </div>

                            <div className=' pl-15 pt-10  mt-4'>
                                <h2 className='p-2 text-3xl font-medium'>State:</h2>

                                <input 
                                value={formData.state}
                                onChange={(e)=>setFormData({...formData , state:e.target.value})}
                                type="text" 
                                placeholder='State name' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500 '
                                />

                            </div>

                        </div>

                        <div className=' w-125 h-140'>

                            <div className=' pl-15 pt-10  mt-10'>
                                <h2 className='p-2 text-3xl font-medium'>E-mail :</h2>

                                <input
                                value={formData.email}
                                onChange={(e)=>setFormData({...formData , email:e.target.value})} 
                                type="email" 
                                placeholder='Enter your e-mail'
                                id='dob' 
                                name='dob' 
                                className='w-100 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent  placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                />

                            </div>

                            <div className=' pl-15 pt-10  mt-12'>
                                <h2 className='p-2 text-3xl font-medium'>Parent number:</h2> 

                                <input 
                                value={formData.parentphone}
                                onChange={(e)=>setFormData({...formData , parentphone :e.target.value})}
                                type="tel" 
                                inputMode='numeric'
                                maxLength="10"
                                placeholder='parent number' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                />

                            </div>

                            <div className=' pl-15 py-5  mt-8'>

                                <h2 className='p-2 text-3xl font-medium'>Country:</h2>
                                
                                <input 
                                value={formData.country}
                                onChange={(e)=>setFormData({...formData , country:e.target.value})}
                                type="text" 
                                id='country' 
                                name='country' 
                                placeholder='country name' 
                                className="w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500" 
                                />
            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-250 flex justify-between mt-10 mb-10">
                    <button 
                    className='bg-black/30 backdrop-blur-md border border-black  rounded-3xl text-2xl text-gray-400 p-3 w-35 '
                    onClick={()=>setCurrent(prev => prev-1)}
                    >prev</button>
                    
                    
                    <button 
                    className='bg-black/30 backdrop-blur-md border border-black  rounded-3xl text-2xl text-gray-400 p-3 w-35 '
                    onClick={()=>setCurrent(prev => prev+1)}
                    >next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step2
