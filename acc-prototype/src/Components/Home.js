import React ,{useEffect} from 'react';
import { Container,Button} from "reactstrap";
const Home=()=>{
    useEffect(()=>
    {
        document.title ="Home - Learn Courses";
    },[]);
return (
    <div>
  
    <h2>Add and Verify Initial Property Transactions </h2>
    <p>This site is developed as a  prototype</p>
  
    </div>
)
}

export default Home;