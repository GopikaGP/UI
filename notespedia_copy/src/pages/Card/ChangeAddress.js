import React from 'react';
import './cart.css'

const ChangeAddress = () => {
  return (
    <div>
        <div className='card p-3 c_ca_m mb-2 mt-2'>
            <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-row'>
                    <div className='fw-small text-muted'>Delivery To: </div>
                    <div className='fw-bold'>David, 695501</div>
                </div>
                <div className=' text-muted a_C_P'>
                4109 Twin House Lane  Saint Paul United States
                </div>
            </div>
            <div>
                
                <button className='add_add_btn_cart'>CHANGE ADDRESS</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ChangeAddress