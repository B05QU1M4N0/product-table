import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//novo componente

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
function ShopingList () {
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);
return (
  <ul>{listItems}</ul>
);
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
function AdminPanel(){
  return (
    <p>Admin Panel</p>
  );
}
function LoginForm(){
  return(
    <p>Login Form</p>
  );
}
function Profile (){
  let isLoggedln = true;
  return (
    <>
    {
      isLoggedln? <AdminPanel/> : <LoginForm/>
    }
    <h1>{user.name}</h1>
    <img className="avatar"src={user.imageUrl}alt={'Fotografia de' + user.name}style={{width: user.imageSize, height: user.imageSize}}/>
    </>
  );
}
  function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
      <div className='corpo'>
        <h1> Bem-vindo a minha App</h1>
        <Profile/>
        <ShopingList/>
        <div>
        <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
        </div>
        <div>
          <AboutPage/>
        </div>
    
      </div>
     
   );
  }
export default App;
