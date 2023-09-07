import React from "react"
import InputRegister from "../components/InputRegister"
import Footer from "../components/Layout/Footer"

function RegisterPage() {
const image1 = "../public/images/float.jpg"
  return (
    <>
  <div className="container flex mx-auto m-14 justify-center">
<div className="w-96 my-auto  ml-[-5rem]"><img src={image1} alt="image"/></div>
<div className="ml-[5rem]"><InputRegister/></div>
  </div>
<div className="mt-5"><Footer/></div>
    </>
  )
}

export default RegisterPage
