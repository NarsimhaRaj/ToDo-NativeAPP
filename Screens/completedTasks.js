import React from 'react';
import {StyleSheet, Button, View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {ListItem} from '../Components/ListItem';

const CompletedTasks = props => {
  let todoTasks = useSelector(state => state.taskStore.tasks);
  let completedTasks =
    todoTasks &&
    todoTasks.filter(task => {
      return task.isCompleted;
    });

  if (!completedTasks || completedTasks.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>Currenlty No taskrs are completed</Text>
      </View>
    );
  }
  completedTasks.reverse();

  const onPressHandler = (handler, task) => {};

  return (
    <View style={styles.screen}>
      <FlatList
        data={completedTasks}
        renderItem={itemData => (
          <ListItem
            itemStatus={'completed'}
            item={itemData.item}
            onPressHandler={onPressHandler}
          />
        )}
      />
    </View>
  );
};

CompletedTasks.navigationOptions = navData => {
  return {
    headerLeft: (
      <Button title="Menu" onPress={() => navData.navigation.toggleDrawer()} />
      // <Pressable onPress={()=>navData.navigation.toggleDrawer()}>
      //   <View>
      //     <Icon name="menu" />
      //   </View>
      // </Pressable>
    ),
    headerStyle: {
      backgroundColor: '#00CED1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
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

export default CompletedTasks;
