import React, { useState } from "react";

import pastries from "../assets/images/pastries.jpg";

import emailjs from '@emailjs/browser';



const Contact = () => {



		const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
		const [stateMessage, setStateMessage] = useState<string>('');

		const sendEmail = (e:any) => {
		  e.persist();
		  e.preventDefault();
		  setIsSubmitting(true);
		  emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID+'',
			  	process.env.REACT_APP_EMAILJS_TEMPLATE_ID+'',
			  	e.target,
			  	process.env.REACT_APP_EMAILJS_PUBLIC_KEY+''
			)
			.then(
			  (result) => {
				setStateMessage('Message sent!');
				setIsSubmitting(false);
				setTimeout(() => {
				  setStateMessage('');
				}, 5000); // hide message after 5 seconds
				window.alert("We got your message. Thank you")
			  },
			  (error) => {
				setStateMessage('Something went wrong, please try again later');
				setIsSubmitting(false);
				setTimeout(() => {
				  setStateMessage('');
				}, 5000); // hide message after 5 seconds

				window.alert("We are facing some technical issue. Please try again. Thank you")
			  }
			);
		  
		  // Clears the form after sending the email
		  e.target.reset();
		};

    return (
       
        <div className="body">
			<div className="contact-form">
				<h1>Contact Us</h1>
				<form onSubmit={(e)=>{sendEmail(e)}}>
					<div>
						<strong>First Name *</strong>
						<input type="text" id="text-input" name="first_name" required></input>
					</div>
					<div>
						<strong>Last Name *</strong>
						<input type="text" id="text-input" name="last_name" required></input>
					</div>
					<div>
						<strong>Phone Number *</strong>
						<input type="text" id="text-input" name="phone" required></input>
					</div>
					<div>
						<strong>Email *</strong>
						<input type="email" id="text-input" name="email" required></input>
					</div>
					<div>
						<strong>Message *</strong>
						<textarea id="textarea-input" name="message" required></textarea>
					</div>

					<button type="submit" className="submit-button">Submit</button>
				</form>
			</div>
		</div>
        
    )
}

export default Contact;