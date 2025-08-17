import { useState } from 'react';
function Form () {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');

    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    const regex = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)
    const regexPhone = new RegExp(/^[0-9]{9}$/)

    const handlNameChange = (e) => {
        setNameValue(e.target.value)
        

    }
    const handlEmailChange = (e) => {
        setEmailValue(e.target.value)
        if (regex.test(emailValue)) {
            return setIsEmailValid(true)
        } return setIsEmailValid(false)    
    }

    const handlPhoneChange = (e) => {
        setPhoneValue(e.target.value)
        if (regexPhone.test(phoneValue)) {
            return setIsPhoneValid(true)
        } return setIsPhoneValid(false)

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (regex.test(emailValue)) {
             setIsEmailValid(true)
        } else {
         setIsEmailValid(false) 
        }


        if(nameValue.length=== 0) {
            setIsNameValid(false)

        }  else {
             setIsNameValid(true)
        }

        if (regexPhone.test(phoneValue)) {
             setIsPhoneValid(true)
        } else {
             setIsPhoneValid(false)
        }
    }



    return (
        <div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-primary-blue-950">Personal info</h1>
                <p className="text-neutral-500">Please provide your name, email address, and phone number.</p>
            </div>
            <form onSubmit={handleSubmit} className="h-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input value={nameValue} onChange={handlNameChange} className="h-10 px-4 border-neutral-500 rounded-sm border-1 outline-none " id="name"  type="text" placeholder="e.g. Stephen King" />
                    {!isNameValid && <span className="text-primary-red-500 text-xs">This field cannot be empty</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email Address</label>
                    <input value={emailValue} onChange={handlEmailChange} className="h-10 px-4 border-neutral-500 rounded-sm border-1 outline-none " id="email" type="email" placeholder="e.g. stephenking@lorem.com" />
                    {!isEmailValid && <span className="text-primary-red-500 text-xs">Please enter a valid email address</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input value={phoneValue} onChange={handlPhoneChange} className="h-10 px-4 border-neutral-500 rounded-sm border-1 outline-none " id="phone" type="tel" placeholder="e.g. +1 234 567 890" />
                    {!isPhoneValid && <span className="text-primary-red-500 text-xs">Please enter a valid phone number</span>}
                </div> 

                <button type="submit" className="w-fit px-8 py-2 rounded-md text-white bg-primary-blue-950 self-end hover:cursor-pointer hover:bg-primary-purple-600 transition-all">
                    Next Step
                </button>
                
            </form>
        </div>
    );
}
export default Form;