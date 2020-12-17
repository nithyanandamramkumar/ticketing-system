import React , {useState} from 'react'
import './Entry.style.css'
import {Jumbotron} from 'react-bootstrap'
import {LoginForm} from '../../components/login/login.comp'
import {ResetPassword} from '../../components/passwordReset/passwordReset.comp'
export const Entry = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [frmLoad, setFrmLoad] = useState("login")

    const handleOnChange = (e) => {
        const { name,value } = e.target
        console.log(name,value)

        switch(name) {
            case 'email': 
                setEmail(value);
                break;
            case 'password' : 
                setPassword(value);
                break;
            default:
                break;
        }
    }
    const handleOnSubmit =(e) => {
        e.preventDefault();
        if (!email || !password)
        {
            alert("Fill up email and password")
        }

    }
    const handleOnResetSubmit =(e) => {
        e.preventDefault();
        if (!email )
        {
            alert("Fill up email")
        }

    }

    const formSwitcher = frmType => {
        setFrmLoad(frmType)
    }
    return (
        <div className="entry-page bg-info">
                          {frmLoad === 'login' && 

           <Jumbotron className="form-box">
               <LoginForm formSwitcher={formSwitcher} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} email={email} password={password}></LoginForm>
           </Jumbotron>}
           {frmLoad ==='reset' &&
           <Jumbotron className="form-box">
    <ResetPassword formSwitcher={formSwitcher} handleOnResetSubmit={handleOnResetSubmit} handleOnChange={handleOnChange} email={email}></ResetPassword>
</Jumbotron>}
        </div>




    )
}
