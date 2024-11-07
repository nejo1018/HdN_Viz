'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
}

export default function HdN({drawS}: HdNProps){
    return (
        <line className={styles[drawS]} id="_2f4" x1="31.0587" y1="136.937" x2="247.966" y2="353.027" stroke="black" stroke-width="3"/>
    )
}