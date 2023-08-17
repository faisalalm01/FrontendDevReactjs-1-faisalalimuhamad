import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Starts = ({value}) => {
  const maxStars = 5;
  const fullStars = Math.floor(value);
  const remainingValue = value - fullStars;
  const hasHalfStar = remainingValue >= 0.5;

  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} />);
    } else if (hasHalfStar && i === fullStars) {
      stars.push(<FaStarHalfAlt  key="half" />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className="flex flex-wrap rating text-blue-950">{stars}</div>;
  };

export default Starts