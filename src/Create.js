import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [verified, setVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const signin = { email, password };

    fetch(" http://localhost:8000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signin),
    }).then(() => {
      console.log(signin);
      history.push("/feed");
    });
  };

  function validatePassword() {
    var p = document.getElementById("password").value;

    if (
      p.length >= 8 &&
      p.match(/[a-z]/) &&
      p.match(/[0-9]/) &&
      p.match(/[A-Z]/)
    ) {
      setVerified(true);
    } else return;
  }

  return (
    <div className="content">
      <form className="create" onSubmit={handleSubmit}>
        <h2>Sign in to keep tracking your work!</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword();
          }}
          required
        />
        <input type="checkbox"></input>
        <label>Remember me</label>
        {verified && <button>Sign in</button>}
      </form>
    </div>
  );
};

export default Create;
