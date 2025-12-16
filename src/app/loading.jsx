import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-sky-200 text-black ">
      <h2 className="font-bold text-4xl">
        <span className="text-red-500 border-4 border-dashed p-2">L</span>{" "}
              <span className='animate-spin' >🎯</span>
              ADING
      </h2>
    </div>
  );
}

export default loading