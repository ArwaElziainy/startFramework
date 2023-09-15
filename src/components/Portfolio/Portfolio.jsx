import "./Portfolio.css"
import { useEffect } from "react"
const Portfolio = () => {
    useEffect(() => {
        document.title = 'Portfolio'
    }, [])
    
   
    
  


    return ( 
        <>
            <div className=" mb-4">
                <div className=" pt-4">
                    <div className="star">
                        <div className="text-center pt-4">
                            <h2 className=' text-uppercase mb-3 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
                            <div className='d-flex align-items-center justify-content-center mb-3'>
                                <div className='line me-3'></div>
                                <i className="fa-solid fa-star"></i>
                                <div className='line ms-3 '></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6">
                                <div  className=" image-container position-relative rounded-3 overflow-hidden">
                                    <img  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"  className=" w-100 rounded-3" alt="home" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center " >
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-6">
                                <div  className="image-container position-relative rounded-3 overflow-hidden">
                                    <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className=" w-100 rounded-3" alt="cake" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div  className="col-lg-4 col-md-6">
                                <div className="image-container position-relative rounded-3 overflow-hidden">
                                    <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className=" w-100 rounded-3" alt="circus" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div  className="col-lg-4 col-md-6">
                                <div className="image-container position-relative rounded-3 overflow-hidden">
                                    <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className=" w-100 rounded-3" alt="home" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div  className="col-lg-4 col-md-6">
                                <div className="image-container position-relative rounded-3 overflow-hidden">
                                    <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className=" w-100 rounded-3" alt="cake" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div  className="col-lg-4 col-md-6">
                                <div className="image-container position-relative rounded-3 overflow-hidden">
                                    <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className=" w-100 rounded-3" alt="circus" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                        </div>  
                        <div className="bg-overlay position-fixed start-0 w-100 h-100 top-0 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
                        <img src="" className="rounded-3" alt="home" />
                    </div>
                    </div>
                    
                </div>
                
            </div>
            
        </>
     );
}
 
export default Portfolio;