import img1 from './intro1.png'
import img2 from './intro2.png'
import './intro.css'

const Intro = ()=> {
    return(
        <div className="intro">
            <h1>Saar Healthcare</h1>
            <p>Pain Free New Beginning.</p>

            <div className="intro-des">
            <div className="intro-text">
            <h2>We help you deal with</h2>
            <p>
            Osteoarthritis<br/>
            Frozen shoulder<br/>
            Sports injury<br/>
            Knee pain, Ankle pain<br/>
            Cervical spondylitis<br/>
          And many more...</p>
          </div>
          <div className="image">
            <img alt="img" src={img1}/>
            <img alt="img" src={img2}/>
          </div>
          </div>
        </div>
    )

}

export default Intro;