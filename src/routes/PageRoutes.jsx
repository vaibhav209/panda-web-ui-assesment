import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPass from '../components/ForgotPass/ForgotPass';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Home from '../pages/Home';

import routes from './routes.json';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.SIGNUP} element={<SignUp />} />
      <Route path={routes.SIGNIN} element={<SignIn />} />
      <Route path={routes.FORGOT_PASS} element={<ForgotPass />} />
      {/* <Route path="/ResetPass" element={<ResetPass />} /> */}
    </Routes>
  );
};

export default PageRoutes;
