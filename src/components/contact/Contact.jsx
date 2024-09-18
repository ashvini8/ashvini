import React from 'react'
import "./contact.css"
import { IoMail } from "react-icons/io5"
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef } from "react"
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8jxkqlk', 'template_s70uktr', formRef.current, 'LS2O5CpIW98YQ7qFT')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          formRef.current.reset(); 
      }, (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      });
  }

  return (
    <div className='c' id='contact'>
      <div className="c_wrapper">
        <div className="c_left">
          <h1 className="c_title">Contact Me!</h1>
          <div className="c_info">

            {/* email */}
            <div className="c_info_item">
              <IoMail className='c_icon'/>
              <h6>Email: </h6>
              <p>ashvinihunagund@gmail.com</p>
            </div>

            {/* phone number */}
            <div className="c_info_item">
              <FaPhoneAlt className='c_icon'/>
              <h6>Number: </h6>
              <p>905-251-7675</p>
            </div>

            {/* linkedin */}
            <div className="c_info_item">
              <FaLinkedin className='c_icon'/>
              <h6>LinkedIn: </h6>
              <p><a href="https://www.linkedin.com/in/ashvinihunagund/">linkedin.com/in/ashvinihunagund/</a></p>
            </div>

            {/* github */}
            <div className="c_info_item">
              <FaGithub className='c_icon'/>
              <h6>GitHub: </h6>
              <p><a href="https://github.com/ashvini8">github.com/ashvini8/</a></p>
            </div>

          </div>
        </div>

        <div className="c_right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="text" placeholder="Email" name="user_email" required />
            <textarea rows="5" type='text' placeholder="Message" name="user_message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact;
