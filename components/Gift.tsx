"use client"

import { useEffect, useState } from 'react';
import React from 'react'
import Head from 'next/head'
import './style.css'

const Gift = () => {
    const [duration, setDuration] = useState('1.2s');

    useEffect(() => {
        // Function to update CSS variables
        const updateCssVariables = () => {
            document.querySelectorAll('.grow-ans').forEach(element => {
                (element as HTMLElement).style.setProperty('--d', duration);
            });
        };

        updateCssVariables();
    }, [duration]); 

    const handleDurationChange = (newDuration: string) => {
        setDuration(newDuration);
    };

    return (
        // <div className="w-full bg-white z-10 border-red-500"> Test </div>
        <div className="mb-20">
            <Head>
                <link rel="stylesheet" href="/style.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet" crossOrigin="anonymous"/>

                <script src="main.js" type="text/javascript"></script>
            </Head>

            <div className="text"> Thank you for the past 18 years!</div>
            <div className="customBody">
                <div className="night"></div>
                <div className="flowers">
                <div className="flower flower--1">
                    <div className="flower__leafs flower__leafs--1">
                    <div className="flower__leaf flower__leaf--1"></div>
                    <div className="flower__leaf flower__leaf--2"></div>
                    <div className="flower__leaf flower__leaf--3"></div>
                    <div className="flower__leaf flower__leaf--4"></div>
                    <div className="flower__white-circle"></div>
            
                    <div className="flower__light flower__light--1"></div>
                    <div className="flower__light flower__light--2"></div>
                    <div className="flower__light flower__light--3"></div>
                    <div className="flower__light flower__light--4"></div>
                    <div className="flower__light flower__light--5"></div>
                    <div className="flower__light flower__light--6"></div>
                    <div className="flower__light flower__light--7"></div>
                    <div className="flower__light flower__light--8"></div>
            
                    </div>
                    <div className="flower__line">
                    <div className="flower__line__leaf flower__line__leaf--1"></div>
                    <div className="flower__line__leaf flower__line__leaf--2"></div>
                    <div className="flower__line__leaf flower__line__leaf--3"></div>
                    <div className="flower__line__leaf flower__line__leaf--4"></div>
                    <div className="flower__line__leaf flower__line__leaf--5"></div>
                    <div className="flower__line__leaf flower__line__leaf--6"></div>
                    </div>
                </div>
            
                <div className="flower flower--2">
                    <div className="flower__leafs flower__leafs--2">
                    <div className="flower__leaf flower__leaf--1"></div>
                    <div className="flower__leaf flower__leaf--2"></div>
                    <div className="flower__leaf flower__leaf--3"></div>
                    <div className="flower__leaf flower__leaf--4"></div>
                    <div className="flower__white-circle"></div>
            
                    <div className="flower__light flower__light--1"></div>
                    <div className="flower__light flower__light--2"></div>
                    <div className="flower__light flower__light--3"></div>
                    <div className="flower__light flower__light--4"></div>
                    <div className="flower__light flower__light--5"></div>
                    <div className="flower__light flower__light--6"></div>
                    <div className="flower__light flower__light--7"></div>
                    <div className="flower__light flower__light--8"></div>
            
                    </div>
                    <div className="flower__line">
                    <div className="flower__line__leaf flower__line__leaf--1"></div>
                    <div className="flower__line__leaf flower__line__leaf--2"></div>
                    <div className="flower__line__leaf flower__line__leaf--3"></div>
                    <div className="flower__line__leaf flower__line__leaf--4"></div>
                    </div>
                </div>
            
                <div className="flower flower--3">
                    <div className="flower__leafs flower__leafs--3">
                    <div className="flower__leaf flower__leaf--1"></div>
                    <div className="flower__leaf flower__leaf--2"></div>
                    <div className="flower__leaf flower__leaf--3"></div>
                    <div className="flower__leaf flower__leaf--4"></div>
                    <div className="flower__white-circle"></div>
            
                    <div className="flower__light flower__light--1"></div>
                    <div className="flower__light flower__light--2"></div>
                    <div className="flower__light flower__light--3"></div>
                    <div className="flower__light flower__light--4"></div>
                    <div className="flower__light flower__light--5"></div>
                    <div className="flower__light flower__light--6"></div>
                    <div className="flower__light flower__light--7"></div>
                    <div className="flower__light flower__light--8"></div>
            
                    </div>
                    <div className="flower__line">
                    <div className="flower__line__leaf flower__line__leaf--1"></div>
                    <div className="flower__line__leaf flower__line__leaf--2"></div>
                    <div className="flower__line__leaf flower__line__leaf--3"></div>
                    <div className="flower__line__leaf flower__line__leaf--4"></div>
                    </div>
                </div>
            
                <div className="grow-ans" style={{ '--d': '1.2s'} as React.CSSProperties }>
                    <div className="flower__g-long">
                    <div className="flower__g-long__top"></div>
                    <div className="flower__g-long__bottom"></div>
                    </div>
                </div>
            
                <div className="growing-grass">
                    <div className="flower__grass flower__grass--1">
                    <div className="flower__grass--top"></div>
                    <div className="flower__grass--bottom"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                    <div className="flower__grass__overlay"></div>
                    </div>
                </div>
            
                <div className="growing-grass">
                    <div className="flower__grass flower__grass--2">
                    <div className="flower__grass--top"></div>
                    <div className="flower__grass--bottom"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                    <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                    <div className="flower__grass__overlay"></div>
                    </div>
                </div>
            
                <div className="grow-ans" style={{ '--d': '2.4s'} as React.CSSProperties }>
                    <div className="flower__g-right flower__g-right--1">
                    <div className="leaf"></div>
                    </div>
                </div>
            
                <div className="grow-ans" style={{ '--d': '2.8s'} as React.CSSProperties }>
                    <div className="flower__g-right flower__g-right--2">
                    <div className="leaf"></div>
                    </div>
                </div>
            
                <div className="grow-ans" style={{ '--d': '2.8s'} as React.CSSProperties }>
                    <div className="flower__g-front">
                    <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                        <div className="flower__g-front__leaf"></div>
                    </div>
                    <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                        <div className="flower__g-front__leaf"></div>
                    </div>
                    <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                        <div className="flower__g-front__leaf"></div>
                    </div>
                    <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                        <div className="flower__g-front__leaf"></div>
                    </div>
                    <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                        <div className="flower__g-front__leaf"></div>
                    </div>
                    <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                        <div className="flower__g-front__leaf"></div>
                    </div>
                    <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                        <div className="flower__g-front__leaf"></div>
                    </div>
                    <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                        <div className="flower__g-front__leaf"></div>
                    </div>
                    <div className="flower__g-front__line"></div>
                    </div>
                </div>
            
                <div className="grow-ans" style={{ '--d': '3.2s'} as React.CSSProperties }>
                    <div className="flower__g-fr">
                    <div className="leaf"></div>
                    <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                    <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                    <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                    <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                    <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                    <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                    <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                    <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
                    </div>
                </div>
            
                <div className="long-g long-g--0">
                <div className="grow-ans" style={{ '--d': '3s'} as React.CSSProperties }>
                    <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '2.2s'} as React.CSSProperties }>
                    <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.4s'} as React.CSSProperties }>
                    <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.6s'} as React.CSSProperties }>
                    <div className="leaf leaf--3"></div>
                    </div>
                </div>
            
                <div className="long-g long-g--1">
                <div className="grow-ans" style={{ '--d': '3.6s'} as React.CSSProperties }>
                    <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.8s'} as React.CSSProperties }>
                    <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4s'} as React.CSSProperties }>
                    <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.2s'} as React.CSSProperties }>
                    <div className="leaf leaf--3"></div>
                    </div>
                </div>
            
                <div className="long-g long-g--2">
                <div className="grow-ans" style={{ '--d': '4s'} as React.CSSProperties }>
                    <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.2s'} as React.CSSProperties }>
                    <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.4s'} as React.CSSProperties }>
                    <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.6s'} as React.CSSProperties }>
                    <div className="leaf leaf--3"></div>
                    </div>
                </div>
            
                <div className="long-g long-g--3">
                <div className="grow-ans" style={{ '--d': '4s'} as React.CSSProperties }>
                    <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.2s'} as React.CSSProperties }>
                    <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3s'} as React.CSSProperties }>
                    <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.6s'} as React.CSSProperties }>
                    <div className="leaf leaf--3"></div>
                    </div>
                </div>
            
                <div className="long-g long-g--4">
                <div className="grow-ans" style={{ '--d': '4s'} as React.CSSProperties }>
                    <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.2s'} as React.CSSProperties }>
                    <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3'} as React.CSSProperties }>
                    <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.6s'} as React.CSSProperties }>
                    <div className="leaf leaf--3"></div>
                    </div>
                </div>
            
                <div className="long-g long-g--5">
                <div className="grow-ans" style={{ '--d': '4s'} as React.CSSProperties }>
                    <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.2s'} as React.CSSProperties }>
                    <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3s'} as React.CSSProperties }>
                    <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.6s'} as React.CSSProperties }>
                    <div className="leaf leaf--3"></div>
                    </div>
                </div>
            
                <div className="long-g long-g--6">
                    <div className="grow-ans" style={{ '--d': '4.2s'} as React.CSSProperties }>
                    <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.4s'} as React.CSSProperties }>
                    <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.6s'} as React.CSSProperties }>
                    <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '4.8s'} as React.CSSProperties }>
                    <div className="leaf leaf--3"></div>
                    </div>
                </div>
            
                <div className="long-g long-g--7">
                <div className="grow-ans" style={{ '--d': '3s'} as React.CSSProperties }>
                    <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.2s'} as React.CSSProperties }>
                    <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.5s'} as React.CSSProperties }>
                    <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ '--d': '3.6s'} as React.CSSProperties }>
                    <div className="leaf leaf--3"></div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className="text">
                <a href="https://drive.google.com/file/d/1NeKWY9cGtlzdRQrEJyR62ivL_XzayMzW/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Heres your video kar! </a>
                <br/>
                <a href="/thankyoudad.pdf" target="_blank" rel="noopener noreferrer"> A letter for dad </a>
                <br/>
                <a href="/thankyoumom.pdf" target="_blank" rel="noopener noreferrer"> A letter for mom </a> 
            </div>

        </div>
    )
}

export default Gift;