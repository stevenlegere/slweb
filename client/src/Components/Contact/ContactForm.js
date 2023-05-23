// import React, { useState } from 'react';
// import axios from 'axios';
// import MyAppBar from '../MyAppBar/MyAppBar';


// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await axios.post('/api/send-email', formData);
//             alert('Email sent!');
//             setFormData({ name: '', email: '', message: '' });
//         } catch (error) {
//             console.error('Error sending email: ', error);
//             alert('Error sending email');
//         }
//         };

//         return (
//             <div>
//                 <MyAppBar />
            

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     />
//                 <textarea
//                     name="message"
//                     placeholder="Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     ></textarea>
//                     <button type="submit">Send</button>
//                 </form>
//             </div>

//         );
//     };
//    export default ContactForm;