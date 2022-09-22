import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={require("./../images/image-about-dark.jpg")} alt="dark" />
      <article>
        <h3>About our furniture</h3>
        <span>
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </span>
      </article>
      <img src={require("./../images/image-about-light.jpg")} alt="light"/>
    </footer>
  )
}

export default Footer