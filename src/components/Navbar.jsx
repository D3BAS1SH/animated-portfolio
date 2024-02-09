import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="wrapper">
        {/* Sidebar */}
        <span>Debasish</span>
        <div className="social">
          <a href='#'><img src='/facebook.png' alt='facebook'/></a>
          <a href='#'><img src='/instagram.png' alt='instagram'/></a>
          <a href='#'><img src='/youtube.png' alt='youtube'/></a>
          <a href='#'><img src='/dribbble.png' alt='dribble'/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar