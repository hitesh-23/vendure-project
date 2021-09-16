import react, {useState} from 'react';
import './App.css';

const App = ()=> {




  return (
    <div className="App">
        <div className="loadingpage">
          <div className="form">
            <div className="img-container">
              <img src="https://demo.vendure.io/admin/assets/logo-300px.png" alt = "logo"></img>
            </div>
            <div className="form-inputs">
              <form>
              <div className="input containers">
                <input type="text" className="username" placeholder="Username"></input>
                <br></br>
                <input type="password" className="password" placeholder="Password"></input>
               <p className="remember"> <input type="checkbox"></input>Remember me</p>


               <button type="submit" className="login">LOG IN</button>
               </div>
              </form>
            </div>
            <div className="footfoot"><p>Vendure v1.2.0</p></div>

        </div>
          </div>
          
    </div>
  );
}

export default App;
