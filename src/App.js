import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import SignupPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import {app} from "./firebase";
import './App.css';

const auth= getAuth(app);

function App() {
  return (
    <div className="App">
      <SignupPage />
      <SignInPage />
    </div>
  );
}

export default App;
