import {Row,Col, Button} from 'react-bootstrap';


export const Category=({Filtering})=>{

    const Cliked=(catName)=>{
        Filtering(catName)
    }
    

const btnStyle={
    backgroundColor:'transparent',
    
    color:'#42032C',
    border: '1px solid #e45619',
    padding:' 5px',
    borderRadius: '5px '
};

    return(
        <>
        <Row >
           
            <Col sm="12" className="justify-content-center d-flex ">
            
                <div className="my-1 mb-5">
                
                <Button onClick= {()=> Cliked("الكل")}  style={btnStyle } className='btn-danger mx-2'> الكل </Button>
                <Button onClick= {()=> Cliked("عروض")} style={btnStyle } className='btn-danger mx-2'> عروض </Button>
                <Button onClick= {()=> Cliked("مشويات") } style={btnStyle } className='btn-danger mx-2'> مشويات </Button>
                <Button onClick={()=> Cliked("اضافات ومعجنات") } style={btnStyle } className='btn-danger mx-2'> اضافات ومعجنات </Button>
                <Button onClick={()=> Cliked("وجبات") } style={btnStyle } className='btn-danger mx-2'> وجبات </Button>
                
                </div>
                
            </Col>
           
        </Row>
        </>
    )
}