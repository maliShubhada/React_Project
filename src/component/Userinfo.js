import React, { useEffect, useState } from "react";
import axios from "axios";
function Userinfo() {
  const [data, postData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
useEffect(()=>{
    axios.get("http://localhost:3000/data").then((res) => {
    //   console.log(res);
      postData(res.data);
    //   setName(res.data[0].name);
    //   setEmail(res.data[0].email);
    //   setAddress(res.data[0].address);
    }).catch(err=>{console.log(err)});
  },[data])
 function PostData(e){
    axios.post("http://localhost:3000/data",{name,email,address}).then(res=>{
        // console.log(res);
    })
    e.preventDefault();
    setName('');
    setEmail('');
    setAddress('')
 }
 function DelData(id){
    axios.delete(`http://localhost:3000/data/${id}`).then(res=>{
        console.log(res);
    }).catch(err=>{console.log(err)})
 }

 function SelectUser(id){
    console.warn(data[id-1]);
    setName(data[id-1].name);
     setEmail(data[id-1].email);
     setAddress(data[id-1].address);
 }

 function UpdateUser(id){
    axios.put(`http://localhost:3000/data/${id}`,{name:name,email:email,address:address}).then(res=>{
    console.log(res);
}).catch(err=>{console.log(err)});
setName('');
    setEmail('');
    setAddress('')
 

 }
  return (
    <div className="container">
        <div className="col-md-10 ml-5">
            <table className="table table-bordered">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td className="text-center">Delete user</td>
                </tr>
                {
                    data.map(userValue=>(
                        <tr key={userValue.id}>
                            <td>{userValue.id}</td>
                            <td>{userValue.name}</td>
                            <td>{userValue.email}</td>
                            <td>{userValue.address}</td>
                            <button className='btn btn-danger ml-5 mt-2' onClick={()=>DelData(userValue.id)}>Delete</button>
                            <button className='btn btn-info ml-5 mt-2' onClick={()=>SelectUser(userValue.id)}>Update</button>
                            <button className='btn btn-success ml-5 mt-2' onClick={()=>UpdateUser(userValue.id)}>UpdateUser</button>

                        </tr>
                    ))
                }
            </table>
        </div>
    {/* <div className="container "> */}
      <div className="col-sm-6 col-md-6 offset-md-3 form-field rounded border border-dark mt-5 bg-light">
        <h5 className="text-center">Add New User Here</h5>
        <form onSubmit={PostData}>
          <div className="mb-4 ">
            <label>Name:</label>
            <input
              type="text"
              className="form-control form-control_input"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control form-control_input"
              placeholder="enter email_id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Address:</label>
          <input
              type="text"
              className="form-control form-control_input"
              placeholder="enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2 text-center">
            <button
             className="btn btn-primary">
             Add new User
            </button>
            </div>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default Userinfo;
