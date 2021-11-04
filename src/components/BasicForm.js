import useInput from "../hooks/use-input";

const BasicForm = (props) => {

    const {
        value: enteredFirstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: firstNameReset
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredLastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameReset
    } = useInput(value => value.trim() !== '');

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(value => value.includes('@'));

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
            return;
        }
        firstNameReset();
        lastNameReset();
        emailReset();
    };

    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstNameValue}
                    />
                    {firstNameHasError && <p className="error-text">First name must not be empty.</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text'
                           id='lastName'
                           onChange={lastNameChangeHandler}
                           onBlur={lastNameBlurHandler}
                           value={enteredLastNameValue}
                    />
                    {lastNameHasError && <p className="error-text">Last name must not be empty.</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='email'
                       id='email'
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                       value={emailValue}
                />
                {emailHasError && <p className="error-text">E-Mail must be valid.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
