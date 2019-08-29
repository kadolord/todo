import React from 'react';
import {connect} from 'react-redux';
import {

    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Input,
    Label,
    Button
} from 'reactstrap';
//Actions
import {addItem} from '../actions/todoAction';
import TodoList from './todoList';


class Todo extends React.Component {

    state = {
        todo: ''
    }

    handleInput = ({target}) => {
        this.setState({
            todo: target.value
        })
    }   

    addItemButton = () => {
        const todo = this.state.todo;
        this.props.addItem(todo);
    }

    render(){
        console.log(this.props.isAdding)
        return(
            <Container className = "container pt-5">
                <div className  = "form-group row">
                    <Label className = "mr-2">Title: </Label>
                    <Input className  = "col-md-6" type = "text" value = {this.state.todo}  onChange = {(e) => this.handleInput(e)} />
                    <div>
                        <Button onClick = {this.addItemButton} className = "btn btn-success ml-3">Add Item</Button>
                    </div>
                </div>
                

                <TodoList />
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    idAdding: state.todo
})

export default connect(mapStateToProps, 
    {addItem}
)(Todo);
