// import logo from './logo.svg';
// import img from 'C:/Users/iumoi/Downloads/elon.webp'
import './App.css';
import {Header,Example} from './components/header'
import Footer from './components/footer'
import SignUp from './components/signUp'
import SignIn from './components/signIn'

function App(){

  const add = ()=>{
    console.log("add function !");
  }
  return (
    <div className='App'>
      {/* <Header title="TITLE" name={add}></Header> */}
      <Header title="TITLE"></Header>
      <SignUp></SignUp>
      <Example></Example>
    </div>
  )
}
export default App;
