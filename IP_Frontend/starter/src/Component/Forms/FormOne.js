import React from 'react'

const FormOne = () => {



    return (
        <>
            <form action="/" id="1" >
                <div class='sub-entry'>
                    <ul class='list' id='left'>
                        <li><label for="name">Full Name:</label><br></br></li>
                        <li><input class='input' type="text" id="name" name="name" placeholder="John Doe" /><br></br></li>
                        <li><label for="pemail">Personal Email:</label><br></br></li>
                        <li><input class='input' type="email" id="pemail" name="pemail" placeholder="JohnDoe@email.com" /><br></br></li>
                        <li><label for="demail">Digital Futures Email:</label><br></br></li>
                        <li><input class='input' type="email" id="demail" name="dfemail" placeholder="JohnDoe@DFemail.com" /><br></br></li>
                    </ul>
                </div>
                <div class='sub-entry'>
                    <ul class='list' id='right'>
                        <li><label for="github">Github:</label><br></br></li>
                        <li><input class='input' type="url" id="github" name="github" placeholder="https://github.com/JohnDoe" /><br></br></li>
                        <li><label for="linkedin">LinkedIn:</label><br></br></li>
                        <li><input class='input' type="email" id="linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/userID/" /><br></br></li>
                        <li><label for="phone">Phone:</label><br></br></li>
                        <li><input class='input' type="tel" id="phone" name="phone" placeholder="0123456789" /><br></br></li>
                        <br></br>
                    </ul>
                </div>
            </form >
        </>
    )
}

export default FormOne;