import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Navbars = () => {
    // const {id} = useLocation();
    const handleRefresh = () => {
        window.location.reload();
      };
      const location = useLocation();

    //   if (location.pathname === '/detail/:id') {
    //     return null
    //   }
    return (
        <div className='border-t-2 border-b-2 w-full py-5'>
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center text-gray-500">
                <nav className="md:mr-auto md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <p className='text-lg'>Filter By: </p>
                    <div className='flex flex-wrap pl-4'>
                        <div className="flex items-center border-blue-900 mr-7 border-b-2">
                            <input id="link-radio" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="link-radio" className="ml-2 text-md font-bold text-blue-950">Open Now</label>
                        </div>
                        <div className="items-center border-blue-900 mr-7 border-b-2">
                            <select placeholder='test' className='text-blue-950 text-md font-bold w-24'>
                                <option value="key">Price</option>
                                <option>Lowest</option>
                                <option>Highest</option>
                            </select>
                        </div>
                        <div className="items-center border-blue-900 mr-7 border-b-2">
                            <select placeholder='test' className='text-blue-950 text-md font-bold w-48'>
                                <option value="key">Categories</option>
                            </select>
                        </div>
                    </div>
                </nav>
                <button onClick={handleRefresh} className="font-semibold text-sm inline-flex items-center border-2 py-2 px-8 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-gray-400 ">CLEAR ALL
                </button>
            </div>
        </div>
    )
}

export default Navbars