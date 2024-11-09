'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface ContainedBtnexitProps{
    handleV1d4: (bol: boolean) => void;
    handleV1a2: (bol: boolean) => void;
    handleV1e3: (bol: boolean) => void;
    handleV2b3: (bol: boolean) => void;
    handleV2f4: (bol: boolean) => void;
    handleV3c4: (bol: boolean) => void;
    handleV3h5: (bol: boolean) => void;
    handleV4g5: (bol: boolean) => void;
    handleExitApp: (bol: boolean) => void;
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
    handleExitApp
  }: ContainedBtnexitProps){

    async function buttonPressed(){
        handleExitApp(true);
        handleV1d4(false);
        handleV1a2(false);
        handleV1e3(false);
        handleV2b3(false);
        handleV2f4(false);
        handleV3c4(false);
        handleV3h5(false);
        handleV4g5(false);

    }

    return (
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={buttonPressed}>Exit</Button>
        </Stack>
      );





    
  }