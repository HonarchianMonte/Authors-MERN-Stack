import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, Link, useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const [authorList, setAuthorList] = useState()
  const navigate = useNavigate ()
  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors`)
      .then(res => {
        setAuthorList(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleDelete =(deleteId)=>{
    axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
      .then(response=>{
        const filterList = authorList.filter((author)=>author._id !== deleteId)
        setAuthorList(filterList)
      })
      .catch(err=> console.log(err))
  }

  return (
    <div>
      <Link to="/new"> Add an author</Link>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th> Author </th>
            <th colSpan={2}> Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            authorList && authorList.map((eachAuthor, i)=>{
              return(
                <tr key={i}>
                  <td> {eachAuthor.fullName}</td>
                  <td><Link to={`/edit/${eachAuthor._id}`} className="btn btn-primary"> Edit</Link></td>
                  <td> <button onClick={()=>handleDelete(eachAuthor._id)} className="btn btn-primary"> Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DashboardPage