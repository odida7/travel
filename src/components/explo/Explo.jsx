import React from 'react'
import './explo.css'
import aa from '../../pic/aa.jpg'
import bb from '../../pic/bb.jpg'
import d from '../../pic/d.jpg'
import l from '../../pic/l.jpg'
import m from '../../pic/m.jpg'
import n from '../../pic/n.jpg'
import p from '../../pic/p.jpg'
import t from '../../pic/t.jpg'

export default function Explo() {
  return (
    <div className='explo'>
      <div className="contain">
        <div className="extop">
            <h1>LifeStyle</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor accusantium possimus eius inventore ab quia dolore repellendus vero libero velit labore laudantium quod sunt quasi odit, non sed asperiores.</p> 

            
             
                     
        </div>
         
          <label className='lb'>
            <input type='text' placeholder='search destination' className='sh-inpt'/>
            <button className='sh-bt'>search</button>
          </label>

           <div className='activ'> 
           <h1 style={{color: 'brown'}}>Activities you can do while on a trips</h1> 

           <hl className='rh'></hl>
           </div>
        <div className="grid">
         
          <div className="a1">
            <img src={aa} alt='' className='gd'/>
            <span1>Shoring in the skys</span1>
        
             <img src={bb} alt='' className='gd'/>
            <span2>Hot air baloon</span2>
          </div>

          <div className="a3">
             <img src={d} alt='' className='gd'/>
            <span1>Snow boarding</span1>
          
             <img src={l} alt='' className='gd'/>
            <span2>Suffing</span2>
          </div>

          <div className="a5">
             <img src={m} alt='' className='gd'/>
            <span1>Relaxing at the beach</span1>
         
             <img src={n} alt='' className='gd'/>
            <span2>Sea diving</span2>
          </div>

          <div className="a7">
             <img src={p} alt='' className='gd'/>
            <span1>Rock climbing</span1>
         
             <img src={t} alt='' className='gd'/>
            <span2>Exploring</span2>
          </div>
        
        </div>

      </div> 
    </div>
  )
}
