import axios from "axios";
import React, { useEffect, useState } from "react";

const useSkills = () => {
    console.log("this is hooks")
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // axios("../data.json")
    axios("../data.json")
    
    //   .then((data) => setSkills(data.data))

    .then((data) => {
      console.log(data.data); // 👉 এখানে দেখো তোমার JSON data আসছে কি না
      setSkills(data.data);
    })

      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { skills, loading, error };
};

export default useSkills;
