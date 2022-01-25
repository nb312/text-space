import React, { useState,useEffect,Component } from 'react';
import Head from 'next/head';
import { Divider,Button } from '@mui/material';
import { MainLayout } from '../components/main-layout';
import { HomeClients } from '../components/home/home-clients';
import { HomeHero } from '../components/home/home-hero';
import { HomeDevelopers } from '../components/home/home-developers';
import { HomeDesigners } from '../components/home/home-designers';
import { HomeFeatures } from '../components/home/home-features';
import { HomeTestimonials } from '../components/home/home-testimonials';
import { gtm } from '../lib/gtm';
import {RecoilRoot} from 'recoil'
import {init,user} from "../web3js/accountUtil";
import { string } from 'prop-types';
//import {Web3} from 'web3'



const Home = () => {
  useEffect(() => {
   gtm.push({ event: 'page_view' });
 }, []);

  return (
    <>
      <Head>
        <title>
          TextSpace 
        </title>
      </Head>
      <main>
        <HomeHero />
        
        <Divider />
        <HomeDevelopers />
        <Divider />
        <HomeDesigners />
        <HomeTestimonials />
        <HomeFeatures />
        <Divider />
        <HomeClients />
      </main>
    </>
  );
};
Home.getLayout = (page) => (
  <RecoilRoot>
  <MainLayout>
    {page}
  </MainLayout>
  </RecoilRoot>
);

export default Home;
