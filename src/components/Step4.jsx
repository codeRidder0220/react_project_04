import React from 'react'

const Step4 = ({formData, setCurrent ,handleSubmit , resetForm}) => {
  return (
    <div> 
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-black mb-15'>
          [Preview Details]
        </h1>
    
        <div className='flex flex-wrap items-center justify-center gap-6'>

          <div className='w-100 h-140 bg-black/20 backdrop-blur-2xl rounded-2xl'>
          
            <h2 className='bg-gray-500/20 text-2xl text-black font-medium rounded-t-2xl p-2'>Personal details :</h2>

            <div className='flex flex-col p-12 gap-10 text-[20px] font-medium'>
              <p>Name: {formData.name}</p>
              <p>Age: {formData.age}</p>
              <p>dateofBirth: {formData.dob}</p>
              <p>Gender: {formData.sex}</p>
              <p>address: {formData.address}</p>
              <p>pincode: {formData.pincode}</p>
            </div>


          </div>

          <div className='w-100 h-140 bg-black/20 backdrop-blur-2xl rounded-2xl'>

            <h2 className='bg-gray-500/20 text-2xl text-black font-medium rounded-t-2xl p-2'>Contact details :</h2>

            <div className='flex flex-col p-12 gap-8 text-[20px] font-medium'>

              <p>phone_1st: {formData.phone}</p>
              <p>phone_2nd: {formData.alternativephone}</p>
              <p>state: {formData.state}</p>
              <p>country: {formData.country}</p>
              <p>parent's number: {formData.parentphone}</p>
              <p>email: {formData.email}</p>

            </div>

          </div>
          <div className='w-100 h-140 bg-black/20 backdrop-blur-2xl rounded-2xl'>

            <h2 className='bg-gray-500/20 text-2xl text-black font-medium rounded-t-2xl p-2'>Education & skills details :</h2>

            <div className='flex flex-col p-12 gap-6 text-[19px] font-medium'>

              <p className=''>college: {formData.college}</p>
              <p>course: {formData.course}</p>
              <p>branch: {formData.branch}</p>
              <p>enrollment year: {formData.enroll}</p>
              <p>graduation year: {formData.graduate}</p>
              <p>experience: {formData.experience}</p>
              <p>currently studying: {formData.currstudy}</p>
              <p>skills:{formData.skills.join(",")} </p>
            </div>

          </div>
        </div>

        <div className='flex justify-center gap-6 mt-10 mb-10'>

          <button
            onClick={() => setCurrent(prev => prev - 1)}
            className='bg-black/30 backdrop-blur-md border border-black rounded-3xl text-2xl text-gray-400 px-8 py-3'
          >
            Previous
          </button>

          <button
           onClick={handleSubmit}
            className='bg-purple-900/40 backdrop-blur-md border border-black rounded-3xl text-2xl text-gray-400 px-8 py-3'
          >
            Submit
          </button>

          <button
           onClick={resetForm}
            className='bg-red-900/40 backdrop-blur-md border border-black rounded-3xl text-2xl text-gray-400 px-8 py-3'
          >
            Reset
          </button>

        </div>
        
      </div>
      
    </div>
  )
}

export default Step4
