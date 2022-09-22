import React from 'react'

const Nav = () => {

  const [closed,setClosed] = React.useState(true)

  function handleClick(){
    setClosed(false)
  }
  
  function handleClose() {
    setClosed(true)
  }

  return (
    <nav className={`nav-bar ${closed?'':'res-nav'}`}>
      {!closed && <img src={require("./../images/icon-close.svg").default} onClick={handleClose} className="menu" alt="logo"/>}
      {closed&&<img src={require("./../images/icon-hamburger.svg").default} onClick={handleClick} className="menu" alt="logo"/>}
      <img src={require("./../images/logo.svg").default} className={`logo ${closed?'':'res-logo'}`} alt="logo"/>
      <article className={`${closed?'':'res-menu'}`}>
        <span>Home</span>
        <span>Shop</span>
        <span>About</span>
        <span>Contact</span>
      </article>
    </nav>
  )
}

export default (Nav)