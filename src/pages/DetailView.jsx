import React, { useEffect, useState } from 'react'
import Starts from '../components/Starts'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailView = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [dataFoods, setDataFoods] = useState(null);
  const [dataDrinks, setDataDrinks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`);
        // console.log(response.data);
        setData(response.data.restaurant);
        setDataFoods(response.data.restaurant.menus.foods);
        setDataDrinks(response.data.restaurant.menus.drinks)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='mx-auto container pt-12 border-t-2 mb-40' key={data.id}>
      <div className='bg-slate-500'>
        <img className='w-full' src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`} alt="" />
      </div>
      <h1 className='text-5xl font-semibold my-4'>{data.name}</h1>
      <div className='text-3xl'>
        <Starts value={data.rating} />
      </div>
      <p className='pt-5 text-xl'><b>Address : </b>{data.address}</p>
      <p className='text-xl py-5'>{data.description}</p>
      <div className='mx-auto text-center mt-16 '>
        <h1 className='text-4xl font-semibold'>Menus</h1>
        <div className='flex flex-wrap mt-7 text-2xl font-sans h-fit'>
          <div className='w-2/4 p-5'>
            <div className='border-2 rounded-lg border-blue-900 p-5 h-full'>
              <h1 className='mb-5 font-semibold'>Foods</h1>
              {dataFoods.map(item => (
                <div>
                  <li key={item.id}>{item.name}</li>
                </div>
              ))}
            </div>
          </div>
          <div className='w-2/4 p-5'>
            <div className='border-2 rounded-lg border-blue-900 p-5 h-full'>
              <h1 className='mb-5 font-semibold'>Drinks</h1>
              {dataDrinks.map(item => (
                <div>
                  <li key={item.id}>{item.name}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailView