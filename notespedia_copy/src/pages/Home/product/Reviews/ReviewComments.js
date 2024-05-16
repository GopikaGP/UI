import React from "react";


import { AiFillStar } from "react-icons/ai";
import { Button, Container } from "react-bootstrap";


const Comments = () => {

    return (
<Container>
        <div>

            <hr />
            <div className="d-flex-circle-round">
                <div className="circle"></div>
                <p className="keira-miki">Keira Miki</p>
            </div>
            <div >
                <span style={{color:'#05CF64',fontSize:'12px'}} ><AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </span>
                <span  style={{fontSize:'12px',paddingLeft:'5px'}}>2 hours ago</span>


            </div>
            <div>
                <p>A book about mental illness, don't read it</p>




            </div>
            
        </div>

</Container>

    )


}
export default Comments;