import React, {useState} from 'react'

function Card({tags, title, ttr, button, image, desc, link}) {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className='border-2 border-gray-800 rounded-md flex flex-col md:flex-row mb-5'>
        <div className='w-full md:w-3/5'>
          <img src={image} alt="img" className="w-full h-auto" />
        </div>
        <div className='flex flex-col justify-center items-center md:items-start flex-1 border-l-0 md:border-l-2 border-gray-800 p-4'>
          <h1 className='text-md md:text-lg text-blue-600 mb-4'>{tags}</h1>
          <h1 className='text-2xl md:text-4xl text-gray-800 mb-2'>{title}</h1>
          <h1 className='text-md md:text-lg text-gray-500 mb-6'>{ttr}</h1>
          <button onClick={() => setOpenModal(true)} className='text-lg md:text-2xl text-gray-600 hover:text-blue-600 hover:underline hover:underline-offset-8 transition-all duration-500'>{button} <span className='font-semibold'>→</span></button>
        </div>
      </div>
      {openModal && 
        <>
          <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
            <div className="relative w-full m-10">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">{title}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setOpenModal(false)}
                  >
                    <span className="text-red-500 text-3xl">
                      x
                    </span>
                  </button>
                </div>

                <div className="relative p-10 flex-auto h-[400px] overflow-y-scroll text-justify">
                  <a href={link} className='text-lg md:text-2xl text-gray-600 hover:text-blue-600 hover:underline hover:underline-offset-8'>Visit the website <span className='font-semibold'>→</span></a>
                  <p className='my-5 tracking-wide'>
                    {desc}
                  </p>
                </div>

                <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Card