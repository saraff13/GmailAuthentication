import React, {useState} from 'react';
import {Loader} from './components';
import Root from './navigation/Root';

export const GlobalContext = React.createContext({
  loaderVisible: false,
  showLoader: (_value: boolean) => {},
  user: null,
  setUser: (_user: any) => {},
  loginError: null,
  setLoginError: (_error: any) => {},
});

const GmailAuth = () => {
  const showLoader = (value: boolean) => {
    setGloablState((state: any) => ({
      ...state,
      loaderVisible: value,
    }));
  };

  const setUser = (user: any) => {
    setGloablState((state: any) => ({
      ...state,
      user,
    }));
  };

  const setLoginError = (error: any) => {
    setGloablState((state: any) => ({
      ...state,
      loginError: error,
    }));
  };

  const [globalState, setGloablState] = useState({
    loaderVisible: false,
    showLoader,
    user: null,
    setUser,
    setLoginError,
    loginError: null,
  });

  return (
    <GlobalContext.Provider value={globalState}>
      <Root />
      <Loader visible={globalState.loaderVisible} />
    </GlobalContext.Provider>
  );
};

export default GmailAuth;
