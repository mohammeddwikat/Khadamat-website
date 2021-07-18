import { LoginForm, SignUpForm } from "../components";

const EntrancePages = (props) => {

  const getForm = () => {
      if(props.typePage == 'login'){
          return <LoginForm/>
      }else if(props.typePage == 'signUp'){
        return <SignUpForm/>
      }else{
          return <div>asdaspod</div>
      }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >   
 
      {
          getForm()
      }
    </div>
  );
};

export default EntrancePages;
