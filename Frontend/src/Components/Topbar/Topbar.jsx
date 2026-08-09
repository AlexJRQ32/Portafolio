import './Topbar.css'

export function Topbar() {
  return(
    <>
      <section className='topbar'>
        <div className='logo'>
          <svg className='logo-icon' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <p>
            CleanCode
          </p>
        </div>
        <nav className='navbar'>
          <ul>
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#About">
                About
              </a>
            </li>
            <li>
              <a href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#Blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className='btn-purple'>
          Hire Me
        </button>
      </section>
    </>
  )
}