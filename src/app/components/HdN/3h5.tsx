'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
}

export default function HdN({drawS}: HdNProps){
    return (
        <line className={styles[drawS]} id="_3h5" x1="252.998" y1="135.958" x2="136.914" y2="14.0343" stroke="black" strokeWidth="3"/>
    )
}