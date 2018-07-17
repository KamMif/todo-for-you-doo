import React from 'react';

import Todo from '../todoItem/Todo';

const List = ({ filtredTodo, onToggle }) => {
    return (
        <section className="todo-list">
            {filtredTodo.map(todo =>
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onToggle={onToggle}
                />
            )}
        </section>
    )
}

export default List;
