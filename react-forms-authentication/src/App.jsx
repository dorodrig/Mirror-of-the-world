import { useState } from "react";

import AuthContext from "./context/AuthContext";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import IndexJs from "./components/IndexJs";


const App = () => {
  const [step, setStep] = useState("index");

  return (
    <AuthContext.Provider value={{ step, setStep }}>
      <div className="container">
        {step === "signin" && <SignIn />}
        {step === "signup" && <SignUp />}
        {step === "forgot" && <ForgotPassword />}
        {step === "index" && <IndexJs/>}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
