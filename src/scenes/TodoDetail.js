import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Button,
} from 'react-native';
import Root from '../components/Root';

const styles = StyleSheet.create({
  flex: 1,
  padding: 16,
});

class TodoDetail extends Component {
  constructor(props) {
    super(props);
    this._handleEditTodo = this._handleEditTodo.bind(this);
  }

  _handleEditTodo() {
    const { navigation } = this.props;
    navigation.navigate('EditTodo', { item: navigation.state.params.item });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Root>
        <View style={styles}>
          <Text>
            Identifier:
            {navigation.state.params.item.id}
          </Text>
          <Text>
            Title:
            {navigation.state.params.item.title}
          </Text>
          <Text>
            Status:
            {navigation.state.params.item.completed ? 'Done' : 'Uncompleted'}
          </Text>
          <Button title="Edit todo" style={{ flex: 1, height: 30 }} />
        </View>
      </Root>
    );
  }
}

export default TodoDetail;
