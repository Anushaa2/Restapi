import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from './config'

const Posts = () => {
  const [posts, setPost] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/posts`)
      .then(res => setPost(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="container">
        <div className="row d-flex px-2">

          {posts.map((p, i) => (
            <div className="col-md-4 p-2 shadow" key={i}>
              <h2>{p.title}</h2>
              <p>{p.url}</p>
              <p>Vote Count : {p.votes}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Posts