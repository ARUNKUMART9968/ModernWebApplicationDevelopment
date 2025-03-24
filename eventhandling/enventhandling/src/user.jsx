import React ,{useState}from "react";
function User(){
    const [inputText, setInputText] = useState('');
    return(
        <div>
        <input type="text" value={inputText} 
        onChange={(e) => setInputText(e.target.value)} />
        <p>You typed: {inputText}</p>
        </div>
    );

}
export default User;

