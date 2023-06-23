import { useState } from "react";
const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    //dynamic way
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const showUser = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form className="form" onSubmit={showUser}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            value={user.name}
            className="form-input"
            id="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            value={user.email}
            className="form-input"
            id="email"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            value={user.password}
            className="form-input"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
