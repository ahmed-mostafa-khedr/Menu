import Row from 'react-bootstrap/Row';
import Jump from 'react-reveal/Jump';


export const Header=()=>{
    return(
        <>
        <Row className="justify-content-center pt-3">
            <div className="col-12 fonts-family text-center header-text">
               <Jump> قائمه الطعام </Jump>
               </div>
        </Row>

        <Row  className=" justify-content-center">
            <div className='col-1 '>
                <p className='underline hr-one mt-2'></p>
            </div>
                    
        </Row>

        </>
    )
}