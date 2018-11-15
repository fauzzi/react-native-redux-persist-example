import React, { Component } from 'react'
import {  View } from 'react-native'
import { connect } from 'react-redux'
import { actionCreators } from './../../actions/todo'
import List from './List'
import Input from './Input'
import Title from './Title'

class Index extends Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props
    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    console.log(index);
    const {dispatch} = this.props
    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props    
    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={(todos) ? todos : []}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({  
    todos: state.todo.todos  
})
export default connect(mapStateToProps)(Index)