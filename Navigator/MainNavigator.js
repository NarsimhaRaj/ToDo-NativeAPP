import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import CompletedTasks from '../Screens/completedTasks';
import CreateTask from '../Screens/createTask';
import PendingTasks from '../Screens/pendingTask';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: '#00CED1',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const CreateNavigator = createStackNavigator(
  {
    CreateTask: CreateTask,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  },
);
const PendingNavigator = createStackNavigator(
  {
    PendingTasks: PendingTasks,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  },
);
const CompletedNavigator = createStackNavigator(
  {
    CompletedTasks: CompletedTasks,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  },
);

const MainNavigator = createDrawerNavigator(
  {
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: 'Create Task',
      },
    },
    Pending: {
      screen: PendingNavigator,
      navigationOptions: {
        drawerLabel: 'pending Tasks',
      },
    },
    Completed: {
      screen: CompletedNavigator,
      navigationOptions: {
        drawerLabel: 'Completed Tasks',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: 'black',
      activeBackgroundColor: 'light-grey',
    },
    defaultNavigationOptions: defaultNavOptions,
  },
);

export default createAppContainer(MainNavigator);
