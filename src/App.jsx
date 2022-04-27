
import './App.css';
import Contact from './component/contact/contact';
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div className="App">
      <Contact/>
      <CookieConsent debug={true}
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
  containerClasses="alert alert-warning col-lg-12"
  contentClasses="text-capitalize"
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
    </div>
  );
}

export default App;
