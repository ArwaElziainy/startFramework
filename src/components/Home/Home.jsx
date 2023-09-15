import { useEffect } from 'react';
import './Home.css'
const Home = () => {

    useEffect(() => {
        document.title = 'Home'
    })

    return ( 
        <>
            <div className="home d-flex justify-content-center align-items-center text-white ">
                <div className='text-center'>
                    <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt='' className='mb-3' />
               
                <div className="star">
                    <div className='text-center pt-4 text-white'>
                        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className='line me-3 bg-white'></div>
                            <i className='fa-solid fa-star text-white'></i>
                            <div className='line ms-3 bg-white'></div>
                        </div>
                    </div>
                </div>
                <div className='pb-3'>
                    Graphic Artist - Web Designer - Illustrator
                    </div>
             </div>
        </div>
        </>
     );
}
 
export default Home;