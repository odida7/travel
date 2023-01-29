import React from 'react'
import a from '../../pic/a.jpg'
import b from '../../pic/b.jpg'
import c from '../../pic/c.jpg'
import d from '../../pic/d.jpg'
import e from '../../pic/e.jpg'
import f from '../../pic/f.jpg'
import g from '../../pic/g.jpg'
import h from '../../pic/h.jpg'
import vid from '../../pic/sk.mp4'
import './hmtop.css'
import {useState} from 'react';

export default function Hmtop() {

  const [currentSlide, setCurentSlide] = useState(0)

    const prevSlide = () => {
        setCurentSlide(currentSlide === 0 ? 2 : (prev)=>prev - 1);
    }
    const nextSlide = () => {
        setCurentSlide(currentSlide === 2 ? 0 : (prev)=>prev + 1);
    }
 


  return (
    <div className='hmtop'>
      <div className="container">
        
          <img src={a} alt='' className='bgpic' />

        <div className="right">
          <h1>A journey beyond the guidebook</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporibus doloremque possimus cupiditate atque quos 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita voluptatum itaque ipsam illum fuga non blanditiis quas fugiat perferendis tenetur explicabo quaerat quia modi veniam harum, sit nisi. Quisquam!
          </p>
      
        </div>
      </div>

      <div className="slider">
        <h1>Top destinations</h1>
      <div className="wrapper" style={{transform: `translateX(-${currentSlide * 50}vw)`}}>
        <div className="card">
          <img src={a} alt='' className='c-pic'/>
          <span>skylines of New York city</span>
        </div>
        <div className="card">
          <img src={b} alt='' className='c-pic'/>
          <span>Luxurious hotels in Dubia</span>
        </div>
        <div className="card">
          <img src={c} alt='' className='c-pic'/>
          <span>Paris city of ramance</span>
        </div>
        <div className="card">
          <img src={d} alt='' className='c-pic'/>
          <span>Alaska white mountains</span>
        </div>
        <div className="card">
          <img src={e} alt='' className='c-pic'/>
          <span>Beaches of Cuba</span>
        </div>
        <div className="card">
          <img src={f} alt='' className='c-pic'/>
          <span>Medditerinian sea</span>
        </div>
        <div className="card">
          <img src={g} alt='' className='c-pic'/>
          <span>Glass pyramid in France</span>
        </div>
        <div className="card">
          <img src={h} alt='' className='c-pic'/>
          <span>Palm islands of Dubia</span>
        </div>
      </div>
       <div className='bn'>
        <button className='sl' onClick={prevSlide}>L</button>
        <button className='sl' onClick={nextSlide}>R</button>
      </div>

      </div>

      <div className="detail">
        <div className="over"></div>
         <video src={vid} autoPlay loop muted classname='vd'/> 
         <div className="content">
          <h1>What will be your next destination!</h1>

          <div className="cd">
          <div className="cad">
            <h2>solo Trip</h2>
            <hr className='hl'></hr>
            <p>
              You don't need a patner to travel the globe. learn how to feel confident while mastering the art of travelling solo.
            </p>
            <button className='btn b-c'> LEARN MORE</button>
          </div>

          <div className="cad">
            <h2>Guide Book</h2>
            <hr className='hl'></hr>

            <p>
              Wondering where you should go on your next trip? 
              Take this fun & free quiz to discover unique experiences and trips tailored to your personality.
            </p>
            <button className='btn b-c'> LEARN MORE</button>
          </div>

          <div className="cad">
            <h2>travel Blog</h2>
            <hr className='hl'></hr>

            <p>
             Learn how to turn your passion for exploration into a profitableindependent business through blogging in this free video course.
            </p>
            <button className='btn b-c'> LEARN MORE</button>
          </div>
          </div>
          
         </div>
      </div>
    </div>
  )
}
