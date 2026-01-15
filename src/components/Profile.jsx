import React from "react";

const Profile = () => {
  return (
    <>
      <div className="admin">
        <h1 className="text-center fs-4 text-center text-light rounded-2 py-1">
          Admin Profile
        </h1>
        <div className="row">
          <div className="col-md-6">
            <img src="/images/profile.jfif" alt="profile" style={{width:'300px', height:'300px'}} />
          </div>
          <div className="col-md-6">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Ritik</td>
                </tr>
                <tr>
                  <th>User Name</th>
                  <td>Ritikpal_63</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>Ritikpal227@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>+91 6397570217</td>
                </tr>
                <tr className=''>
                  <td colspan={2}>
                  <button className="text-light w-100 fs-5 my-bg">
                    Update Profiles
                  </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
