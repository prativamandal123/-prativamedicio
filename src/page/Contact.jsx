import React, { useState } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5'; 
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const [subj, setSubj] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      subj,
      msg,
    });
    // Reset form fields after submission (optional)
    setName("");
    setEmail("");
    setSubj("");
    setMsg("");

    toast.success("Your Record has been Submitted");
  };

  return (
    <div className='contact py-5'>
      <div className='container'>
        <h1 className='text-center'>Contact</h1>
        <div className='lined my-3'></div>
        <p className='text-center mb-4'>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        <div className='row'> 
          <div className='col-12 colmd-12'>
            <iframe src="" frameborder="0"></iframe>

          </div>

        </div>
        
        <div className='row'>
          {/* Left Side */}
          <div className='col-12 col-md-6'>
            <div className='shadow-box mb-4 text-center'>
              <div className='contacticon py-3 mb-2'><IoLocationOutline size={30} /></div>
              <h3 className='fs-5'>Address</h3>
              <p className='fs-0'>A108 Adam Street, New York, NY 535022</p>
            </div>

            <div className='row'>
              <div className='col-12 col-md-6 mb-4'>
                <div className='shadow-box text-center'>
                  <div className='contacticon py-3 mb-2'><FaPhone size={25} /></div> 
                  <h3 className='fs-5'>Call Us</h3>
                  <p className='fs-0'>+1 5589 55488 55</p>
                </div>
              </div>
              <div className='col-12 col-md-6 mb-4'>
                <div className='shadow-box text-center'>
                  <div className='contacticon py-3 mb-2'><BiEnvelope size={27} /></div>
                  <h3 className='fs-5'>Email Us</h3>
                  <p className='fs-0'>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className='col-12 col-md-6'>
            <div className='shadow-boxright text-center'>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-12 col-md-6 mb-4'>
                    <input 
                      type='text' 
                      className='form-control' 
                      placeholder='Your Name' 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='col-12 col-md-6 mb-4'>
                    <input 
                      type='email' 
                      className='form-control' 
                      placeholder='Your Email' 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Subject' 
                    value={subj}
                    onChange={(e) => setSubj(e.target.value)}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <textarea
                    className='form-control'
                    placeholder='Message'
                    rows='4'
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type='submit' className='btn py-2 contactbtn'>Send Message</button>
              </form>
              <Toaster />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
