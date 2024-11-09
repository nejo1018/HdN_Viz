'use client';

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
    c1d4: string;
}

export default function HdN({drawS, c1d4}: HdNProps){
    return (
        <line className={styles[drawS]} id="_1d4" x1="26.5002" y1="354.973" x2="30.4996" y2="135.009" stroke={c1d4} strokeWidth="3"/>
    )
}