import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const PageOne = () => {
  const appContext = useContext(AppContext);

  const changeThemeColor = () => {
    appContext!.setThemeColor('dark');
  };

  return (
    <div>
      <p>PageOne</p>
      <p>{appContext!.themeColor}</p>
      <button onClick={changeThemeColor}>Button</button>
    </div>
  );
}
export default PageOne;
