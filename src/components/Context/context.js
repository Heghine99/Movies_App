import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const DarkModeContext = createContext('');

export const DarkModeContextProvider = ({children}) => {
  const [mode, setMode] = useState();
  useEffect(() => {
    const getMode = async () => {
      try {
        setMode(await AsyncStorage.getItem('mode'));
      } catch (error) {
        console.log(error);
      }
    };
    getMode();
  }, []);

  const changeMode = async () => {
    try {
      if ((await AsyncStorage.getItem('mode')) === 'dark') {
        await AsyncStorage.removeItem('mode');
      } else {
        await AsyncStorage.setItem('mode', 'dark');
      }
    } catch (error) {
      console.log(error);
    }
    setMode(await AsyncStorage.getItem('mode'));
  };
  return (
    <DarkModeContext.Provider value={{mode: mode, changeMode}}>
      {children}
    </DarkModeContext.Provider>
  );
};
