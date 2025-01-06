import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Rateus.css';

const reviews = [
  {
    name: 'Manisha',
    rating: 5,
    feedback:
      'He is an excellent doctor and took great care for my kid. My kid was very comfortable and happy with him which makes her to get the treatment effectively.',
  },
  {
    name: 'Raj Lakshmi',
    rating: 5,
    feedback:
      'Very friendly, approachable, listens to the patients health issues., Good treatment and care. Overall a very good dentist. People with dental issues can visit him undoubtedly',
  },
  {
    name: 'Rohikh',
    rating: 5,
    feedback:
      'Dr. Sreekanth sir wonderful Dr pass 15 years our favorite dental Dr such a great and explaining about the treatment. Excellent doctor for our whole family sir thank u so much for service sir Lakshmi',
  },
  {
    name: 'Yogesh Balaji',
    rating: 5,
    feedback:
      'Simply the best. If you are looking for a family dentist, one stop solution for all. Very friendly, explains the whole process to the patient, very reasonable price. My entire family got treatment from him',
  },
  {
    name: 'Nallathambi',
    rating: 5,
    feedback:
      'I have visited him few times. He is experienced and a friendly dentist. I would love to recommend my family and friends to visit him',
  },
  {
    name: 'VA Shankar',
    rating: 5,
    feedback:
      'I visited Dr recently, he is very friendly and makes the patient comfortable explains the conditions very well. I highly recommend him',
  },
];

function Rateus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container" {...swipeHandlers}>
      <section className="patient-experiences">
        <h2>Patient Experiences</h2>
        <p>We’re so proud to be your preferred dental partner</p>

        <div className="review-slider">
          <button className="slider-button left" onClick={handlePrevious}>
            &lt;
          </button>

          <div className="review-card">
            <h3>{reviews[currentIndex].name}</h3>
            <p className="stars">{'⭐'.repeat(reviews[currentIndex].rating)}</p>
            <p className="feedback">{reviews[currentIndex].feedback}</p>
          </div>

          <button className="slider-button right" onClick={handleNext}>
            &gt;
          </button>
        </div>

        <button className="rate-us" onClick={() => {
          window.location.href =
            'https://www.google.com/search?q=dr+sreekanth+dental+reviews+page&sca_esv=865b4cce462433eb&rlz=1C5CHFA_enIN1074IN1074&sxsrf=ADLYWILbxyeYYY1m3xC1bpWuIoi2uNO0DQ%3A1735641186734&ei=YshzZ4jELKSb4-EPkbO_-AY&ved=0ahUKEwiI_ZGj59GKAxWkzTgGHZHZD28Q4dUDCBE&uact=5&oq=dr+sreekanth+dental+reviews+page&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGRyIHNyZWVrYW50aCBkZW50YWwgcmV2aWV3cyBwYWdlMggQIRigARjDBDIIECEYoAEYwwQyCBAhGKABGMMEMggQIRigARjDBEiYLVCICljNKnABeAGQAQGYAZkDoAHBE6oBCTAuNS40LjEuMbgBA8gBAPgBAZgCCKACnArCAgoQABiwAxjWBBhHwgIIEAAYgAQYogTCAgoQIRigARjDBBgKmAMAiAYBkAYIkgcFMS41LjKgB8pD&sclient=gws-wiz-serp&lqi=CiBkciBzcmVla2FudGggZGVudGFsIHJldmlld3MgcGFnZSICOAFIvva9sfOVgIAIWiEQABABEAIYABgBGAIiE2RyIHNyZWVrYW50aCBkZW50YWySARBjb3NtZXRpY19kZW50aXN0qgFVEAEqFyITZHIgc3JlZWthbnRoIGRlbnRhbCgAMh8QASIb9FOUiko-z42Ile1mQptBowUhicYxJDzNjRMLMhcQAiITZHIgc3JlZWthbnRoIGRlbnRhbA#lrd=0x3a5267d67b89d8af:0xb0150d32f8a6a44b,3,,,,&rlimm=12688062037757437003';
        }}>
          Rate us
        </button>
      </section>
    </div>
  );
}

export default Rateus;
