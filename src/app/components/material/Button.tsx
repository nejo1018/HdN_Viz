'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


interface ContainedButtonsProps {
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
  exitApp: boolean;
}


export default function ContainedButtons({
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
  exitApp
}: ContainedButtonsProps) {

  function sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getRandomValue(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }



  async function buttonPressed() {


    let array: string[] = [
      "1a2f4c3e1d4g5h3b",
      "1a2f4c3h5g4d1e3b",
      "1a2f4d1e3c4g5h3b",
      "1a2f4d1e3h5g4c3b",
      "1a2f4g5h3c4d1e3b",
      "1a2f4g5h3e1d4c3b",
      "1a2b3c4d1e3h5g4f",
      "1a2b3c4g5h3e1d4f",
      "1a2b3e1d4c3h5g4f",
      "1a2b3e1d4g5h3c4f",
      "1a2b3h5g4c3e1d4f",
      "1a2b3h5g4d1e3c4f",
      "1e3b2a1d4c3h5g4f",
      "1e3b2a1d4g5h3c4f",
      "1e3b2f4c3h5g4d1a",
      "1e3b2f4g5h3c4d1a",
      "1e3c4d1a2f4g5h3b",
      "1e3c4d1a2b3h5g4f",
      "1e3c4f2a1d4g5h3b",
      "1e3c4f2b3h5g4d1a",
      "1e3c4g5h3b2a1d4f",
      "1e3c4g5h3b2f4d1a",
      "1e3h5g4c3b2a1d4f",
      "1e3h5g4c3b2f4d1a",
      "1e3h5g4d1a2f4c3b",
      "1e3h5g4d1a2b3c4f",
      "1e3h5g4f2a1d4c3b",
      "1e3h5g4f2b3c4d1a",
      "1d4c3b2a1e3h5g4f",
      "1d4c3b2f4g5h3e1a",
      "1d4c3e1a2f4g5h3b",
      "1d4c3e1a2b3h5g4f",
      "1d4c3h5g4f2a1e3b",
      "1d4c3h5g4f2b3e1a",
      "1d4f2a1e3c4g5h3b",
      "1d4f2a1e3h5g4c3b",
      "1d4f2b3c4g5h3e1a",
      "1d4f2b3h5g4c3e1a",
      "1d4g5h3b2a1e3c4f",
      "1d4g5h3b2f4c3e1a",
      "1d4g5h3c4f2a1e3b",
      "1d4g5h3c4f2b3e1a",
      "1d4g5h3e1a2f4c3b",
      "1d4g5h3e1a2b3c4f",
      "2a1e3b2f4c3h5g4d",
      "2a1e3b2f4g5h3c4d",
      "2a1e3c4f2b3h5g4d",
      "2a1e3c4g5h3b2f4d",
      "2a1e3h5g4c3b2f4d",
      "2a1e3h5g4f2b3c4d",
      "2a1d4c3b2f4g5h3e",
      "2a1d4c3h5g4f2b3e",
      "2a1d4f2b3c4g5h3e",
      "2a1d4f2b3h5g4c3e",
      "2a1d4g5h3b2f4c3e",
      "2a1d4g5h3c4f2b3e",
      "2f4c3b2a1e3h5g4d",
      "2f4c3b2a1d4g5h3e",
      "2f4c3e1a2b3h5g4d",
      "2f4c3e1d4g5h3b2a",
      "2f4c3h5g4d1a2b3e",
      "2f4c3h5g4d1e3b2a",
      "2f4d1a2b3c4g5h3e",
      "2f4d1a2b3h5g4c3e",
      "2f4d1e3c4g5h3b2a",
      "2f4d1e3h5g4c3b2a",
      "2f4g5h3b2a1e3c4d",
      "2f4g5h3b2a1d4c3e",
      "2f4g5h3c4d1a2b3e",
      "2f4g5h3c4d1e3b2a",
      "2f4g5h3e1a2b3c4d",
      "2f4g5h3e1d4c3b2a",
      "2b3c4d1a2f4g5h3e",
      "2b3c4d1e3h5g4f2a",
      "2b3c4f2a1e3h5g4d",
      "2b3c4f2a1d4g5h3e",
      "2b3c4g5h3e1a2f4d",
      "2b3c4g5h3e1d4f2a",
      "2b3e1a2f4c3h5g4d",
      "2b3e1a2f4g5h3c4d",
      "2b3e1d4c3h5g4f2a",
      "2b3e1d4g5h3c4f2a",
      "2b3h5g4c3e1a2f4d",
      "2b3h5g4c3e1d4f2a",
      "2b3h5g4d1a2f4c3e",
      "2b3h5g4d1e3c4f2a",
      "2b3h5g4f2a1e3c4d",
      "2b3h5g4f2a1d4c3e"
    ]

    for (let i = 0; i < 100; i++) {



      handleV1d4(false);
      handleV1a2(false);
      handleV1e3(false);
      handleV2b3(false);
      handleV2f4(false);
      handleV3c4(false);
      handleV3h5(false);
      handleV4g5(false);
      await sleep(1000);
      let kette1: string = getRandomValue(array);
      let ergebnis: string[] = [];

      for (let i = 0; i < kette1.length - 1; i += 2) {
        ergebnis.push(kette1.substring(i, i + 3));
      }


      for (let j = 0; j < 9; j++) {

       // if (exitApp === false) { NOT WORKING 
          console.log(exitApp);

          switch (ergebnis[j]) {

            case ('1a2'):
              handleD1a2('_1a2_kg');
              handleV1a2(true);
              await sleep(2000);
              break;

            case ('2a1'):
              handleD1a2('_1a2_gk');
              handleV1a2(true);
              await sleep(2000);
              break;

            case ('2f4'):
              handleD2f4('_2f4_gk');
              handleV2f4(true);
              await sleep(2000);
              break;

            case ('4f2'):
              handleD2f4('_2f4_kg');
              handleV2f4(true);
              await sleep(2000);
              break;

            case ('2b3'):
              handleD2b3('_2b3_kg');
              handleV2b3(true);
              await sleep(2000);
              break;

            case ('3b2'):
              handleD2b3('_2b3_gk');
              handleV2b3(true);
              await sleep(2000);
              break;


            case ('4c3'):
              handleD3c4('_3c4_kg');
              handleV3c4(true);
              await sleep(2000);
              break;

            case ('3c4'):
              handleD3c4('_3c4_gk');
              handleV3c4(true);
              await sleep(2000);
              break;

            case ('3e1'):
              handleD1e3('_1e3_gk');
              handleV1e3(true);
              await sleep(2000);
              break;

            case ('1e3'):
              handleD1e3('_1e3_kg');
              handleV1e3(true);
              await sleep(2000);
              break;

            case ('1d4'):
              handleD1d4('_1d4_kg');
              handleV1d4(true);
              await sleep(2000);
              break;

            case ('4d1'):
              handleD1d4('_1d4_gk');
              handleV1d4(true);
              await sleep(2000);
              break;

            case ('4g5'):
              handleD4g5('_4g5_kg');
              handleV4g5(true);
              await sleep(2000);
              break;

            case ('5g4'):
              handleD4g5('_4g5_gk');
              handleV4g5(true);
              await sleep(2000);
              break;

            case ('5h3'):
              handleD3h5('_3h5_gk');
              handleV3h5(true);
              await sleep(1000);
              break;

            case ('3h5'):
              handleD3h5('_3h5_kg');
              handleV3h5(true);
              await sleep(1000);
              break;

            case ('3b'):
              handleD2b3('_2b3_gk');
              handleV2b3(true);
              await sleep(2000);
              break;

            case ('3e'):
              handleD1e3('_1e3_gk');
              handleV1e3(true);
              await sleep(2000);
              break;

            case ('1a'):
              handleD1a2('_1a2_kg');
              handleV1a2(true);
              await sleep(2000);
              break;

            case ('2a'):
              handleD1a2('_1a2_gk');
              handleV1a2(true);
              await sleep(2000);
              break;

            case ('4f'):
              handleD2f4('_2f4_kg');
              handleV2f4(true);
              await sleep(2000);
              break;

            case ('4d'):
              handleD1d4('_1d4_gk');
              handleV1d4(true);
              await sleep(2000);
              break;
          }
       /* } else {
          i = 10;
          j = 100;
        }*/


      }


    }





  }





  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={buttonPressed}>Lets goooo</Button>
    </Stack>
  );
}