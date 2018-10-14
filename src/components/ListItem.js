import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { startToggleTodo, startRemoveTodo } from '../redux/actions/todos';

const ListItemContainer = styled.View`
  flex: 1;
  height: 50px;
  justify-content: space-between;
  color: black;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: #212121;
  flex-direction: row;
`;

const ItemTitleContainer = styled.TouchableOpacity`
  flex: 7;
  justify-content: center;
`;

const ItemTitle = styled.Text`
  text-align: left;
  align-content: center;
  padding-left: 15;
  text-decoration: ${props => (props.completed ? 'line-through' : '')};
`;

const IconContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListItem = ({
  todo, toggleTodo, deleteTodo, onTodoDetailsPressed,
}) => (
  <ListItemContainer>
    <ItemTitleContainer onPress={() => toggleTodo(todo.id, todo)}>
      <ItemTitle completed={todo.completed}>
        {todo.title.length > 20 ? `${todo.title.substr(0, 15)}...` : todo.title}
      </ItemTitle>
    </ItemTitleContainer>
    <IconContainer onPress={() => deleteTodo(todo.id)}>
      <Icon name="trash" color="#ED5454" size={18} />
    </IconContainer>
    <IconContainer onPress={onTodoDetailsPressed}>
      <Icon name="angle-right" color="gray" size={18} />
    </IconContainer>
  </ListItemContainer>
);

ListItem.propTypes = {
  todo: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  onTodoDetailsPressed: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleTodo(id, todo) {
    dispatch(startToggleTodo(id, todo));
  },
  deleteTodo(id) {
    dispatch(startRemoveTodo(id));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ListItem);
