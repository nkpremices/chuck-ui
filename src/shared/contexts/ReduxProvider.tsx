import { Provider } from 'react-redux';
import React from 'react';
import store from '../../store';

interface ReduxProviderProps {
  children: any;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children, ...rest }) => {
  return (
    <Provider store={store} {...rest}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
