'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
    c4g5: string;
}

export default function HdN({drawS, c4g5}: HdNProps){
    return (
        <line className={styles[drawS]} id="_4g5" x1="29.8814" y1="136.001" x2="138.881" y2="14.0006" stroke={c4g5} strokeWidth="3"/>
    )
}