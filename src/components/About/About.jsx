import './About.css'
import { useEffect } from 'react';
const About = () => {

    useEffect(() => {
       document.title = 'About' 
    },[])
    return ( 
        <>
            <div className="about d-flex justify-content-center align-items-center">
                <div>
                    <div className="star">
                        <div className='pt-4 text-center text-white'>
                            <h2 className='mb-3 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
                            <div className='d-flex align-items-center justify-content-center mb-3'>
                                <div className='line me-3 bg-white'></div>
                                <i className="fa-solid fa-star text-white"></i>
                                <div className='line ms-3 bg-white'></div>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row px-5">
                            <div className="col-md-6 ps-md-5">
                                <p className='fw-bold'>Freelancer is a free bootstrap theme created by Route. The download includes the complete
                                    source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                                    easy customization.</p>
                            </div>
                            <div className="col-md-6 pe-5">
                                <p className='fw-bold'>Freelancer is a free bootstrap theme created by Route. The download includes the complete
                                    source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                                    easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;