// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//         phone:'',
//         service:'',
//         details:''

//       });
    
//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
        
//       };
//   return (
//     <div className="bg-transparent p-6 md:p-16">
//       {/* Heading Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-400">Contact Me</h1>
//         <p className="text-gray-600 mt-2">
//           I’d love to hear about your project ideas or opportunities!
//         </p>
//       </div>

//       {/* Form Section */}
//       <form onSubmit={handleSubmit}>  
//       <div className="flex flex-col md:flex-row items-start justify-between gap-6">
//         {/* Left Section */}
//         <div className="md:w-1/2 w-full space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             name="name"
//             value={formData.name}
//         onChange={handleChange}
//             className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <input
//             type="tel"
//             placeholder="Your Phone"
//             name="phone"
//             value={formData.phone}
//         onChange={handleChange}

//             className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             name="email"
//             value={formData.email}
//         onChange={handleChange}
//             className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 w-full space-y-4 ">
//           <select
//            name="service"
//            value={formData.service}
//            onChange={handleChange}
//             className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           >
//             <option value=""

//              disabled selected>
//               Service of Interest
//             </option>
//             <option value="web-development">Web Development</option>
//             <option value="app-development">App Development</option>
//           </select>
//           <textarea
//             placeholder="Project Details"
//             name="details"
//             value={formData.details}
//         onChange={handleChange}
//             className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
//             rows="5"
//           ></textarea>
//           <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 w-full md:w-auto">
//             Send
//           </button>
//         </div>
        
//       </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
     const [isloading, setisloading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        details: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        setisloading(true)
            // Replace these placeholders with your EmailJS details
            const SERVICE_ID = 'service_y9tdor6';
            const TEMPLATE_ID = 'template_feenhuk';
            const USER_ID = 'so3ruewJOzZvE3otd';
         

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                formData,
                USER_ID
            );

            toast.success('🚀 Message sent successfully! Thank you for reaching out.', {
                position: "top-center",
                icon: "🎉"
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                details: '',
            });
        } catch (error) {
            console.error('Failed to send email:', error);
            setisloading(false)
            // alert('Failed to send message. Please try again later.');
            toast.error('❌ Oops! Message not sent. Please try again later.', {
                position: "top-center",
                icon: "😔",
            });
        }finally{
            setisloading(false)
        }
    };

    return (
        <div className="bg-transparent p-6 md:p-16">
            {/* Heading Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-400">Contact Me</h1>
                <p className="text-gray-600 mt-2">
                    I’d love to hear about your project ideas or opportunities!
                </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                    {/* Left Section */}
                    <div className="md:w-1/2 w-full space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 w-full space-y-4">
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="" disabled selected>
                                Service of Interest
                            </option>
                            <option value="web-development">Web Development</option>
                            <option value="app-development">App Development</option>
                        </select>
                        <textarea
                            placeholder="Project Details"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                            rows="5"
                        ></textarea>
                        <button
                            type="submit"
                            className={`bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 w-full md:w-auto ${isloading?'cursor-not-allowed':''} `}
                        >
                            {isloading?"Sending..":"Send"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
