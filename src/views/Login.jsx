import { useEffect, useState } from "react";

//import { gapi } from "gapi-script";
//import { GoogleLogin } from "react-google-login";
function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileObj, setProfileObj] = useState({});
  const clientID = "959939122893-efhseqnnogj59ivjcicdkhah0k3r49dk.apps.googleusercontent.com";
  const onSuccess = (res) => {
    setIsLoggedIn(true);
    setProfileObj(res.profileObj);
    console.log("Login Success: currentUser:", res.profileObj);
  };
  const onFailure = (res) => {
    setIsLoggedIn(false);
    setProfileObj({});
    console.log("Login failed: res:", res);
  };

  useEffect(() => {
    /*
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
    */
  }, []);
  return (
    <div className="center">
      <h1>Login</h1>

      <div className="btn"> 
      {/*}
        <GoogleLogin
          clienteId={clientID}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        
        />
    */}
      </div>
      <div className={isLoggedIn ? "profile" : "hidden"}>
          <div>
            <img src={profileObj.imageUrl} alt={profileObj.name} />
            <h3>Bienvenido {profileObj.name}</h3>
          </div>
      </div>
    </div>
  );
}

export default Login;
