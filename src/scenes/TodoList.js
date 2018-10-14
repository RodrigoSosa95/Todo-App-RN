import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import Root from '../components/Root';
import NewTodoModal from '../components/Modal';
import { startSetTodos, startAddTodo } from '../redux/actions/todos';
import ListItem from '../components/ListItem';

class TodoList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'My Todos',
      headerRight: <Icon name="edit" style={{ marginRight: 10 }} size={23} onPress={params.handleModal} />,
    };
  };

  state = {
    isNewTodoModalVisible: false,
    newTodoText: '',
  };

  constructor(props) {
    super(props);
    this._keyExtractor = this._keyExtractor.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._handleTodoNavigation = this._handleTodoNavigation.bind(this);
    this._handleModal = this._handleModal.bind(this);
    this._handleAddTodo = this._handleAddTodo.bind(this);
    this._handleTodoTitleChange = this._handleTodoTitleChange.bind(this);
    this._handleModalSwipeDown = this._handleModalSwipeDown.bind(this);
  }

  componentDidMount() {
    const { requestTodos, navigation } = this.props;

    navigation.setParams({
      handleModal: this._handleModal,
    });

    requestTodos();
  }

  _handleModal() {
    this.setState(prevState => ({
      isNewTodoModalVisible: !prevState.isNewTodoModalVisible,
    }));
  }

  _keyExtractor() {
    return uuid();
  }

  _handleTodoNavigation(item) {
    const { navigation } = this.props;
    navigation.navigate('TodoDetail', { item });
  }

  _handleModalSwipeDown() {
    this.setState({ isNewTodoModalVisible: false });
  }

  _renderItem({ item }) {
    return <ListItem todo={item} onTodoDetailsPressed={() => this._handleTodoNavigation(item)} />;
  }

  _handleAddTodo() {
    const { addTodo } = this.props;
    const { newTodoText } = this.state;

    if (newTodoText.length > 3) {
      addTodo(newTodoText);
      this.setState({ isNewTodoModalVisible: false });
    } else {
      console.log('Todo is not long enough');
    }
  }

  _handleTodoTitleChange(title) {
    this.setState({ newTodoText: title });
  }

  render() {
    const { todos } = this.props;
    const { isNewTodoModalVisible, newTodoText } = this.state;
    return (
      <Root>
        <FlatList
          data={todos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <NewTodoModal
          isVisible={isNewTodoModalVisible}
          onSwipeModal={this._handleModalSwipeDown}
          onAddTodo={this._handleAddTodo}
          todoText={newTodoText}
          onTodoTitleChangeText={this._handleTodoTitleChange}
        />
      </Root>
    );
  }
}

TodoList.propTypes = {
  requestTodos: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(startSetTodos()),
  addTodo: title => dispatch(startAddTodo(title)),
});

const mapStateToProps = state => ({
  todos: state.todosReducer.todos,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
