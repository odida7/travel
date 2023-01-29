import React from 'react'
import'./cont.css'
import x from '../../pic/x.jpg'


export default function Cont() {
  return (
    <div className='cont'>
      <h1>Contacts</h1>

      <div className="containa">
            
          <img src={x} alt='' className='left-p' />

          <div className="right-c">
            <label>
              <input type='text' placeholder='Name' className='c-inpt'/>

               <input type='email' placeholder='Email' className='c-inpt'/>
                <div className="cin">
                  <input type='text' placeholder='Message' className='m-inpt'/>
                </div>

                <button className='c-btn'>Submit</button>
               
            </label>

            
          </div>

      </div>
      
    </div>
  )
}
