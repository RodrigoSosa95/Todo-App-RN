import React, { Component } from 'react';
import {
  StyleSheet, Button, Switch, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import Root from '../components/Root';
import { Input } from '../components/Modal';
import { startEditTodo } from '../redux/actions/todos';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    maxHeight: 30,
  },
  completedContainer: {
    marginLeft: 16,
    flexDirection: 'row',
  },
});

class EditTodo extends Component {
  // setting state from props isnt always recommended but here it just serves to set initial values to be then updated via http request
  state = {
    newTitle: this.props.navigation.state.params.item.title,
    completed: this.props.navigation.state.params.item.completed,
  };

  _onEditTodoButtonPressed = () => {
    const { newTitle, completed } = this.state;
    const { editTodo, navigation } = this.props;
    editTodo({ ...navigation.state.params.item, title: newTitle, completed });
    navigation.goBack();
  };

  _onTodoTitleChangeText = (newValue) => {
    this.setState({ newTitle: newValue });
  };

  _onCompletedValueChange = () => {
    this.setState(prevState => ({ completed: !prevState.completed }));
  };

  render() {
    const { newTitle, completed } = this.state;
    return (
      <Root>
        <Input defaultValue={newTitle} onChangeText={this._onTodoTitleChangeText} />
        <View style={styles.completedContainer}>
          <Text>Completed: </Text>
          <Switch value={completed} onValueChange={this._onCompletedValueChange} />
        </View>
        <Button title="Edit todo" style={styles.button} onPress={this._onEditTodoButtonPressed} />
      </Root>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editTodo: payload => dispatch(startEditTodo(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(EditTodo);
