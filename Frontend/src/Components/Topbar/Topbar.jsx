import './Topbar.css'

export function Topbar() {
  return(
    <>
      <section className='topbar'>
        <div className='logo'>
          <i className="fa-solid fa-code logo-icon" />
          <p>
            CodeCraft
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
        <button className='btn-hire'>
          Hire Me
        </button>
      </section>
    </>
  )
}