import React, { useState, useEffect } from 'react';

const Content = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      let result = await fetch('https://fakestoreapi.com/products');
      let pdata = await result.json();
      setData(pdata);
    };
    fetchingData();
  }, []);

  if (data) {
    return (
        <div className="container">
        {data.map((ele) => (
          <div key={ele.id} className="card">
            <img src={ele.image} alt={ele.title} />
            <div className="title">{ele.title}</div>
            <div className="price">${ele.price}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="loading">
        <h1>Sabr rakhiye...</h1>
      </div>
    );
  }
};

export default Content;
