import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavScrollExample from './Components/Nav-Bar'
import {Header} from './Components/Header'
import {Category} from './Components/Category'
import Container from 'react-bootstrap/Container';
import {ItemsList}  from './Components/ItemsList';
import  {AllItems}  from './Components/data';
import {useState} from 'react'

function App() {

  const [itemsData,setItemsData]= useState(AllItems);

//filter by categort
  const Filtering =(categoryName)=>{
    if (categoryName === "الكل" ){
      setItemsData(AllItems)
    }else{
    const matchCategory = AllItems.filter(item => item.category === categoryName )
    setItemsData(matchCategory)
  }
  }
//serch by name
  const Searching =(itemName)=>{
    if (itemName){
      const matchName = AllItems.filter(item => item.mealName === itemName )
      setItemsData(matchName)
    }else{
      setItemsData([])

  }
  }
  return (
    <>
    <div className='nav-bar-css fonts-family'>
      <NavScrollExample Searching={Searching}/>
    </div>
    
    <Container >
    <Header/>
    <Category Filtering={Filtering}/>
    <ItemsList itemsData= {itemsData} />
    </Container>

    </>
  );
}

export default App;
