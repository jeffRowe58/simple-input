import{useState} from "react";

const SimpleInput = (props) => {
    // Use State
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

    //Use Ref
    //const nameInputRef = useRef();

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }
    const formSubmissionHandler = event => {
        event.preventDefault();
        if(enteredName.trim() === ''){
            setEnteredNameIsValid(false);
            return;
        }
        //const enteredValue = nameInputRef.current.value;
        setEnteredNameIsValid(true);
        console.log(enteredName);
        //console.log(enteredValue);
        setEnteredName('');
    };



  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
            /*ref={nameInputRef}*/
            type='text'
            id='name'
            onChange={nameInputChangeHandler}
            value={enteredName}
        />
          {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
