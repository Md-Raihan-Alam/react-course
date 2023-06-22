import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          setError(true);
        } else {
          setUser(data);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(true);
    };
    fetchData();
  }, []);
  if (!loading) {
    return <h2>Loading..</h2>;
  }
  if (error) {
    return <h2>Error....</h2>;
  }
  return (
    <>
      <h2>Fetch Data </h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
