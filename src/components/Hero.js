import React from 'react'
import data from '../data'

const Hero = ({handleClick}) => {
  const [counter,setCounter] = React.useState(0)

  function increase() {
    if(counter===2)
    setCounter(0)
    else
    setCounter(prev=>++prev)
  }
  function decrease() {
    if(counter.current===0)
    setCounter(2)
    else
    setCounter(prev=>--prev)
  }

  return (
    <article className='hero-sec'>
      <img src={require('./../images/'+data[counter].src)} alt='sasa'/>
      <section> 
        <h1>{data[counter].Header}</h1>
        <p>{data[counter].Paragragh}</p>
        <div className='shop'><span>SHOP NOW</span>
        <img src={require('./../images/icon-arrow.svg').default } alt="arrow"/>
        </div>
        <div className='move-arrow'>
        <img onClick={() => {decrease(); handleClick(counter)}} 
        src={require('./../images/icon-angle-left.svg').default } alt="arrow"/>
        <img onClick={() => {increase(); handleClick(counter)}} 
        src={require('./../images/icon-angle-right.svg').default } alt="arrow"/>
        </div>
      </section>
    </article>
  )
}

export default Hero