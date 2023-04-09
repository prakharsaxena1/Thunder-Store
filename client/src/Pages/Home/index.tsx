import React, { FC, useState, useEffect } from 'react';
import AccountApis from '../../redux/apis/Account/account.api';

const Check: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [authTrigger] = AccountApis.useLazyIsAuthAccountQuery();
  useEffect(() => {
    authTrigger({})
      .unwrap().then(() => setIsAuth(true));
  }, []);
  return (
    <h1>
      Are you authorized?
      {isAuth ? 'YES' : 'NO'}
    </h1>
  );
};

const Home: FC = () => (
  <>
    <div>Home</div>
    <Check />
  </>
);
export default Home;
