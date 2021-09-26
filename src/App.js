import logo from './logo.svg';
import './App.css';
import Address from './profile/address'
import Fullname from './profile/fullname'
import ProfilePhoto from './profile/profilePhoto'

function App() {
  return (
    <div className="App">
      <Fullname/>
      <Address/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
