import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


import './style.css'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const title = this.state.title;
        if (title) {
            this.props.onAdd(title);
        }
    }

    handleChange = event => {
        const title = event.target.value;
        this.props.onFilted(title);
        this.setState({ title });
    }

    render() {
        return (
            <form className="todo-add-form" onSubmit={this.handleSubmit}>
                <TextField
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <Button variant="fab" color="primary" aria-label="Add" >
                  <AddIcon />
                </Button>
            </form>
        );
    }
}

export default Form;