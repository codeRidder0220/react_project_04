import React from 'react'

const Step3 = ({setCurrent ,formData , setFormData}) => {
  return (

    <div>

        <div className='pt-10'>
        

            <div className='w-full min-h-screen flex flex-col items-center justify-center '>
                <h1 className='text-5xl font-bold text-black-900 text-center pb-10' >[Education & Skills]</h1>
                
                <div className=' w-250 h-190  border bg-black/30 backdrop-blur-md rounded-3xl'>
                    
                    <div className='flex'>
                        <div className='w-125 h-140 flex flex-col'>

                            <div className=' pl-15 pt-10  mt-10'>
                                <h2 className='p-2 text-3xl font-medium'>College/university:</h2>

                                <input 
                                value={formData.college}
                                onChange={(e)=>setFormData({...formData , college:e.target.value})}
                                type="text" 
                                placeholder='college/university' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                />
                            </div>

                            <div className=' pl-15 pt-10  mt-12'>
                                <h2 className='p-2 text-3xl font-medium'>Course:</h2>

                                <input 
                                value={formData.course}
                                onChange={(e)=>setFormData({...formData , course:e.target.value})}
                                type="text" 
                                placeholder='course name' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                                />

                            </div>

                            <div className=' pl-15 pt-10  mt-12'>
                                <h2 className='p-2 text-3xl font-medium'>Branch:</h2>

                                <select 
                                value={formData.branch}
                                onChange={(e)=>setFormData({...formData , branch:e.target.value})}
                                id='branch'
                                name='branch' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent outline-none'
                                >
                                    <option value="">Select Branch</option>
                                    <option value="computer-science">computer science</option>
                                    <option value="information-technology">information technology</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Electrical">Electrical</option>
                                    <option value="civil">civil</option>
                                    <option value="Mechanical">Mechanical</option>

                                </select>

                            </div>

                            <div className=' pl-15 py-5  mt-11'>

                                <h2 className='p-2 text-3xl font-medium'>Currently studying:</h2>

                                <input 
                                className="w-6 h-6 appearance-none rounded-full border border-gray-500 bg-transparent checked:bg-purple-900" 
                                type="radio" 
                                id='yes' 
                                name='tick'
                                value="yes"
                                checked = {formData.currstudy === "yes"}
                                onChange={(e)=>setFormData({...formData , currstudy:e.target.value})}
                                />
                                <label className='text-2xl font-medium pl-2 pr-10' htmlFor="yes">Yes</label>

                                <input 
                                className="w-6 h-6 appearance-none rounded-full border border-gray-500 bg-transparent checked:bg-purple-900 " 
                                type="radio" 
                                id='no' 
                                name='tick'
                                value="no"
                                checked = {formData.currstudy === "no"}
                                onChange={(e)=>setFormData({...formData , currstudy:e.target.value})}
                                />
                                <label className='text-2xl font-medium pl-2' htmlFor="no">No</label>
            
                            </div>

                        </div>

                        <div className=' w-125 h-140'>

                            <div className=' pl-15 pt-10  mt-10'>
                                <h2 className='p-2 text-3xl font-medium'>Enrollment year:</h2>

                                <select 
                                value={formData.enroll}
                                onChange={(e)=>setFormData({...formData , enroll:e.target.value})}
                                id='enroll' 
                                name='enroll' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent  placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                >
                                    <option value="">Select Year</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
            

                                </select>

                            </div>

                            <div className=' pl-15 pt-10  mt-10'>
                                <h2 className='p-2 text-3xl font-medium'>Graduation year:</h2>

                                <select 
                                value={formData.graduation}
                                onChange={(e)=>setFormData({...formData , graduation:e.target.value})}
                                id='grad' 
                                name='grad' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent  placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                >
                                    <option value="">Select Year</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2023">2023</option>

                                </select>

                            </div>

                            

                            <div className=' pl-15 py-5  mt-8'>

                                <h2 className='p-2 text-3xl font-medium'>Experience :</h2>
                                
                                <select
                                value={formData.experience}
                                onChange={(e)=>setFormData({...formData , experience:e.target.value})}
                                name='experience'
                                className="w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent placeholder:text-gray-700  outline-none " 
                                > 
                                    <option value="">Select Experience</option>
                                    <option value="">Fresher</option>
                                    <option value="">0 - 1</option>
                                    <option value="">1 - 2</option>
                                    <option value="">2 - 3</option>
                                    <option value="">3+ years</option>

                                </select>
            
                            </div>

                            <div className=' pl-15 pt-5'>
                                <h2 className='p-2 text-3xl font-medium'>Skills :</h2> 

                                <div className='gap-2 w-full grid grid-cols-4 text-2xl font-medium text-black'>

                                <label>
                                    <input 
                                    className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' 
                                    type="checkbox" 
                                    value="cpp" 
                                    checked={formData.skills.includes("cpp")}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                        setFormData({
                                            ...formData,
                                            skills: [...formData.skills, e.target.value]
                                        });
                                        } else {
                                        setFormData({
                                            ...formData,
                                            skills: formData.skills.filter(
                                            (skill) => skill !== e.target.value
                                            )
                                        });
                                        }
                                    }}
                                    
                                    />
                                    C++
                                </label>

                                <label>
                                    <input className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' type="checkbox" value="html" />
                                    HTML
                                </label>

                                <label>
                                    <input className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' type="checkbox" value="css" />
                                    CSS
                                </label>

                                <label>
                                    <input className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' type="checkbox" value="web-3" />
                                    Web3
                                </label>

                                <label>
                                    <input className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' type="checkbox" value="react" />
                                    React
                                </label>

                                <label>
                                    <input className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' type="checkbox" value="dsa" />
                                    DSA
                                </label>

                                <label>
                                    <input className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' type="checkbox" value="node.js" />
                                    node.js
                                </label>

                                <label>
                                    <input className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' type="checkbox" value="Js" />
                                    JS
                                </label>

                                </div>

                                

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

export default Step3
