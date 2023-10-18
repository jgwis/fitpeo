import React from "react";
import Card from "./Card";
import ticon1 from '../../assets/images/t_icon1.png';
import ticon2 from '../../assets/images/t_icon2.png'
import ticon3 from '../../assets/images/t_icon3.png'
import ticon4 from '../../assets/images/t_icon4.png'

const TopCard = () => {

  const cardsData = [
    {
      title: 'Earning',
      price: '198k',
      revenue_percent: "37.8",
      active: true,
      icon: ticon1,
    },
    {
      title: 'Orders',
      price: '2.4k',
      revenue_percent: "2",
      active: false,
      icon: ticon2,
    },
    {
      title: 'Balance',
      price: '2.4k',
      revenue_percent: "2",
      active: false,
      icon: ticon3,
    },
    {
      title: 'Total Sales',
      price: '89k',
      revenue_percent: "11",
      active: true,
      icon: ticon4,
    },
  ];

  return (
    <>
      <div className="top-card pb-2">
        <div className="row">
          {
            cardsData.length > 0 && cardsData.map((item, index) => {
              return <Card key={index} {...item} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default TopCard;