'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
}

export default function HdN({drawS}: HdNProps){
    return (
        <line className={styles[drawS]} id="_4g5" x1="29.8814" y1="136.001" x2="138.881" y2="14.0006" stroke="black" strokeWidth="3"/>
    )
}