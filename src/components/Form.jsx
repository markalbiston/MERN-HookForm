import React, {useState} from 'react';

const Form = (props) => {
    const [formState, setFormState] = useState ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onChangeHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label className="col-3">First Name</label>
                <input className="col-5" type = "text" name="firstName" onChange={onChangeHandler} />
                <br/>
                <label className="col-3">Last Name</label>
                <input className="col-5" type = "text" name="lastName" onChange={onChangeHandler} />
                <br/>
                <label className="col-3">Email</label>
                <input className="col-5" type = "email" name="email" onChange={onChangeHandler} />
                <br/>
                <label className="col-3">Password</label>
                <input className="col-5" type = "password" name="password" onChange={onChangeHandler} />
                <br/>
                <label className="col-3">Confirm Password</label>
                <input className="col-5" type = "password" name="confirmPassword" onChange={onChangeHandler} />
                <br/>
                <input className="btn btn-outline-primary" type = "submit" />
            </form>
            <div className="box">
                <h3 className="mt-3 title">Your Form Data</h3>
                <div className="col-3 inlineb">First Name:</div> 
                <div className="col-3 inlineb"><em>{formState.firstName}</em></div>
                <br/>
                <div className="col-3 inlineb">Last Name:</div> 
                <div className="col-3 inlineb"><em>{formState.lastName}</em></div>
                <br/>
                <div className="col-3 inlineb">Email:</div> 
                <div className="col-3 inlineb"><em>{formState.email}</em></div>
                <br/>
                <div className="col-3 inlineb">Password:</div> 
                <div className="col-3 inlineb"><em>{formState.password}</em></div>
                <br/>
                <div className="col-3 inlineb">Confirm Password:</div> 
                <div className="col-3 inlineb"><em>{formState.confirmPassword}</em></div>
            </div>
        </div>
    )
}

export default Form;