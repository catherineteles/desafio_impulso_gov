import { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [clicked, setClicked] = useState(false);
  const { Provider } = AppContext;

  const value = {
    clicked,
    setClicked
  };

  return <Provider value={ value }>{children}</Provider>;
}