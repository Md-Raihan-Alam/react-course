import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState("");
  const addUsers = (e) => {
    e.preventDefault();
    setUsers((e) => {
      const id = new Date().toString();
      const newUser = { id: id, name: name };
      return [...e, newUser];
    });
  };
  const removeUser = (e) => {
    const filterUsers = users.filter((e2) => e2.id != e);
    setUsers(filterUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={addUsers}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((e) => {
        return (
          <div id={e.id}>
            <p>{e.name}</p>
            <button className="btn" onClick={(event) => removeUser(e.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
