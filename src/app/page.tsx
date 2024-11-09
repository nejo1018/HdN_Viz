'use client'
import React from 'react';

import Image from "next/image";
import styles from "./page.module.css";

import HdN from './components/HdN/HdN';

import Btn from './components/material/Button';
import BtnExit from './components/material/Btnexit';
import BtnCalc from './components/material/BtnCalc';

export default function Home() {
  const [v1d4, setV1d4] = React.useState(false);
  const [v1a2, setV1a2] = React.useState(false);
  const [v1e3, setV1e3] = React.useState(false);
  const [v2b3, setV2b3] = React.useState(false);
  const [v2f4, setV2f4] = React.useState(false);
  const [v3c4, setV3c4] = React.useState(false);
  const [v3h5, setV3h5] = React.useState(false);
  const [v4g5, setV4g5] = React.useState(false);

  const [d1a2, setD1a2] = React.useState('_1a2_kg');
  const [d1d4, setD1d4] = React.useState('_1d4_kg');
  const [d1e3, setD1e3] = React.useState('_1e3_gk');
  const [d2b3, setD2b3] = React.useState('_2b3_gk');
  const [d2f4, setD2f4] = React.useState('_2f4_gk');
  const [d3c4, setD3c4] = React.useState('_3c4_kg');
  const [d3h5, setD3h5] = React.useState('_3h5_gk');
  const [d4g5, setD4g5] = React.useState('_4g5_kg');

  const [c1d4, setC1d4] = React.useState('black');
  const [c1a2, setC1a2] = React.useState('black');
  const [c1e3, setC1e3] = React.useState('black');
  const [c2b3, setC2b3] = React.useState('black');
  const [c2f4, setC2f4] = React.useState('black');
  const [c3c4, setC3c4] = React.useState('black');
  const [c3h5, setC3h5] = React.useState('black');
  const [c4g5, setC4g5] = React.useState('black');

  const handleC1d4 = (str: string) => {
    setC1d4(str);
  }

  const handleC1a2 = (str: string) => {
    setC1a2(str);
  }

  const handleC1e3 = (str: string) => {
    setC1e3(str);
  }

  const handleC2b3 = (str: string) => {
    setC2b3(str);
  }

  const handleC2f4 = (str: string) => {
    setC2f4(str);
  }

  const handleC3c4 = (str: string) => {
    setC3c4(str);
  }

  const handleC3h5 = (str: string) => {
    setC3h5(str);
  }

  const handleC4g5 = (str: string) => {
    setC4g5(str);
  }

  const [exitApp, setexitApp] = React.useState(false);

  const handleExitApp = (bol: boolean) => {
    setexitApp(bol);
  }

  const handleD1a2 = (str: string) => {
    setD1a2(str);
  }

  const handleD1d4 = (str: string) => {
    setD1d4(str);
  }

  const handleD1e3 = (str: string) => {
    setD1e3(str);
  }

  const handleD2b3 = (str: string) => {
    setD2b3(str);
  }

  const handleD2f4 = (str: string) => {
    setD2f4(str);
  }

  const handleD3c4 = (str: string) => {
    setD3c4(str);
  }

  const handleD3h5 = (str: string) => {
    setD3h5(str);
  }

  const handleD4g5 = (str: string) => {
    setD4g5(str);
  }

  const handleV1d4 = (bol: boolean) => {
    setV1d4(bol);
  };

  const handleV1a2 = (bol: boolean) => {
    setV1a2(bol);
  };

  const handleV1e3 = (bol: boolean) => {
    setV1e3(bol);
  };

  const handleV2b3 = (bol: boolean) => {
    setV2b3(bol);
  };

  const handleV2f4 = (bol: boolean) => {
    setV2f4(bol);
  };

  const handleV3c4 = (bol: boolean) => {
    setV3c4(bol);
  };

  const handleV3h5 = (bol: boolean) => {
    setV3h5(bol);
  };

  const handleV4g5 = (bol: boolean) => {
    setV4g5(bol);
  };





  return (
    <div className="master">
      <div className="header">
        <p>Haus des Nikolaus</p>
      </div>

      <div className="content">
        <div className="barLeft">

        </div>
        <div className="main">
          <div className="HdnB">
            <HdN
              v1d4={v1d4}
              v1a2={v1a2}
              v1e3={v1e3}
              v2b3={v2b3}
              v2f4={v2f4}
              v3c4={v3c4}
              v3h5={v3h5}
              v4g5={v4g5}
              d1a2={d1a2}
              d1e3={d1e3}
              d1d4={d1d4}
              d2b3={d2b3}
              d2f4={d2f4}
              d3c4={d3c4}
              d3h5={d3h5}
              d4g5={d4g5}
              c1a2={c1a2}
              c1e3={c1e3}
              c1d4={c1d4}
              c2b3={c2b3}
              c2f4={c2f4}
              c3c4={c3c4}
              c3h5={c3h5}
              c4g5={c4g5}
            />
          </div>

          <div className="BtnB">
            <Btn
              handleV1d4={handleV1d4}
              handleV1a2={handleV1a2}
              handleV1e3={handleV1e3}
              handleV2b3={handleV2b3}
              handleV2f4={handleV2f4}
              handleV3c4={handleV3c4}
              handleV3h5={handleV3h5}
              handleV4g5={handleV4g5}
              handleD1d4={handleD1d4}
              handleD1a2={handleD1a2}
              handleD1e3={handleD1e3}
              handleD2b3={handleD2b3}
              handleD2f4={handleD2f4}
              handleD3c4={handleD3c4}
              handleD3h5={handleD3h5}
              handleD4g5={handleD4g5}
              exitApp={exitApp}
            />
          </div>
          {/* <div className="BtnExit">
              <BtnExit 
                handleV1d4={handleV1d4}
                handleV1a2={handleV1a2}
                handleV1e3={handleV1e3}
                handleV2b3={handleV2b3}
                handleV2f4={handleV2f4}
                handleV3c4={handleV3c4}
                handleV3h5={handleV3h5}
                handleV4g5={handleV4g5}
                handleExitApp={handleExitApp}            
              />
            </div> */}
          <div>
            <BtnCalc
              handleV1d4={handleV1d4}
              handleV1a2={handleV1a2}
              handleV1e3={handleV1e3}
              handleV2b3={handleV2b3}
              handleV2f4={handleV2f4}
              handleV3c4={handleV3c4}
              handleV3h5={handleV3h5}
              handleV4g5={handleV4g5}
              handleD1d4={handleD1d4}
              handleD1a2={handleD1a2}
              handleD1e3={handleD1e3}
              handleD2b3={handleD2b3}
              handleD2f4={handleD2f4}
              handleD3c4={handleD3c4}
              handleD3h5={handleD3h5}
              handleD4g5={handleD4g5}
              handleC1d4={handleC1d4}
              handleC1a2={handleC1a2}
              handleC1e3={handleC1e3}
              handleC2b3={handleC2b3}
              handleC2f4={handleC2f4}
              handleC3c4={handleC3c4}
              handleC3h5={handleC3h5}
              handleC4g5={handleC4g5}
            />
          </div>
        </div>


        <div className="rightbar">

        </div>

      </div>

    </div>
  );
}
