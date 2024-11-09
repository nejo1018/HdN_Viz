'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
}

export default function HdN({drawS}: HdNProps){
    return (
        <line className={styles[drawS]} id="_2b3" x1="248.5" y1="354.936" x2="252.5" y2="134.973" stroke="black" strokeWidth="3"/>
    )
}