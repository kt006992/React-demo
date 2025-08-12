import "./login.css"
import React, {useState} from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
  };

  const isFormValid = () => {
        const { name, phone, email } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return name.trim() !== '' && 
               phone.trim() !== '' && 
               email.trim() !== '' && 
               emailRegex.test(email);
    };

   const handleSubmit = async e => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert('Submission successful')
    } catch (error) {
        alert('Submission failed')
    }
  };

    return (
    <div className="container">
      <h2>🌞 Good Morning</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button
          type="submit"
          style={{ opacity: isFormValid() ? 1 : 0.5, cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

