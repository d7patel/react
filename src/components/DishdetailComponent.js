import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


export class DishDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {  
            
        }
    }

    renderDish(selectedDish){
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

    renderComments(selectedDish){
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
    
    render() {
        const selectedDish = this.props.dish;
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selectedDish)}    
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail