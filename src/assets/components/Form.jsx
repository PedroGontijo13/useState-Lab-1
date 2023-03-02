import { useState } from "react";

export default function Form() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [FullName, setFullName] = useState("");
  const [formError, setErroForm] = useState("");

  const handleEmailInput = (e) => {
    const { value } = e.target;
    setEmail(value);
    setErroForm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Password.length < 8) {
      setErroForm("Password must be at least 8 characters long");
      return;
    }

    if (Password != Password2) {
      setErroForm("Password are diferents!");
      return;
    }

    else {
        alert('OK')
        return
    }
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              type="email"
              value={Email}
              onChange={handleEmailInput}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">
              Verify Password
            </label>
            <input
              type="password"
              value={Password2}
              onChange={(event) => setPassword2(event.target.value)}
              required
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              FullName
            </label>
            <input
              type="text"
              value={FullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              className="form-control"
              id="exampleInputName"
              aria-describedby="Full Name"
            />
          </div>
          <div className="mb-3">{formError && <p>{formError}</p>}</div>
          <button
            type="submit"
            disabled={!FullName || !Email || !Password || !Password2}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
