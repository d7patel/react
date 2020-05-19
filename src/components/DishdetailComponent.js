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
                <Card key={selectedDish.id}>
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
                var commentDate= new Date(comm.date)

                return(
                    <ul className="list-unstyled">
                        <li>{comm.comment}</li> 
                        <li> {'-- '+comm.author +', '+commentDate.toDateString().slice(4, 15)}</li>  
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
        const selectedDish = this.props.selectedDish;
        
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(selectedDish)}    
                </div>
            </div>
        );
    }
}

export default DishDetail