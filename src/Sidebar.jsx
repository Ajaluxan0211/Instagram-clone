import React from 'react'


function Sidebar() {
  return (
    <div className=' position-fixed m-3'>
      <div className='d-flex flex-column gap-3'>
        <img className="text-logo" src="src\assets\text-logo.png" alt='text'></img>
        <div><i className="bi bi-house"></i>Home</div>
         <div><i className="bi bi-search"></i>Search</div>
          <div><i className="bi bi-compass"></i>Explore</div>
           <div><i className="bi bi-file-play"></i>Reels</div>
            <div><i className="bi bi-chat"></i>Messages</div>
             <div><i className="bi bi-bell"></i>Notifications</div>
              <div><i className="bi bi-credit-card-2-front"></i>Create</div>
               <div><i className="bi bi-person"></i>Profile</div>


      </div>
<div className='position-fixed bottom-0 d-flex flex-column gap-3'>
  <div><i className="bi bi-threads"></i>Threads</div>
  <div><i className="bi bi-three-dots"></i>More</div>
</div>

      </div>
      

  );
}

export default Sidebar
