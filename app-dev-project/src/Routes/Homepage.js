import React from "react";
import HomepageContent from "../PageContents/HomepageContent";

const Homepage = ({
    authError,
    isLoggedIn,
    user,
    auth,
    isLoading,
    setIsLoading,
}) => {
    return (
        <HomepageContent
            authError={authError}
            isLoggedIn={isLoggedIn}
            user={user}
            auth={auth}
        />
    );
};

export default Homepage;