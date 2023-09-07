import React from "react"
import InputLogin from "../components/InputLogin"
import Footer from "../components/Layout/Footer"

function LoginPage() {
const image1 = "../public/images/float2.jpg"
  return (
    <>
  <div className="container flex mx-auto m-10 justify-center">
<div className="w-96 my-auto  ml-[-5rem]"><img src={image1} alt="image"/></div>
<div className="ml-[5rem]"><InputLogin/></div>
  </div>
<div className="mt-5"><Footer/></div>
    </>
  )
}

export default LoginPage
