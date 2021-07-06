import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TaskButton from './taskButton';

export const ListItem = props => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listText}>{props.item.name}</Text>
      {props.itemStatus === 'pending' ? (
        <View style={styles.listButtonContainer}>
          <TaskButton onPress={() => props.onPressHandler('done', props.item)}>
            Done
          </TaskButton>
          <TaskButton
            onPress={() => props.onPressHandler('delete', props.item)}>
            Delete
          </TaskButton>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '97%',
    minWidth: 300,
    minHeight: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  listText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 15,
  },
  listButtonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
