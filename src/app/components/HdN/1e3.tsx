'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdnProps{
    drawS: string;
    c1e3: string;
}

export default function HdN({drawS, c1e3}: HdnProps){
    return (
        <line className={styles[drawS]} id="_1e3" x1="26.9563" y1="353.923" x2="250.956" y2="136.923" stroke={c1e3} strokeWidth="3"/>        
    )
}