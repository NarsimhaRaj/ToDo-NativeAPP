import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Alert,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TaskButton from '../Components/taskButton';
import {addTask} from '../Store/actions';

const CreateTask = props => {
  let [feedback, setFeedback] = useState('');
  const dispatch = useDispatch();
  let id = useSelector(state => state.taskStore.id);
  const onPressHandler = () => {
    const data = feedback;
    dispatch(
      addTask({
        name: data,
        isCompleted: false,
        id: id,
      }),
    );
    id++;
    setFeedback('');
    Alert.alert('Task Status', 'Your task has been stored successfully', [
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.taskContainer}>
        <Text style={styles.text}>Create your To Do Task</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={15}
            multiline={true}
            onChangeText={text => setFeedback(text)}
            value={feedback}
          />
        </View>
        <TaskButton onPress={onPressHandler}>Submit</TaskButton>
      </View>
    </View>
  );
};

CreateTask.navigationOptions = navData => {
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
  },
  taskContainer: {
    padding: 30,
    backgroundColor: 'white',
    width: '80%',
    height: (Dimensions.get('window').height / 3) * 1.5,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    paddingVertical: 10,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
  },
  textArea: {
    height: '80%',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
});

export default CreateTask;
