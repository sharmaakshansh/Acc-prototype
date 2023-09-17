import React from "react";
import {Card, CardBody } from "reactstrap";

function Header({ name ,title})
{
    
    return(
        <div >
            <Card className="my-1" color="warning">
                <CardBody>
                <h1 className="text-center my-3" >Welcome to Online-Byana.com</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}
export default Header;