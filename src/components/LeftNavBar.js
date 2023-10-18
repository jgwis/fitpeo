import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../assets/css/LeftNavBar.css"
const LeftNavBar = () => {
    const location = useLocation();
    const [expanded, setExpanded] = useState([]);
    const [activeLink, setActiveLink] = useState(null);
  
    const navigationData = [
        {
            icon: 'nut',
            label: 'Dashboard',
            link: '/',
        },
        {
            icon: 'box-seam',
            label: 'Product',
            link: '/product',
            subChildren: [
                {
                    label: 'Product 1',
                    link: '/product',
                },
            ],
        },
        {
            icon: 'person-square',
            label: 'Customers',
            link: '/customer',
            subChildren: [
                {
                    label: 'Customer 1',
                    link: '/customer',
                },
            ]
        },
        {
            icon: 'wallet2',
            label: 'Income',
            link: '/income',
            subChildren: [
                {
                    label: 'Income 1',
                    link: '/income',
                },
            ]
        },
        {
            icon: 'volume-up',
            label: 'Promote',
            link: '/promote',
            subChildren: [
                {
                    label: 'Promote 1',
                    link: '/promote',
                },
            ]
        },
        {
            icon: 'question-diamond',
            label: 'Help',
            link: '/help',
            subChildren: [
                {
                    label: 'Help 1',
                    link: '/help',
                },
            ]
        },
    ];

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveLink(currentPath);
    }, [location.pathname])
    const toggleSubChildren = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };
    return (
        <>
            <div className="left-nav-bar">
                <ul>
                    {navigationData.map((item, index) => (
                        <li key={index} className={activeLink === item.link ? 'active' : ''}>
                            <Link to={item.link} onClick={() => toggleSubChildren(index)}>
                                <>
                                    <i className={`bi bi-${item.icon}${activeLink === item.link ? ' active' : ''}`} />
                                    <span className='ms-2'>{item.label}</span>
                                    {item.subChildren && item.subChildren.length > 0 && (
                                        <span className="arrow">
                                            <i className={`bi ${expanded[index] ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
                                        </span>
                                    )}


                                </>

                            </Link>
                            {item.subChildren && expanded[index] && (
                                <ul className="sub-menu">
                                    {item.subChildren.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link to={subItem.link}>{subItem.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}



export default LeftNavBar;
