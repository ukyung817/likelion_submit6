import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = "AlPMGkCAnwqwtsiGANKoHc9ycizBGjQ79G2a9qE6HyCfSgo9mV6vQF2NcBzbl/WEbitarnEfBmSa2CSDT7CvkQ==";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.get("/1471000/FoodNtrCpntDbInfo02", {
        params: {
          serviceKey: API_KEY,
          numOfRows: 1,
          pageNo: 1,
          type: 'json'
        }
      });

      setData(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.body?.items?.length) return <div>No data available</div>;

  const item = data.body.items[0];

  return (
    <div className="App">
      <p>음식명: {item.FOOD_NM_KR}</p>
      <p>분류: {item.FOOD_CAT1_NM}</p>
      <p>국가: {item.FOOD_OR_NM}</p>
      <p>1회 제공량: {item.SERVING_SIZE}</p>
      <p>영양 수치: {item.AMT_NUM1}, {item.AMT_NUM2}, {item.AMT_NUM3}</p>
    </div>
  );
}

export default App;
