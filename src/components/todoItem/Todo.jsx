import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import './style.css';

class Todo extends React.Component {

    handleToggle = () => {
        this.props.onToggle(this.props.id);
    }

    render() {
        return (
            <div className={`todo_item ${this.props.completed ? 'complet' : 'noComplete'}`}>
                <Checkbox  defaultChecked color="default" checked={this.props.completed} onChange={this.handleToggle} />
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default Todo;