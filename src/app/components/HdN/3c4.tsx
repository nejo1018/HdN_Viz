'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
    c3c4: string;
}

export default function HdN({drawS, c3c4}: HdNProps){
    return (
        <line className={styles[drawS]} id="_3c4" x1="32" y1="136.5" x2="252" y2="136.5" stroke={c3c4} strokeWidth="3"/>
    )
}