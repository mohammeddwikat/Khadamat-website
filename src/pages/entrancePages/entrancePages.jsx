import { LoginForm, SignUpForm, ForgetForm, CodeForm, ResetPasswordForm } from "../components";

const EntrancePages = (props) => {

  const getForm = () => {
      if(props.typePage == 'login'){
          return <LoginForm/>
      }else if(props.typePage == 'signUp'){
        return <SignUpForm/>
      }else if(props.typePage == 'forget'){
          return <ForgetForm/>
      }
      else if(props.typePage == 'code'){
        return <CodeForm/>
      }
      else if(props.typePage == 'reset'){
        return <ResetPasswordForm/>
      }
      else{
        return <div>Error 404 <br/> not found</div>
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
