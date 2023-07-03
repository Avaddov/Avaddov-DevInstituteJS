import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryString = Object.keys(formData)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
      .join('&');
    const url = 'http://localhost:3000/?' + queryString;
    console.log(url);
    // Perform any further actions with the URL, such as redirecting or making an API request.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Destination:
          <select name="destination" value={formData.destination} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
          </select>
        </label>
        <br />
        <label>
          Lactose Free:
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
