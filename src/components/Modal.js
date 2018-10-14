import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

const Container = styled.View`
  flex: 0.2;
  background-color: white;
  border-radius: 5;
`;

const Input = styled.TextInput`
  max-height: 30;
  border-bottom-width: 0.5px;
  border-bottom-color: gray;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-horizontal: 15px;
`;

const Button = styled.Button`
  background-color: blue;
  max-height: 40;
`;

const NewTodoModal = ({
  isVisible, onSwipeModal, todoText, onTodoTitleChangeText, onAddTodo,
}) => (
  <Modal isVisible={isVisible} swipeThreshold={50} onSwipe={onSwipeModal} swipeDirection="down">
    <Container>
      <Input
        placeholder="Title"
        style={{ flex: 1 }}
        value={todoText}
        onChangeText={onTodoTitleChangeText}
      />
      <Button onPress={onAddTodo} title="Add new todo" style={{ flex: 1 }} />
    </Container>
  </Modal>
);

NewTodoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onSwipeModal: PropTypes.func.isRequired,
  todoText: PropTypes.string.isRequired,
  onTodoTitleChangeText: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default NewTodoModal;
