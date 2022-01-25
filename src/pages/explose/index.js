import React, { useState,useEffect,Component } from 'react';
import Head from 'next/head';
import { Divider,Button } from '@mui/material';
import { MainLayout } from '../../components/main-layout';

// import { gtm } from '../lib/gtm';
import {RecoilRoot} from 'recoil'




const Explose = () => {
  useEffect(() => {
  //  gtm.push({ event: 'page_view' });
 }, []);

  return (
    <>
      <Head>
        <title>
          SoundOne:Explose 
        </title>
      </Head>
      <main>
        <Button >Explose</Button>
        
      
      </main>
    </>
  );
};
Explose.getLayout = (page) => (
  <RecoilRoot>
  <MainLayout>
    {page}
  </MainLayout>
  </RecoilRoot>
);

export default Explose;
