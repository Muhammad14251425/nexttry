import { redirect } from 'next/navigation'
import React from 'react'

const Notfound = () => {

    redirect("/")

  return (
    <div></div>
  )
}

export default Notfound