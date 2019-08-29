import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class TodoList extends React.Component{
    state = {
        list: []
    }

    server = 'http://localhost:5000/';

    componentDidMount() {
        axios(`${this.server}`)
        .then((res) => {
            console.log(res.data)
            this.setState({
                list: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }


    renderTodo =  () => {
        const {list} = this.state;
        return list.map((item) => {
            return (
                <li key = {item.id}>{item.title}</li>
            )
        })
    }


    render(){
        return(
            <div>
                <h1>TodoList</h1>
                <div className = "col-md-6"> 
                    <ul style = {{border: 1}}>
                        {this.renderTodo()}
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    idAdding: state.todo
})

export default connect(mapStateToProps, {})(TodoList);