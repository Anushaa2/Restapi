import {React,useState} from 'react'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { API_URL } from './config'


const Signup = () => {
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=async e=>{
        e.preventDefault()
        try{
            const{data} =await axios.post(`${API_URL}/signup`,{
                username,
                password
            })
            toast.success('Account created')
            setUserName('')
            setPassword('')

        }
        catch(err){
            toast.error(err.response.data.error)
        }
    }
  return (
    <>
    <ToastContainer position='top-center' theme='colored'/>
    <div className="container mt-3">
        <div className="row d-flex justify-content-center">
            <div className="col-md-5">
                <form className='mb-2'>
                   <div className="mb-2">
                   <label htmlFor='uname'>Username</label>
                    <input type='text' name='uname' id='uname' className='form-control' required 
                    onChange={e=>setUserName(e.target.value)} value={username} />
                
                   </div>
                   <div className="mb-2">
                   <label htmlFor='pwd'>Password</label>
                    <input type='passsword' name='pwd' id='pwd' className='form-control' required 
                    onChange={e=>setPassword(e.target.value)} value={password} />
                
                   </div>
                   <div className="mb-2">
                  <button className='btn btn-primary' onClick={handleSubmit}>Signup</button>
                   </div>


                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup