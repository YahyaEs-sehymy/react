import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Validation from './Validation'
export default function FormValidation(){
    const [values,setValues]= useState(
        {
            name:'',
            email:'',
            password:''
        }
    )
    const [errors,setErrors] = useState({}) 

    function handleInput(event){
        const newObj = {...values,[event.target.name]:event.target.value}
        setValues(newObj)
    }
    function handleValidation(event){
        event.preventDefault();
        setErrors (Validation(values)) ;
    }
    return (
        <div className='signup_container w-100 d-flex justify-content-center'>
            <div className='signup_form mt-5 w-50'>
                <h4>Form validation </h4>
                <div className='form mt-3'>
                    <form className='border p-3' onSubmit={handleValidation}>
                        <label for='name' className='mt-2'><strong>Name:</strong></label>
                        <input type='text' placeholder='entre name' name='name' className='form-control' onChange={handleInput}/>
                        {errors.name && <p style ={{color:"red"}} > {errors.name} </p>}

                        <label for='email' ><strong>Email:</strong></label>
                        <input type='email' placeholder='entre email' name='email' className='form-control' onChange={handleInput}/>
                        {errors.email && <p style ={{color:"red"}} > {errors.email} </p>}

                        <label for='password' className='mt-2'><strong>password:</strong></label>
                        <input type='password' placeholder='entre password' name='password' className='form-control' onChange={handleInput}/>
                        {errors.password && <p style ={{color:"red"}} > {errors.password} </p>}

                        <div className='mt-3'>
                            <button className='btn btn-success w-50'>validation</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
       
    )
}
