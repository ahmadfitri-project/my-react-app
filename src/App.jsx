import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            DEV.PORTFOLIO
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center min-vh-75 py-5">
            <div className="col-lg-8">
              <p className="text-primary fw-semibold">
                SENIOR WORDPRESS DEVELOPER
              </p>

              <h1 className="display-3 fw-bold mb-4">
                Building websites
                <br />
                that work.
              </h1>

              <p className="lead text-secondary mb-4">
                I build responsive, user-friendly websites
                using WordPress, PHP, Bootstrap and modern
                web technologies.
              </p>

              <a href="#projects" className="btn btn-primary btn-lg">
                View my projects
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="fw-bold">About me</h2>
            </div>

            <div className="col-lg-8">
              <p className="text-secondary">
                I am a web developer focused on building
                accessible, responsive and maintainable
                websites. My experience includes WordPress,
                custom theme development, PHP, ACF and
                Bootstrap.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-4">
                {['WordPress', 'PHP', 'Bootstrap 5', 'ACF', 'jQuery', 'React'].map(
                  (skill) => (
                    <span key={skill} className="badge text-bg-light border p-2">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="fw-bold mb-4">Selected projects</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="project-preview corporate-preview">
                  <span>Corporate Website</span>
                </div>

                <div className="card-body p-4">
                  <h3 className="h5 fw-bold">Corporate Website</h3>
                  <p className="text-secondary">
                    A responsive corporate website built
                    with WordPress and Bootstrap.
                  </p>
                  <span className="badge text-bg-light border">
                    WordPress · Bootstrap
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="project-preview property-preview">
                  <span>Property Website</span>
                </div>

                <div className="card-body p-4">
                  <h3 className="h5 fw-bold">Property Website</h3>
                  <p className="text-secondary">
                    A property website featuring custom
                    content management and responsive layouts.
                  </p>
                  <span className="badge text-bg-light border">
                    WordPress · ACF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-3">Let's work together</h2>
          <p className="text-secondary">
            Have a project in mind? Get in touch.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="btn btn-primary"
          >
            Contact me
          </a>
        </div>
      </section>

      <footer className="border-top py-4">
        <div className="container text-center text-secondary small">
          © 2026 Developer Portfolio. Built with React.
        </div>
      </footer>
    </>
  )
}

export default App