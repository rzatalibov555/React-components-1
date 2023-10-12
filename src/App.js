import logo from './logo.svg';
import './App.css';
import { MenuList } from './components/MenuList';
import { Disp_box } from './components/DisplayBox';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <MenuList></MenuList>
      <Disp_box></Disp_box>    
    </Fragment>
  );
}

export default App;
