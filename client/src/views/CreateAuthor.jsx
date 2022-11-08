import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAuthor = () => {
  const navigate = useNavigate ()
  const [fullName, setFullName] = useState("")

  const [errors, setErrors] = useState([])

  const handleSubmit =(e) =>{
    e.preventDefault()
    axios.post(`http://localhost:8000/api/authors`, {fullName})
      .then(res=>navigate("/"))
      .catch(err=> {
        const errorResponseDataErrors = err.response.data.errors
        console.log(errorResponseDataErrors)
        const errMsgArr =[]
        for(const eachKey in errorResponseDataErrors){
          errMsgArr.push(errorResponseDataErrors[eachKey].message)
        }
        setErrors(errMsgArr)
      })
  };

  const handleCancel =() =>{
    navigate('/')
  };
  return (
    <div>
      <p className="text-success">Add a new author:</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label"> Author Full Name</label>
            <input type="text" className="form-control" name="fullName" onChange={(e) => setFullName(e.target.value)} value={fullName}></input>
          </div>
          <button type="submit" className='btn btn-success'>Submit</button>
          <button type="button" className='btn btn-primary' onClick={handleCancel}>Cancel</button>
        </form>
        {
          errors.map((eachErr, i)=>(
            <p key={i} style={{color: "red"}}> {eachErr}</p>
          ))
        }
    </div>
  )
}

export default CreateAuthor