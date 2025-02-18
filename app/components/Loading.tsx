import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      <h1 className='ms-4 text-xl'>Loading...</h1>
    </div>
  )
}

export default Loading