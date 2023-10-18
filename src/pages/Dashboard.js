import React from "react";
import TopCard from "../components/topCards/TopCard";
import OverviewChart from "../components/charts/OverviewChart";
import CustomerChart from "../components/charts/CustomerChart";
import Productsell from "../components/productSell/Productsell";
const Dashboard = () => {
    return (
        <>
            <TopCard />
            <div className="chart-panel mt-2">
                <div className="row">
                    <div className="col-md-8">
                        <OverviewChart />
                    </div>
                    <div className="col-md-4">
                        <CustomerChart />
                    </div>
                </div>
            </div>
            <div className="product-sell mt-4 pt-4 pb-2 bg-white rounded-3">
                <Productsell />
            </div>
        </>
    )
}

export default Dashboard;