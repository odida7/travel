import React from 'react'
import './scrol.css'
import { useState, useEffect } from 'react'

export default function Scrol() {

  const[show, setShow] = useState(false)

  useEffect (()=>{
    window.addEventListener('scroll', ()=> {
      if(window.scrollY > 250) {
        setShow(true)
      }else{
        setShow(false)
      }
    })
  }, [])

  const scrollTop =()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='scrol'>
      {show && 
      <button className='bt' onClick={scrollTop}>
         <i class="uil uil-angle-up"></i>
      </button>}
    </div>
  )
}
