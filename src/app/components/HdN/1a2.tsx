'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
    c1a2: string;
}

export default function HdN({drawS, c1a2}: HdNProps){

    return (
        <line className={styles[drawS]} id="_1a2" x1="28" y1="353.5" x2="248" y2="353.5" stroke={c1a2} strokeWidth="3"/>
    )
}