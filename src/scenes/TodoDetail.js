import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

class TodoDetail extends Component {
  render() {
    return <View style={styles} />;
  }
}

export default TodoDetail;
