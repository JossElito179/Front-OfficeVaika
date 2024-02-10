import React, { useState,useEffect,useContext} from 'react';

import ListeProduit from './ListeProduit';
import Login from '../Login';
import './additional-styles/product.css';
import { useParams } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import HeaderFO from '../components/HeaderF0';
import Footer from '../components/Footer';

function Produits() {
  const {id} = useParams();
  const { theme } = useContext(ThemeContext);

  if(sessionStorage.getItem('token')!==null) {
  return (
  <>
    <ThemeProvider theme={{ theme }}>
    <GlobalStyles />
      <HeaderFO />
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <span className="hidden xs:block ml-2">Liste des produits
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">

              <ListeProduit id_annonce={id}/>

            </div>
          </div>
        </main>
      </div>
    </div>
      </ThemeProvider>
    </>
  );}
  return (
    <Login></Login>
  );
}

export default Produits;