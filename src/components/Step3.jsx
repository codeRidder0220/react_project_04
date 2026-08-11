import React from 'react'

const Step3 = ({setCurrent ,formData , setFormData ,handlechange , error , nextStep  ,handleskillchange}) => {
  return (

    <div>

        <div className='pt-10'>
        

            <div className='w-full min-h-screen flex flex-col items-center justify-center '>
                <h1 className='text-5xl font-bold text-black-900 text-center pb-10' >[Education & Skills]</h1>
                
                <div className=' w-250 h-190  border bg-black/30 backdrop-blur-md rounded-3xl'>
                    
                    <div className='flex'>
                        <div className='w-125 h-140 flex flex-col'>

                            <div className=' pl-15 pt-10  mt-8'>
                                <h2 className='p-2 text-3xl font-medium'>College/university:</h2>

                                <input 
                                name='college'
                                value={formData.college}
                                onChange={handlechange}
                                type="text" 
                                placeholder='college/university' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                />
                                {
                                    error.college&&(
                                        <p className='text-red-500 text-sm pl-2'>{error.college}</p>
                                    )
                                }
                            </div>

                            <div className=' pl-15 pt-10  mt-8'>
                                <h2 className='p-2 text-3xl font-medium'>Course:</h2>

                                <input 
                                name='course'
                                value={formData.course}
                                onChange={handlechange}
                                type="text" 
                                placeholder='course name' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent text-white placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                                />
                                {
                                    error.course&&(
                                        <p className='text-red-500 text-sm pl-2'>{error.course}</p>
                                    )
                                }

                            </div>

                            <div className=' pl-15 pt-10  mt-8'>
                                <h2 className='p-2 text-3xl font-medium'>Branch:</h2>

                                <select 
                                value={formData.branch}
                                onChange={handlechange}
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
                                {
                                    error.branch&&(
                                        <p className='text-red-500 text-sm pl-2'>{error.branch}</p>
                                    )
                                }

                            </div>

                            <div className=' pl-15 py-5  mt-11'>

                                <h2 className='p-2 text-3xl font-medium'>Currently studying:</h2>

                                <input 
                                className="w-6 h-6 appearance-none rounded-full border border-gray-500 bg-transparent checked:bg-purple-900" 
                                type="radio" 
                                
                                name='currstudy'
                                value="yes"
                                checked = {formData.currstudy=="yes"}
                                onChange={handlechange}
                                />
                                <label className='text-2xl font-medium pl-2 pr-10' htmlFor="yes">Yes</label>

                                <input 
                                className="w-6 h-6 appearance-none rounded-full border border-gray-500 bg-transparent checked:bg-purple-900 " 
                                type="radio" 
                                
                                name='currstudy'
                                value="no"
                                checked = {formData.currstudy=="no"}
                                onChange={handlechange}
                                />
                                <label className='text-2xl font-medium pl-2' htmlFor="no">No</label>
                                {
                                    error.currstudy&&(
                                        <p className='text-red-500 text-sm pl-2'>{error.currstudy}</p>
                                    )
                                }
            
                            </div>

                        </div>

                        <div className=' w-125 h-140'>

                            <div className=' pl-15 pt-10  mt-8'>
                                <h2 className='p-2 text-3xl font-medium'>Enrollment year:</h2>

                                <select 
                                value={formData.enroll}
                                onChange={handlechange}
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
                                {
                                    error.enroll&&(
                                        <p className='text-red-500 text-sm pl-2'>{error.enroll}</p>
                                    )
                                }

                            </div>

                            <div className=' pl-15 pt-10  mt-9'>
                                <h2 className='p-2 text-3xl font-medium'>Graduation year:</h2>

                                <select 
                                value={formData.graduate}
                                onChange={handlechange}
                                 
                                name='graduate' 
                                className='w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent  placeholder:text-gray-700 placeholder:text-2xl outline-none caret-purple-500'
                                >
                                    <option value="">Select Year</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2023">2030</option>

                                </select>
                                {
                                    error.graduate&&(
                                        <p className='text-red-500 text-sm pl-2'>{error.graduate}</p>
                                    )
                                }

                            </div>

                            

                            <div className=' pl-15 py-5  mt-8'>

                                <h2 className='p-2 text-3xl font-medium'>Experience :</h2>
                                
                                <select
                                value={formData.experience}
                                onChange={handlechange}
                                name='experience'
                                className="w-75 pl-5 h-12 rounded-2xl border border-gray-900 text-2xl bg-transparent placeholder:text-gray-700  outline-none " 
                                > 
                                    <option value="">Select Experience</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="0 - 1">0 - 1</option>
                                    <option value="1 - 2">1 - 2</option>
                                    <option value="2 - 3">2 - 3</option>
                                    <option value="3+ years">3+ years</option>

                                </select>
                                {
                                    error.experience&&(
                                        <p className='text-red-500 text-sm pl-2'>{error.experience}</p>
                                    )
                                }
            
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
                                    onChange={handleskillchange}
                                    
                                    />
                                    C++
                                </label>

                                <label>
                                    <input 
                                    className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' 
                                    type="checkbox" 
                                    value="html" 
                                    checked={formData.skills.includes("html")}
                                    onChange={handleskillchange}
                                    />
                                    HTML
                                </label>

                                <label>
                                    <input 
                                    className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' 
                                    type="checkbox" 
                                    value="css"
                                    checked={formData.skills.includes("css")}
                                    onChange={handleskillchange} 
                                    />
                                    CSS
                                </label>

                                <label>
                                    <input 
                                    className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' 
                                    type="checkbox" 
                                    value="web-3"
                                    checked={formData.skills.includes("web-3")}
                                    onChange={handleskillchange} 
                                    />
                                    Web3
                                </label>

                                <label>
                                    <input 
                                    className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' 
                                    type="checkbox" 
                                    value="react"
                                    checked={formData.skills.includes("react")}
                                    onChange={handleskillchange} 
                                    />
                                    React
                                </label>

                                <label>
                                    <input 
                                    className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' 
                                    type="checkbox" 
                                    value="dsa"
                                    checked={formData.skills.includes("dsa")}
                                    onChange={handleskillchange}
                                     />
                                    DSA
                                </label>

                                <label>
                                    <input 
                                    className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' 
                                    type="checkbox" 
                                    value="node.js"
                                    checked={formData.skills.includes("node.js")}
                                    onChange={handleskillchange} 
                                    />
                                    node.js
                                </label>

                                <label>
                                    <input 
                                    className='appearance-none border border-gray-500 w-4 h-4 rounded-full checked:bg-purple-900' 
                                    type="checkbox" 
                                    value="Js"
                                    checked={formData.skills.includes("Js")}
                                    onChange={handleskillchange} 
                                    />
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
                className='bg-purple-900/40 backdrop-blur-md border border-black  rounded-3xl text-2xl text-gray-400 p-3 w-35 '
                onClick={nextStep}
                >next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step3
