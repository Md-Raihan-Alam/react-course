import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  if (!loading) return <h2>Loading...</h2>;
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
