import React from "react";
import pImage from "../../assets/images/p-img.jpg";
const Productsell = () => {

    const psellData = [
        {
            productName: 'Abstract 3D',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            stock: '32 in stock',
            price: "45.99",
            totalSales: 20,
        },
        {
            productName: 'Abstract 2D',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            stock: '20 in stock',
            price: "25.99",
            totalSales: 15,
        },
        {
            productName: 'Abstract 1D',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            stock: '24 in stock',
            price: "15.99",
            totalSales: 30,
        },
        {
            productName: 'Abstract123 3D',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            stock: '50 in stock',
            price: "50.99",
            totalSales: 45,
        },

        {
            productName: 'Sharphens Illustration',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            stock: '50 in stock',
            price: "50.99",
            totalSales: 45,
        },
    ];

    return (
        <>
            <div className="d-flex p-head">
                <h4 className="card-title">Product Sell</h4>
                <div className="right-h-div ms-auto d-flex">
                    <div className="p-search">
                    <i className="bi bi-search"></i>
                        <input type="text" className="form-control" placeholder="search" />
                    </div>
                    <div className="p-filter ms-4">
                        <select>
                            <option>Last 10 days</option>
                            <option>Last 30 days</option>
                            <option>Last 60 days</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="product-table">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-start">
                            Product Name
                        </th>
                        <th className="text-center">
                            Stock
                        </th>
                        <th className="text-center">
                            Price
                        </th>
                        <th className="text-center">
                            Total Sales
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {psellData.length > 0 && psellData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-start">
                                    <div className="d-flex align-items-center">
                                        <img src={pImage} alt="img" />
                                        <div className="ms-3">
                                            <span className="p-name">{item.productName}</span><br />
                                            <small>{item.details}</small>
                                        </div>
                                    </div>

                                </td>
                                <td className="text-center">{item.stock}</td>
                                <td className="text-end p-price">$ {item.price}</td>
                                <td className="text-center">{item.totalSales}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </>
    )

}


export default Productsell;