import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>short circuit - examples</h2>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponenet name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Edit" : "Done"}
      </button>
    </>
  );
};
const SomeComponenet = ({ name }) => {
  return (
    <div>
      <h2>Some componenet</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
