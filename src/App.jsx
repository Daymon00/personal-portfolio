import './App.css';
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About Me</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="home" className="section">
        <h1>Welcome to My Personal Website</h1>
        <p>Hey, I’m Daymon Wu, a recent Computer Science graduate from Queens College, and 
            I’m diving headfirst into software engineering. I’ve spent the last few years 
            working in IT support and technical operations, which gave me a solid understanding 
            of how systems work and how to fix them. Now, I’m channeling that experience into 
            coding and development, with a focus on building back-end systems and automating processes.
            At Mintz & Gold LLP, I supported a team of over 75 people, solving technical problems 
            and improving workflows. That role really sharpened my problem-solving skills and 
            gave me a deep appreciation for efficient systems. Now, I’m applying those skills 
            to software development, where I’m comfortable working with languages like Python 
            and Java, and frameworks like Django. I’m also diving deeper into cloud services 
            like AWS and learning how to implement CI/CD pipelines.
    
            Currently, I’m working on building web applications and backend 
            services in my free time, and I’m always looking to improve my skills. 
            My goal is to create clean, scalable, and maintainable software that can solve 
            real-world problems.
            
            I’m excited about the future and where software engineering can take me, 
            and I’m eager to contribute to innovative projects. </p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>Detail your background, skills, and experiences here.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Description of your first project.</li>
          <li>Project 2: Description of your second project.</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Contact me at [Your Email]</p>
      </section>
    </div>
  );
}

export default App;
