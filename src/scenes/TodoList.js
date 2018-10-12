import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Root from '../components/Root';
import { startGetTodos } from '../redux/actions/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this._keyExtractor = this._keyExtractor.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos();
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  _renderItem({ item }) {
    return (
      <View style={{ height: 100, width: 200, backgroundColor: 'red' }}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <Root>
        <FlatList
          data={this.props.todos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Root>
    );
  }
}

TodoList.propTypes = {
  loadTodos: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(startGetTodos()),
});

const mapStateToProps = state => ({
  todos: state.todosReducer.todos,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
