import React from "react";
import { useAuth } from "../Components/AuthContext";
import HomepageContent from "../PageContents/HomepageContent";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import LoadingPage from "./LoadingPage";
import { routes } from "./routePaths";

function Homepage() {
  const auth = getAuth();
  const { loggedIn, setLoggedIn } = useAuth();
  const history = useHistory();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    {loggedIn===true ? <HomepageContent /> : routeback }
  )
};

export default Homepage;