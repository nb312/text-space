import PropTypes from 'prop-types';
import NextLink from 'next/link';
import React, { useState,useEffect,Component } from 'react';
import { AppBar, Box, Button, Container, IconButton, Link, Toolbar,styled,Stack } from '@mui/material';
import { Menu as MenuIcon } from '../icons/menu';
import { Logo } from './logo';
import {chainIdState} from "../recoil/atoms/chainIdState"
import {init} from "../web3js/accountUtil";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  useRecoilState,
} from 'recoil';
import { initReactI18next } from 'react-i18next';
import { color } from '@mui/system';

export const MainNavbar = (props) => {
  const { onOpenSidebar } = props;
  var [chainId,setChainId] = useRecoilState(chainIdState);
  
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottomColor: 'divider',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        color: 'text.secondary'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ minHeight: 64 }}
        >
          <NextLink
            href="/"
            passHref
          >
            {/* <a>
              <Logo
                sx={{
                  display: {
                    md: 'inline',
                    xs: 'none'
                  },
                  height: 40,
                  width: 40
                }}
              />
            </a> */}
            <Link
                color="textSecondary"
                underline="none"
                variant="subtitle2"
              >
                SoundOne
              </Link>
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            sx={{
              display: {
                md: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box
            sx={{
              alignItems: 'center',
              display: {
                md: 'flex',
                xs: 'none'
              }
            }}
          >
            <NextLink
              href="/explose"
              passHref
            >
              <Link
                color="textSecondary"
                underline="none"
                variant="subtitle2"
              >
                Explore
              </Link>
            </NextLink>
            <NextLink
              href="/create"
              passHref
            >
              <Link
                color="textSecondary"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Create
              </Link>
            </NextLink>
            <NextLink
              // href="/docs/welcome"
              href = "https://discord.gg/QEM3XezqHF"
              passHref
            >
              <Link
                color="textSecondary"
                component="a"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Discord
              </Link>
            </NextLink>
          
            <Button
              component="a"
             // href="https://material-ui.com/store/items/devias-kit-pro"
              size="medium"
              sx={{ ml: 2 }}
              target="_blank"
              variant="contained"
              onClick={
               async ()=>{
                 var account =await init();
                 localStorage.setItem("account",account);
                 let a= localStorage.getItem("account");
                 if(chainId ==''){
                  setChainId(a);
                 }else{
                  setChainId('');
                 }
            
                  // setChainId(account);
                  //("0xdsdsdsds");
                }
              }
            >
              Buy Now:{chainId}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
function OnConnect(){

 // alert("hello wor");
 setChainId("0xdsdsdsds")

}
export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={changeHandler} />
        <Button variant="contained" component="span">
        Upload{localStorage.getItem("local")}
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
}
const changeHandler = (event) => {
  alert("files:"+event.target.files[0].webkitRelativePath);
  localStorage.setItem("local",event.target.files[0].name);

};
const Input = styled('input')({
  display: 'none',
});
MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};
