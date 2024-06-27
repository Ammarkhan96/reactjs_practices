import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()

  const delay = (d) => {
      return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve()
        }, d * 1000)
      })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {method: "POST",headers:{
      "Content-Type": "application/json",
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== "ammar"){
    //   setError("myForm",{message: "Your form is not in good order because credentials are invalid"})
    // } if(data.username === "kashif"){
    //   setError("blocked", {message:"Sorry this user is blocked"})
    // }
  }

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input className="px-5 py-3 border border-grey-300"
            placeholder='username' {...register("username", {
              required: { value: true, message: "This field id requires" },
              minLength: { value: 3, message: 'Min length is 3' },
              maxLength: { value: 8, message: 'Max length is 8' }
            })}
            type="text" />
          {errors.username && <div className="text-red-500">{errors.username.message}</div>}
          <br />

          <input className="px-5 py-3 border border-grey-300"
            placeholder='password' {...register("password", {
              minLength: { value: 7, message: 'Min length of Password is 7' }
            })} type="password" />
            {errors.password && <div className="text-red-500">{errors.password.message}</div>}
          <br />

          <input disabled={isSubmitting} className="px-5 py-3 font-montserrat border border-grey-300 ml-2
       hover:bg-blue-500 hover:text-white"
            type="submit" value="Submit" />
            {errors.myForm && <div className="text-red-500">{errors.myForm.message}</div>}
            {errors.blocked && <div className="text-red-500">{errors.blocked.message}</div>}
          <br />
        </form>
      </div>
    </>
  )
}

export default App
