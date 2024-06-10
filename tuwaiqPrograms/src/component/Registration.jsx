
import img1 from '../component/course-step-1.png'
import img2 from '../component/course-step-2.png'
import img3 from '../component/course-step-3.png'

function Registration(props) {
  return (
    <div className="reg">
    <h1 className='title'>{props.title}</h1>
    <div className='lastSection'>
      <div className='step'>
        <img className='images' src={img1} alt="Step 1" />
        <h4 className='titR'>{props.join}</h4>
      </div>
      <div className='step'>
        <img className='images' src={img2} alt="Step 2" />
        <h4 className='titR'>{props.registration}</h4>
      </div>
      <div className='step'>
        <img className='images' src={img3} alt="Step 3" />
        <h4 className='titR'>{props.message}</h4>
      </div>
    </div>
    </div>     
   
  )
}

export default Registration
