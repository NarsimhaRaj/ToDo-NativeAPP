import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import MainNavigator from './Navigator/MainNavigator';
import taskReducer from './Store/reducer';

const rootReducer = combineReducers({
  taskStore: taskReducer,
});

const store = createStore(rootReducer);

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
