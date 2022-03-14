import React, { useRef } from 'react'
import './Contact.css'
import {MdOutgoingMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
const form =useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ifaj9f4', 'template_q6dczrp', form.current, 'r5ocyizCnYgLCeS02')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset()
};

  return (
   <section id='contact'>
     <h5>Get In Touch</h5>
     <h3>Contact Me</h3>
     <div className='container contact_container'>
       <div className="contact_options">
         <article className='contact_option'>
           <MdOutgoingMail className='contact_option-icon'/>
           <h4>Email</h4>
           <h5>avinashparakhiya@gmail.com</h5>
           <a href="mailto:avinashparakhiya@gmail.com" target="_blank">Send a message</a>
         </article>

         <article className='contact_option' >
           <RiMessengerLine className='contact_option-icon'/>
           <h4>Messenger</h4>
           <h5>Avinash Parakhiya</h5>
           <a href="https://m.me/avinash.parkhiya" target="_blank">Send a message</a>
         </article>

         <article className='contact_option'>
           <BsWhatsapp className='contact_option-icon'/>
           <h4>Whatsapp</h4>
           <h5>+91 9033967841</h5>
           <a href="whatsapp://send?text=Hello MR.Avinash Parakhiya!&phone=+9190339678411" target="_blank">Send a message</a>
         </article>
       </div>
       <form ref={form} onSubmit={sendEmail}>
<input type='text' name='name' placeholder='Enter Your Full Name' required />
<input type='email' name='email' placeholder='Your Email' required />
<textarea name="message" id='' colos="30" rows="7" required></textarea>
<button type='submit' className='btn btn-primary'>Submit</button>
       </form>
     </div>
   </section>
  )
}

export default Contact  