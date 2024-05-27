import React, { useState, useEffect } from 'react';
import CardComponent from '../../components/CardComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Cards() {

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch('https://api.wefin.in/getcreditdarddetails')
      .then(res => res.json())
      .then(json => {
        const cardDetails = json.data.cardDetails;
        setCardData(cardDetails);
      })
  }, []);
  return (
    <>
      < Header />
      <section class="main-section">
        <div class="container">
          <div class="main-heading">
            <div class="row">
              <div class="col-xl-6 col-md-6 col-sm-6 col-7">
                <h1>13 &nbsp;Credit Cards for You</h1>
              </div>
              <div class="text-right col-xl-6 col-md-6 col-sm-6 col-5"><button type="button"
                class="comp-button cs_dv btn btn-primary">Compare Credit Cards <span>0</span></button><button type="button"
                  class="fiter-button btn btn-primary">Filter <img src="https://app.wefin.in/static/media/filterIcon.ead8c167.svg" alt="FilterIcon" /></button></div>
            </div>
          </div>
          {cardData.map((item, index) => {
            return < CardComponent key={index} data={item} />
          })}
          <div class="cs_compare_mobile"><button type="button" class="comp-button cs_mv btn btn-primary">Compare Credit Cards <span>0</span></button></div>
        </div>
      </section>
      < Footer />
    </>
  );
}
