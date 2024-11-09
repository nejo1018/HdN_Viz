'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import internal from 'stream';
import { stringify } from 'querystring';
import { drawerClasses } from '@mui/material';

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

    function sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function draw(erg: string[], bol: boolean) {
        let i: number, j: number, k: number;
        let str: string;
        let str_array: string[] = [];
        let col: string = 'black';
        let finish: boolean;
    
        for (i = 0; i < erg.length; i++) {
            str = erg[i];
            str_array = [];
    
            for (k = 0; k < str.length - 1; k += 2) {
                str_array.push(str.substring(k, k + 3));
            }
    
            // Check if str_array length meets the finish condition
            finish = (str_array.length === 8);
    
            for (j = 0; j < str_array.length; j++) {
                // Update color based on finish status
                if (j === str_array.length - 1 && !finish) {
                    col = 'red';
                } else {
                    col = 'black';
                }
    
                switch (str_array[j]) {
                    case '1a2':
                        handleD1a2('_1a2_kg');
                        handleC1a2(col);
                        handleV1a2(bol);
                        await sleep(2000);
                        break;
    
                    case '2a1':
                        handleD1a2('_1a2_gk');
                        handleC1a2(col);
                        handleV1a2(bol);
                        await sleep(2000);
                        break;
    
                    case '2f4':
                        handleD2f4('_2f4_gk');
                        handleC2f4(col);
                        handleV2f4(bol);
                        await sleep(2000);
                        break;
    
                    case '4f2':
                        handleD2f4('_2f4_kg');
                        handleC2f4(col);
                        handleV2f4(bol);
                        await sleep(2000);
                        break;
    
                    case '2b3':
                        handleD2b3('_2b3_kg');
                        handleC2b3(col);
                        handleV2b3(bol);
                        await sleep(2000);
                        break;
    
                    case '3b2':
                        handleD2b3('_2b3_gk');
                        handleC2b3(col);
                        handleV2b3(bol);
                        await sleep(2000);
                        break;
    
                    case '4c3':
                        handleD3c4('_3c4_kg');
                        handleC3c4(col);
                        handleV3c4(bol);
                        await sleep(2000);
                        break;
    
                    case '3c4':
                        handleD3c4('_3c4_gk');
                        handleC3c4(col);
                        handleV3c4(bol);
                        await sleep(2000);
                        break;
    
                    case '3e1':
                        handleD1e3('_1e3_gk');
                        handleC1e3(col);
                        handleV1e3(bol);
                        await sleep(2000);
                        break;
    
                    case '1e3':
                        handleD1e3('_1e3_kg');
                        handleC1e3(col);
                        handleV1e3(bol);
                        await sleep(2000);
                        break;
    
                    case '1d4':
                        handleD1d4('_1d4_kg');
                        handleC1d4(col);
                        handleV1d4(bol);
                        await sleep(2000);
                        break;
    
                    case '4d1':
                        handleD1d4('_1d4_gk');
                        handleC1d4(col);
                        handleV1d4(bol);
                        await sleep(2000);
                        break;
    
                    case '4g5':
                        handleD4g5('_4g5_kg');
                        handleC4g5(col);
                        handleV4g5(bol);
                        await sleep(2000);
                        break;
    
                    case '5g4':
                        handleD4g5('_4g5_gk');
                        handleC4g5(col);
                        handleV4g5(bol);
                        await sleep(2000);
                        break;
    
                    case '5h3':
                        handleD3h5('_3h5_gk');
                        handleC3h5(col);
                        handleV3h5(bol);
                        await sleep(1000);
                        break;
    
                    case '3h5':
                        handleD3h5('_3h5_kg');
                        handleC3h5(col);
                        handleV3h5(bol);
                        await sleep(1000);
                        break;
                }
            }
    
            // Reset visual indicators after each loop iteration
            handleV1d4(false);
            handleV1a2(false);
            handleV1e3(false);
            handleV2b3(false);
            handleV2f4(false);
            handleV3c4(false);
            handleV3h5(false);
            handleV4g5(false);
    
            handleC1d4('black');
            handleC1a2('black');
            handleC1e3('black');
            handleC2b3('black');
            handleC2f4('black');
            handleC3c4('black');
            handleC3h5('black');
            handleC4g5('black');
            await sleep(500);
        }
    }

    function checkstr(avairansitions: string[], str3letters: string, str: string): boolean {
        let str3letter_switch: string = swapFirstAndThirdChar(str3letters);
        if (isStringInArray(avairansitions, str3letters) && isStringInArray(avairansitions, str3letter_switch)) {
            if (str.length === 17) {
                return true;
            }
        } else {
            return true;
        }
        return false;
    }

    function checkSwappedSubstring(str: string) {
    
        // Extrahiere die letzten drei Zeichen des Strings
        let lastThree = str.slice(-3);
    
        // Vertausche die erste und dritte Stelle des extrahierten Substrings
        let swapped = lastThree[2] + lastThree[1] + lastThree[0];
    
        // Überprüfe, ob der neue String Teil des ursprünglichen Strings ist
        return str.includes(swapped);
    }





    async function calc() {
        let availabletransitions: string[] = ['1d4', '1e3', '1a2', '2a1', '2b3', '2f4', '3b2', '3e1', '3c4', '3h5', '4d1', '4f2', '4c3', '4g5', '5g4', '5h3'];
        let i: number;
        let str: string;
        let erg1: string[];
        let erg2: string[];

        for (i = 1; i < 2; i++) {

            switch (i) {
                case (1):
                    str = '1';
                    erg1 = action(str, '1', availabletransitions);
                    console.log(erg1);
                    draw(erg1, true);
                case (2):
                    str = '2';
                    erg2 = action(str, '2', availabletransitions);
                //console.log(erg2);
            }
        }



    }





    function action(str: string, node: string, avairansitions: string[], alleerg: string[] = []) {
        let i1: number; let i2: number; let i3: number; let i4: number; let i5: number;
        let node1: string[] = ['a', 'e', 'd'];
        let node2: string[] = ['a', 'f', 'b'];
        let node3: string[] = ['b', 'c', 'e', 'h'];
        let node4: string[] = ['c', 'd', 'f', 'g'];
        let node5: string[] = ['g', 'h'];
        let erg: string[] = [];
        //let alleerg: string[] = [];
        let nextletter: string;
        let strtemp: string;
        let strtemp2: string;
        let strtemp2_last3letters;
        let strtemp2_last3letters_switch;
        let nextnode: string;
        let newstr: string;
        let bol: boolean;
        let bol2: boolean;

        if (node === '1') {
            for (i1 = 0; i1 < 3; i1++) {
                nextletter = node1[i1];
                strtemp = str + nextletter;
                nextnode = nextNode(getLastTwoChars(strtemp));
                strtemp2 = strtemp + nextnode;
                strtemp2_last3letters = getLastThreeChars(strtemp2);
                bol = checkstr(avairansitions, strtemp2_last3letters, strtemp2);
                bol2 = checkSwappedSubstring(strtemp2);
                if (bol === true && bol2 === false) {
                    //console.log(strtemp2)
                    alleerg.push(strtemp2);
                }
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        //console.log(newstr);
                        //console.log(newstr.length);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy, alleerg);
                    }
                } else {
                    //draw(strtemp2_last3letters, false);
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
                bol = checkstr(avairansitions, strtemp2_last3letters, strtemp2);
                bol2 = checkSwappedSubstring(strtemp2);
                if (bol === true && bol2 === false) {
                    //console.log(strtemp2)
                    alleerg.push(strtemp2);
                }
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        //console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy, alleerg);
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
                bol = checkstr(avairansitions, strtemp2_last3letters, strtemp2);
                bol2 = checkSwappedSubstring(strtemp2);
                if (bol === true && bol2 === false) {
                    //console.log(strtemp2)
                    alleerg.push(strtemp2);
                }
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        //console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy, alleerg);
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
                bol = checkstr(avairansitions, strtemp2_last3letters, strtemp2);
                bol2 = checkSwappedSubstring(strtemp2);
                if (bol === true && bol2 === false) {
                    //console.log(strtemp2)
                    alleerg.push(strtemp2);
                }
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        //console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy, alleerg);
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
                bol = checkstr(avairansitions, strtemp2_last3letters, strtemp2);
                bol2 = checkSwappedSubstring(strtemp2);
                if (bol === true && bol2 === false) {
                    //console.log(strtemp2)
                    alleerg.push(strtemp2);
                }
                if (isStringInArray(avairansitions, strtemp2_last3letters)) {
                    strtemp2_last3letters_switch = swapFirstAndThirdChar(strtemp2_last3letters);
                    let avairansitionsCopy = [...avairansitions];
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters);
                    avairansitionsCopy = removeStringFromArray(avairansitionsCopy, strtemp2_last3letters_switch);
                    newstr = strtemp2;
                    if (isArrayEmpty(avairansitionsCopy)) {
                        erg.push(newstr);
                        //console.log(newstr);
                    } else {
                        action(newstr, nextnode, avairansitionsCopy, alleerg);
                    }
                }
            }
        }

        //console.log(erg);
        //return erg;
        //console.log(alleerg);

        return alleerg;




    }

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={calc}>Calc</Button>
        </Stack>
    );

}