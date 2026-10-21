import { useEffect, useState } from "react";
import Tables from "./Tables.jsx";

const Readtables = ({ sql }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/Tables", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ qry: sql }),
        });

        const result = await response.json();
        setData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error(error);
        setData([]);
      }
    };

    loadData();
  }, [sql]);

  return <Tables data={data} />;
};

export default Readtables;