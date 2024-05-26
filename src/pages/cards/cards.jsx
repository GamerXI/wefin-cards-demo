import React, { useState, useEffect } from 'react';
import CardComponent from '../../components/CardComponent';
import Button from '@mui/joy/Button';
import { LuSlidersHorizontal } from "react-icons/lu";
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
      <div style={{ 'display': 'flex', alignItems:'center', justifyContent: 'space-between' }}>
          <h3 style={{paddingLeft:'12rem',paddingTop:'30px'}}>{cardData.length} Credit Cards for you</h3>
          <div style={{paddingTop:'40px',paddingRight:'23rem'}}>
            <Button variant="solid" style={{
              backgroundColor: "#5200bb",
              fontSize: "18px"
            }}>Compare Credit Cards &nbsp;<span style={{
                border: '1px solid #fff',
                borderRadius: '50px',
                width: '25px',
                height: '25px',
                display: 'inline-block',
                lineHeight: '25px',
              }}>{0}</span></Button>
            <Button variant="" style={{ backgroundColor: 'white', color: 'black', border: 'none' }}>Filter <LuSlidersHorizontal /></Button>
          </div>
      </div>
      {cardData.map((item,index) => {
        return < CardComponent key={index} data={item} />
      })}
      < Footer />
    </>
  );
}
