import React, { useState } from "react";
import "./Todolist.css";
function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData,setListData]=useState([]);
  function addActivity(){
     setListData((dataVal)=>{
      const updatedList=[...dataVal,activity];
      console.log(dataVal);
      setActivity('')
      return updatedList;
     })
    
    }
    function RemoveData(index){
      const RemoveListData=listData.filter((elem,id)=>{
        return index!=id;
      })
      setListData(RemoveListData);
      console.log('function remove');
      // dataVal.clear();
  }
  function RemoveAll(){
    setListData([])
  }
  return (
    <div className="container">
      <div className="header">TODOLIST</div>
        <input
          type="text"
          placeholder="add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className='add_button' onClick={addActivity}>Add</button>
           <p className="list_heading">You can see your list Here:{")"}</p> 
          {
            listData.map((data,index)=>(
              <div> <p key={index} onClick={()=>RemoveData(index)} className='textBox_css'>{data}</p>
              {/* <button  className='Remove_css' onClick={()=>RemoveData(index)}>Remove(-)</button> */}
              </div>
              
            ))
          }
        <button className="add_button" onClick={()=>RemoveAll()}>Remove All</button>
      </div>
    
  );
}

export default Todolist;
