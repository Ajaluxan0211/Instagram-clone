import React from 'react'  //rfce//
import Sidebar from './Sidebar.jsx'

function App() {
  return (
    <div className="d-flex vh-100 ">
      <div className='w-20'>
  <Sidebar />
</div>
       <div className='w-50 bg-secondary border'>feed</div>
        <div className='w-30'>suggestion</div>
      
    </div>
  )
}

export default App

