import React from 'react';

import classes from "./MainPage.module.css";

import { useTranslation } from 'react-i18next';

import Footer from "../../components/footer/Footer"
import HeaderPage from '../../components/headerPage/HeaderPage';
import SignUpModal from '../../components/signUp/SignUpModal';
import { useSelector } from 'react-redux';
import SignHeader from '../../components/headerPage/SignHeader';

function MainPage(props) {
    // const {t, i18n} = useTranslation()

    // const changeLanguage = (language) => {
    //     i18n.changeLanguage(language)
    //   }
      const {logInUser} = useSelector(state => state.authReducer)
    return (
        <>
        {logInUser
        ?
        <HeaderPage/>
        
        :
        <SignHeader/>
        
        }
            {/* <Header/>  */}
            {/* <HeaderPage/> */}
            {/* <SignHeader/> */}
            <SignUpModal/> 
            {/* <Footer/> */}
            

        </>
        
    );
}

export default MainPage;