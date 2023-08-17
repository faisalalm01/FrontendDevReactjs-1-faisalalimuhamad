import React, { useEffect, useState } from 'react'
import Starts from '../components/Starts'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://restaurant-api.dicoding.dev/list');
                setData(response.data.restaurants);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl mt-20'>All Restaurants</h1>
            <section className='flex flex-wrap'>
                {data.map(item => (
                    <div className='w-1/4 mt-12' key={item.id}>
                        <div className='px-5'>
                            <div className='bg-gray-200 w-full'>
                                <img className='h-52 w-full' src={`https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}`} alt="" />
                            </div>
                            <h1 className='text-2xl font-semibold pt-3'>{item.name}</h1>
                            <Starts value={item.rating} />
                            <div className='text-xs mb-12 mt-3 text-gray-500 flex flex-wrap'>
                                <p>{item.city} . </p>
                                <p>$$$$</p>
                                <div className='ml-auto flex flex-wrap'>
                                    <div className='rounded-full bg-red-500 w-3 h-3 my-auto mr-1'></div>
                                    <p>
                                        CLOSED
                                    </p>
                                </div>
                            </div>
                            <Link to={'/detail/'+item.id}>
                                <button className='w-full bg-blue-950 text-white text-xm p-4'>
                                    LEARN MORE
                                </button>
                            </Link>
                        </div>
                    </div>
                    // )
                ))}
            </section>
            <div className='justify-center text-center my-28'>
                <button className='border border-blue-950 rounded-sm px-44 py-2 text-blue-900 hover:bg-blue-950 hover:text-white'>
                    LOAD MORE
                </button>
            </div>
        </div>
    )
}

export default Main;