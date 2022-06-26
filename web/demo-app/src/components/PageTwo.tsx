import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const PageTwo = () => {
  const appContext = useContext(AppContext);
  const changeUserName = () => {
    appContext!.setUserName('who');
  };
  return (
    <div>
      <p>PageTwo</p>
      <p>{appContext!.userName}</p>
      <button onClick={changeUserName}>Button</button>
    </div>
  );
}
export default PageTwo;
