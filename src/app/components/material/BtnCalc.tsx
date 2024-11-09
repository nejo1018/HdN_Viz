'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import internal from 'stream';
import { stringify } from 'querystring';

interface ContainedBtnexitProps {
    handleV1d4: (bol: boolean) => void;
    handleV1a2: (bol: boolean) => void;
    handleV1e3: (bol: boolean) => void;
    handleV2b3: (bol: boolean) => void;
    handleV2f4: (bol: boolean) => void;
    handleV3c4: (bol: boolean) => void;
    handleV3h5: (bol: boolean) => void;
    handleV4g5: (bol: boolean) => void;
    handleD1d4: (str: string) => void;
    handleD1a2: (str: string) => void;
    handleD1e3: (str: string) => void;
    handleD2b3: (str: string) => void;
    handleD2f4: (str: string) => void;
    handleD3c4: (str: string) => void;
    handleD3h5: (str: string) => void;
    handleD4g5: (str: string) => void;
    handleC1d4: (str: string) => void;
    handleC1a2: (str: string) => void;
    handleC1e3: (str: string) => void;
    handleC2b3: (str: string) => void;
    handleC2f4: (str: string) => void;
    handleC3c4: (str: string) => void;
    handleC3h5: (str: string) => void;
    handleC4g5: (str: string) => void;
}

export default function Btnexit({
    handleV1d4,
    handleV1a2,
    handleV1e3,
    handleV2b3,
    handleV2f4,
    handleV3c4,
    handleV3h5,
    handleV4g5,
    handleD1d4,
    handleD1a2,
    handleD1e3,
    handleD2b3,
    handleD2f4,
    handleD3c4,
    handleD3h5,
    handleD4g5,
    handleC1d4,
    handleC1a2,
    handleC1e3,
    handleC2b3,
    handleC2f4,
    handleC3c4,
    handleC3h5,
    handleC4g5
}: ContainedBtnexitProps) {


    function nextNode(str: string) {
        let erg: string = '';

        switch (str) {
            case ('1d'):
                erg = '4';
                break;
            case ('1e'):
                erg = '3';
                break;
            case ('1a'):
                erg = '2';
                break;
            case ('2a'):
                erg = '1';
                break;
            case ('2b'):
                erg = '3';
                break;
            case ('2f'):
                erg = '4';
                break;
            case ('3b'):
                erg = '2';
                break;
            case ('3e'):
                erg = '1';
                break;
            case ('3c'):
                erg = '4';
                break;
            case ('3h'):
                erg = '5';
                break;
            case ('4d'):
                erg = '1';
                break;
            case ('4f'):
                erg = '2';
                break;
            case ('4c'):
                erg = '3';
                break;
            case ('4g'):
                erg = '5';
                break;
            case ('5g'):
                erg = '4';
                break;
            case ('5h'):
                erg = '3';
                break;
        }
        return erg;
    }

    function isStringInArray(arr: string[], str: string): boolean {
        return arr.includes(str);
    }

    function getLastThreeChars(str: string): string {
        return str.slice(-3);
    }

    function getLastTwoChars(str: string): string {
        return str.slice(-2);
    }

    function swapFirstAndThirdChar(str: string): string {
        if (str.length !== 3) {
            throw new Error("Der String muss genau 3 Zeichen lang sein.");
        }
        return str[2] + str[1] + str[0];
    }

    function isArrayEmpty(arr: string[]): boolean {
        return arr.length === 0;
    }

    function removeStringFromArray(arr: string[], str: string): string[] {
        const index = arr.indexOf(str);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    function calc() {
        let availabletransitions: string[] = ['1d4', '1e3', '1a2', '2a1', '2b3', '2f4', '3b2', '3e1', '3c4', '3h5', '4d1', '4f2', '4c3', '4g5', '5g4', '5h3'];
        let i: number;
        let str: string;
        let erg1: string[];
        let erg2: string[];

        for (i = 1; i < 2; i++) {

            switch (i) {
                case (1):
                    str = '1';
                    action(str, '1', availabletransitions);
                /* 
                action(str, '1', availabletransitions).then(result => {
                    erg1 = result;
                    console.log(erg1);
                });*/
                case (2):
                    str = '2';
                    action(str, '2', availabletransitions);
                /*
                action(str, '2', availabletransitions).then(result => {
                    erg2 = result;
                    console.log(erg2); 
                });*/
            }
        }

    }





    async function action(str: string, node: string, avairansitions: string[]): Promise<string[]> {
        let i1: number; let i2: number; let i3: number; let i4: number; let i5: number;
        let node1: string[] = ['a', 'e', 'd'];
        let node2: string[] = ['a', 'f', 'b'];
        let node3: string[] = ['b', 'c', 'e', 'h'];
        let node4: string[] = ['c', 'd', 'f', 'g'];
        let node5: string[] = ['g', 'h'];
        let erg: string[] = [];
        let nextletter: string;
        let strtemp: string;
        let strtemp2: string;
        let strtemp2_last3letters;
        let strtemp2_last3letters_switch;
        let nextnode: string;
        let newstr: string;

        if (node === '1') {
            for (i1 = 0; i1 < 3; i1++) {
                nextletter = node1[i1];
                strtemp = str + nextletter;
                nextnode = nextNode(getLastTwoChars(strtemp));
                strtemp2 = strtemp + nextnode;
                strtemp2_last3letters = getLastThreeChars(strtemp2);
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy);
                    }
                }
            }
        }

        if (node === '2') {
            for (i2 = 0; i2 < 3; i2++) {
                nextletter = node2[i2];
                strtemp = str + nextletter;
                nextnode = nextNode(getLastTwoChars(strtemp));
                strtemp2 = strtemp + nextnode;
                strtemp2_last3letters = getLastThreeChars(strtemp2);
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy);
                    }
                }
            }
        }

        if (node === '3') {
            for (i3 = 0; i3 < 4; i3++) {
                nextletter = node3[i3];
                strtemp = str + nextletter;
                nextnode = nextNode(getLastTwoChars(strtemp));
                strtemp2 = strtemp + nextnode;
                strtemp2_last3letters = getLastThreeChars(strtemp2);
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy);
                    }
                }
            }
        }

        if (node === '4') {
            for (i4 = 0; i4 < 4; i4++) {
                nextletter = node4[i4];
                strtemp = str + nextletter;
                nextnode = nextNode(getLastTwoChars(strtemp));
                strtemp2 = strtemp + nextnode;
                strtemp2_last3letters = getLastThreeChars(strtemp2);
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy);
                    }
                }
            }
        }

        if (node === '5') {
            for (i5 = 0; i5 < 2; i5++) {
                nextletter = node5[i5];
                strtemp = str + nextletter;
                nextnode = nextNode(getLastTwoChars(strtemp));
                strtemp2 = strtemp + nextnode;
                strtemp2_last3letters = getLastThreeChars(strtemp2);
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy);
                    }
                }
            }
        }

        //console.log(erg);
        return erg;





    }

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={calc}>Calc</Button>
        </Stack>
    );






}