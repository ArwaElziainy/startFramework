import { useEffect } from 'react';
import './Notfound.css'
const NotFound = () => {

    useEffect(() => {
        document.title = 'Not Found'
    },[])

    return ( 
        <>
            <div className="notfound text-center d-flex justify-content-center align-items-center">
                <div className="container">
                    <h1>404</h1>
                    <h2>Not Found</h2>
                </div>
                

            </div>
        </>
     );
}
 
export default NotFound;