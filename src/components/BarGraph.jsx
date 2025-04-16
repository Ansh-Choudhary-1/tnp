import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://opensheet.elk.sh/10E0oo1TT-UaR1xbLcs8BN5y94f_2egF-lKSRsBhU9hk/2")
      .then((response) => response.json())
      .then((data) => {
        setData(data);  // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='mt-10'>
        <h1 className="ml-10 font-serif text-3xl"> Placed vs Unplaced 2024-25</h1>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Branch" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Placed" fill="#82ca9d" />
            <Bar dataKey="Unplaced" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default BarGraph;
