import React from 'react';
import {StyleSheet, Button, View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {ListItem} from '../Components/ListItem';
import {deleteTask, updateTask} from '../Store/actions';
import {useDispatch} from 'react-redux';

const PendingTasks = props => {
  let todoTasks = useSelector(state => state.taskStore.tasks);
  let pendingTasks =
    todoTasks &&
    todoTasks.filter(task => {
      return !task.isCompleted;
    });

  if (!pendingTasks || pendingTasks.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>Currenlty No tasks are in pending</Text>
      </View>
    );
  }
  pendingTasks.reverse();

  const dispatch = useDispatch();

  const onPressHandler = (handler, task) => {
    let callback = () => {};
    if (handler === 'done') {
      callback = updateTask({...task, isCompleted: true});
    } else {
      callback = deleteTask(task.id);
    }
    dispatch(callback);
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={pendingTasks}
        renderItem={itemData => (
          <ListItem
            itemStatus={'pending'}
            item={itemData.item}
            onPressHandler={onPressHandler}
          />
        )}
      />
    </View>
  );
};

PendingTasks.navigationOptions = navData => {
  return {
    headerLeft: (
      <Button title="Menu" onPress={() => navData.navigation.toggleDrawer()} />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});

export default PendingTasks;
