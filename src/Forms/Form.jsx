import { useState } from "react"

export default function Form(){
    const [name,setName]=useState('')
    const [age,setAge]=useState('')

    const handleNameInputChange=()=>{
const name = document.querySelector('#name').value
setName(name)
    };
    const handleAgeInputChange=()=>{
        const age = document.querySelector('#age').value
        setAge(age)
            };
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({
            name,
            age
        })
    }
    return (
        <>
<form>
    <input type="text" id='name' onChange={handleNameInputChange}  placeholder="nom"/>
    <input type="number" id='age' onChange={handleAgeInputChange} placeholder="age" />
    <input type="submit" onClick={handleSubmit} value={SubmitEvent='submit'}/>
</form>
        </>
    )
}