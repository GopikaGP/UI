import React from 'react'
import Layout from '../components/Layout/Layout'
import DashBoard from './AdminMenu'

const AdminDashboard = () => {
  return (
    <Layout>
    <div>
        <div className='row'>
            <div className='col-md-3'>
       <DashBoard/>
        </div>
        <div className='col-md-9'>
          <h1>Welcome</h1>
          <h5>Admin Name:David</h5>
            <h5>Admin Email:David@gmail.com</h5>
            <h5>Admin Contact:+4756512455</h5>
             
        </div>
        </div>
    </div>
    </Layout>
  )
}

export default AdminDashboard