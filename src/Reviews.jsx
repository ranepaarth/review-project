import React, { useState } from "react";
import people from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const nextPerson = ()=>{
    setIndex((index) => {
      let nextIndex  =index + 1;
      if(nextIndex > people.length-1) return 0
      return nextIndex
    })
  }

    const checkIndex = (index) => {
      if (index < 0) return people.length - 1;
      if(index > people.length-1) return 0;
      return index 
    }

  const prevPerson = ()=>{
    setIndex((index) => {
      let prevIndex  =index - 1;
      if(prevIndex < 0) return people.length-1
      return prevIndex
    })
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length)

    if(randomIndex === index) randomIndex += 1 

    setIndex(checkIndex(randomIndex));
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <div className="job">{job}</div>
      <p className="info">{text}</p>
      <div>
        <FaChevronLeft className="prev-btn" onClick={prevPerson} />
        <FaChevronRight className="next-btn" onClick={nextPerson} />
      </div>
      <div>
        <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
      </div>
    </article>
  );
};

export default Reviews;
