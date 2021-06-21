import React from 'react'
import '../../css/contact.css'

const Contact = () => {
    return (
        <>
            <main className='page-container'>
                <div className='box-container'>
                    <div className='contact-form-box'>
                        <form className='contact-form'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type='text' name='name' placeholder='John Doe' />
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='text' name='email' placeholder='john@doe.com' />
                            </div>
                            <div className='form-group message'>
                                <label>Message</label>
                                <textarea className='message-field' name='message' wrap='soft' placeholder='What would you like to chat about?' />
                            </div>
                            <div className='form-group submit'>
                                <input className='submit-button' type='submit' name='submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact
