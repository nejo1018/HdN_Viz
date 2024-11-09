'use client'

import React from 'react';
import styles from '@/app/page.module.css';

interface HdNProps {
    drawS: string;
}

export default function HdN({drawS}: HdNProps){

    return (
        <line className={styles[drawS]} id="_1a2" x1="28" y1="353.5" x2="248" y2="353.5" stroke="black" strokeWidth="3"/>
    )
}