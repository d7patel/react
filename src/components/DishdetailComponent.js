import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';




  function RenderDish({selectedDish}){
        if (selectedDish != null){
            return(
                <Card>
                    <CardImg top src = {selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle >{selectedDish.name}</CardTitle>
                        <CardText> {selectedDish.description}</CardText>
                    </CardBody>
                </Card> 
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({selectedDish}){
        if (selectedDish!=null){
            const dishComments= selectedDish.comments.map( (comm) =>{
                var commentDate= new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))

                return(
                    <ul className="list-unstyled">
                        <li>{comm.comment}</li> 
                        <li> {'-- '+comm.author +', '+commentDate}</li>  
                    </ul>
                );
            })
            return (
            <div>
                <h4>Comments</h4>
                {dishComments}
            </div>)
        }
        else{
            return (
                <div></div>
            );
        }
    }
    
    const DishDetail = (props) => {
        const selectedDish = props.dish;
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish selectedDish={selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments selectedDish={selectedDish} />
                    </div>
                </div>
            </div>
        );
    }


export default DishDetail