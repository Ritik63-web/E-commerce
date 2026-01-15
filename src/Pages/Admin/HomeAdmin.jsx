import React from 'react'
import Hero from '../../components/Hero'
import Profile from '../../components/Profile'
import AdminSidebar from './AdminSidebar'

const HomeAdmin = () => {
  return (
    <>
    <Hero title={"Admin"}/>
    <div className='container'>
      <div className="row my-3">
        <div className="col-md-3">
        <AdminSidebar />
        </div>
        <div className="col-md-9">
          <Profile />
        </div>
      </div>
     
    </div>
    </>
  )
}

export default HomeAdmin