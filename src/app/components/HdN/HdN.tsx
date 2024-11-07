'use client'

import React from 'react';

import _1a2 from './1a2';
import _1d4 from './1d4';
import _2b3 from './2b3';
import _3c4 from './3c4';
import _1e3 from './1e3';
import _3h5 from './3h5';
import _4g5 from './4g5';
import _2f4 from './2f4';


interface HdNProps{
    v1d4: boolean;
    v1a2: boolean;
    v1e3: boolean;
    v2b3: boolean;
    v2f4: boolean;
    v3c4: boolean;
    v3h5: boolean;
    v4g5: boolean;
    handleV1d4: (bol: boolean) => void;
    handleV1a2: (bol: boolean) => void;
    handleV1e3: (bol: boolean) => void;
    handleV2b3: (bol: boolean) => void;
    handleV2f4: (bol: boolean) => void;
    handleV3c4: (bol: boolean) => void;
    handleV3h5: (bol: boolean) => void;
    handleV4g5: (bol: boolean) => void;
    d1d4: string;
    d1a2: string;
    d1e3: string;
    d2b3: string;
    d2f4: string;
    d3c4: string;
    d3h5: string;
    d4g5: string;
    handleD1d4: (str: string) => void;
    handleD1a2: (str: string) => void;
    handleD1e3: (str: string) => void;
    handleD2b3: (str: string) => void;
    handleD2f4: (str: string) => void;
    handleD3c4: (str: string) => void;
    handleD3h5: (str: string) => void;
    handleD4g5: (str: string) => void;
}





export default function HdN({
    v1d4,
    v1a2,
    v1e3,
    v2b3,
    v2f4,
    v3c4,
    v3h5,
    v4g5,
    handleV1d4,
    handleV1a2,
    handleV1e3,
    handleV2b3,
    handleV2f4,
    handleV3c4,
    handleV3h5,
    handleV4g5,
    d1d4,
    d1a2,
    d1e3,
    d2b3,
    d2f4,
    d3c4,
    d3h5,
    d4g5,
    handleD1d4,
    handleD1a2,
    handleD1e3,
    handleD2b3,
    handleD2f4,
    handleD3c4,
    handleD3h5,
    handleD4g5
}: HdNProps){





    return (
        <svg width="282" height="368" viewBox="0 0 282 368" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="282" height="368" fill="white"/>

        {v1a2 === true ? ( <_1a2 drawS={d1a2} /> ) : ( null )}

        {v1d4 === true ? ( <_1d4 drawS={d1d4} /> ) : ( null )}

        {v1e3 === true ? ( <_1e3 drawS={d1e3} /> ) : ( null )}

        {v2b3 === true ? ( <_2b3 drawS={d2b3} /> ) : ( null )}

        {v2f4 === true ? ( <_2f4 drawS={d2f4} />) : ( null )}  

        {v3c4 === true ? ( <_3c4 drawS={d3c4}/> ) : ( null )}  

        {v3h5 === true ? ( <_3h5 drawS={d3h5} /> ) : ( null )}

        {v4g5 === true ? ( <_4g5 drawS={d4g5} /> ) : ( null )}         
  
        </svg>
    )
}