'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
}

export default function HdN({drawS}: HdNProps){
    return (
        <line className={styles[drawS]} id="_3c4" x1="32" y1="136.5" x2="252" y2="136.5" stroke="black" strokeWidth="3"/>
    )
}