import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isAuthenticated)
    return (
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          style={{
            height: "40px",
            width: "40px",
            marginRight: "10px",
            borderRadius: "50%",
          }}
          src={user.picture}
          alt={user.name}
        />
        <p style={{ margin: 0 }}>{user.name}</p>
      </div>
    );

  return (
    <Button variant="secondary" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default Profile;
