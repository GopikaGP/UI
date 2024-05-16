import React from 'react'

const MoreOption = () => {
  return (
   <>
    <div className="card w-100 mb-3 mt-4 p-5 card_profile">
        <div className="card-body">
          <h4 className="card-title pb-4">More Options</h4>
          <div className="d-flex flex-column content_userprofile">
            <a  className="link_modify_user"  href=''>view read history</a>
            <a  className="link_modify_user" href=''>Manage Email Preferences</a>
            <a   className="link_modify_user" href=''>Help/FAQ</a>
           <div><hr className='border  border-2 opacity-50'></hr></div>
             <>
             <a  className="link_modify_user" href=''>Delete Account</a>
             </>
            </div>
        </div>
      </div>
   
   </>
  )
}

export default MoreOption