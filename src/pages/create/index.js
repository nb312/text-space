import React, { useState,useEffect,Component } from 'react';
import Head from 'next/head';
import { Divider,Button } from '@mui/material';
import { MainLayout } from '../../components/main-layout';

// import { gtm } from '../lib/gtm';
import {RecoilRoot} from 'recoil'




const Create = () => {
  useEffect(() => {
  //  gtm.push({ event: 'page_view' });
 }, []);

  return (
    <>
      <Head>
        <title>
          SoundOne:Create 
        </title>
      </Head>
      <main>
        <Button >Create</Button>
        
      
      </main>
    </>
  );
};
Create.getLayout = (page) => (
  <RecoilRoot>
  <MainLayout>
    {page}
  </MainLayout>
  </RecoilRoot>
);

export default Create;
