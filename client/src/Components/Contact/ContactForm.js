// import React, { useState } from 'react';
// import App from '../../App'
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
            

//             <form className="ContactForm" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     />
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     />
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="message">Message</label>
//                 <textarea
//                     name="message"
//                     placeholder="Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     ></textarea>
//                     </div>
//                     <button type="submit">Send</button>
//                 </form>
//             </div>

//         );
//     };
//    export default ContactForm;