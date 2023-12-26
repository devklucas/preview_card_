import art from './assets/illustration-article.svg'
import profile from './assets/image-avatar.webp'
import './App.css'

function App() {
  return (
    <main>
      <div className='contentbox'>
      <img src={art} alt="illustration article" className='illustration'/>
        <section className='tagButton'>Learning</section>
        <span className='datapublished'>Published 21 Dec 2023</span>
        <a href="/" className="link">HTML & CSS foundations</a>
        <span className='description'>These languages are the blackbone of every defining structure, content, and presentation</span>
        <div className='infoprofile'>
          <img src={profile} alt="profile" />
          <p>Greg Hooper</p>
        </div>
      </div>
      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.linkedin.com/in/devklucas/">Devklucas</a>.
      </div>
     
    </main>
  )
}

export default App
/*

*/