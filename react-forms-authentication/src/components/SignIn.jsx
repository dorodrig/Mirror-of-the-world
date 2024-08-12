import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import getUser from "../Api/get_user";


const SignIn = () => {
  let { setStep } = useContext(AuthContext);

  // Datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Focus de los inputs del formulario
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  
  const loadTasks = async () => {
    // Obtiene los usuarios del backend
    const user = await getUser();
    return user.data;
  };
  const  handlerSubmit = async (e) => {
    // Evita el envío de datos a un backend    
    console.log("Sending data to backend...");
    console.log(`El usuario digitó: ${email} y ${password}`);
    //llamamos el api para ver comparar usuarios creados
    const datos = await loadTasks();
    alert(datos)
  };

  return (
    <main>
      <h3>Hello, friend!</h3>
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoFocus
              required
              onBlur={() => setEmailFocused(true)}
              data-focused={emailFocused}
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              pattern="(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              onBlur={() => setPasswordFocused(true)}
              data-focused={passwordFocused}
            />
            <p className="error">Valid password required</p>
          </fieldset>
          <button type="submit">login</button>
          <button  onClick={() => setStep("index")} type="submit">home</button>
          <div className="forgot" onClick={() => setStep("forgot")}>
            Forgot password?
          </div>
        </form>
      </div>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => setStep("signup")}>Sign up</span>
      </p>
    </main>
  );
};

export default SignIn;
