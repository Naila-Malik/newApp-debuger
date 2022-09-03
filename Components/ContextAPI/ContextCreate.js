import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
  user: null,
  error: false,
};
export const ContextValue = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  return (
    <ContextValue.Provider
      value={{
        user: state.user,
        error: state.error,
        dispatch,
      }}>
      {children}
    </ContextValue.Provider>
  );
};
