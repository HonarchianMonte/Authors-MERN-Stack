import React, {useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UpdateAuthor = () => {
  const navigate = useNavigate ()
  const [fullName, setFullName] = useState("")
  const [errors, setErrors] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(response=>{
        const author =response.data
        setFullName(author.fullName)
      })
      .catch(err=> console.log(err))
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/authors/${id}`, {fullName})
    .then(response=>navigate(`/`))
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
      <p className="text-success">Edit this author:</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label"> Author Full Name</label>
            <input type="text" className="form-control" name="fullName" onChange={(e) => setFullName(e.target.value)} value={fullName}></input>
          </div>
          <button type="submit" className='btn btn-success'>Edit Author</button>
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

export default UpdateAuthor