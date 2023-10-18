import React from "react";

const Card = ({title, price, revenue_percent, active, icon}) => {
  
    return(
        <>
         <div className="col-md-6 col-lg-6 col-xl-3 col-xxl-3 mb-3 box">
        <div className="card border-0 d-flex flex-row align-items-center">
            <div className="icon">
            <img src={icon} alt="icon" />
            </div>
            <div className="card-details">
            <p className="c_title">{title}</p>
            <p className="c_price"><strong>${price}</strong></p>
            <p className="text-small">{active ? <><small className="active"><i className="bi bi-arrow-up-short"></i>{revenue_percent}% </small> this month</>
             : <><small><i className="bi bi-arrow-down-short"></i> {revenue_percent}% </small> this month</> }
            </p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Card;