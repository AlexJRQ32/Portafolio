import './Topbar.css'

export function Topbar() {
  return(
    <>
      <section className='topbar'>
        <div className='logo'>
          <span className='logo-badge'>
            <i className="fa-solid fa-rocket logo-icon" />
          </span>
          <p>
            Alex Roblero
          </p>
        </div>
        <nav className='navbar'>
          <ul>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                About
              </a>
            </li>
            <li>
              <a href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a href="#contact" className='btn-hire'>
          Hire Me
        </a>
      </section>
    </>
  )
}