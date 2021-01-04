import React, {useContext} from "react";
import ProfilDetail from "../../components/profil/ProfilDetail";
import RegisterForm from "../../components/registerForm/RegisterForm";
// import SignInForm from "../../components/signIn/SignIn";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";
import Header from "../../components/headers/Header";


const Main = () => {
  return (
    <div>
      {/* <SignInForm /> */}
      
      <Header />
      <SectionTwo/>
      <SectionThree/>
      {/* <ProfilDetail /> */}
    </div>
  );
};

export default Main;
