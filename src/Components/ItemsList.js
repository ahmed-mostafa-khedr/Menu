import { Row, Col , Card} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Zoom from 'react-reveal/Zoom';

export const ItemsList = ({ itemsData })=> {

  return (
    <>
    {
      itemsData.length ? (
        itemsData.map(item =>{
        return(
          <>
         
          <Row key={item.id} className="justify-content-center mb-2" >
          <Zoom >
            {
        <Col sm="12">
        <Card style= {{ height:'11rem' ,position:"relative" , backgroundColor:"#f1efdc60"}}>
    <div className='d-flex'>
    <Card.Img style={{ width: '20%', height:'100%' ,position:"absolute" }} src={item.url} />
    <Card.Body  style={{position:"relative" }}>
                <div className='d-flex justify-content-between'>
                <Card.Title style={{textAlign:"center",color:"#42032C" , marginRight:"20%"}}> {item.mealName} </Card.Title>
              <div style={{ color:"#e45619" }} ><b>price:</b> <i>{item.price} </i><sup >LE</sup></div>
              </div>
              <Card.Text style={{color:"black" ,opacity:"0.6" ,marginTop:"8px" ,marginRight:"20%",fontSize:"10px" }}>
              {item.details}
              </Card.Text>
              
            </Card.Body>
            </div>
          </Card>
          </Col>
          }
          </Zoom>
          </Row>
          </>
        )
      })
    ): <Alert  variant="danger" className='fonts-family'> معزرة! <br/>جاري اضافه بعض الوجبات الجديده.....</Alert>
    
    
    
    }

          

          
    </>
  );
}

