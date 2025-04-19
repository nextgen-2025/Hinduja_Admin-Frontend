import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ALL_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM"
];

const EXPERIENCES = [
  "1 Year", "2 Years", "3 Years", "4 Years", "5 Years",
  "6 Years", "8 Years", "9 Years", "10 Years"
];

const SPECIALIZATIONS = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist"
];

const AddDoctorsNew = () => {
  const [doctor, setDoctor] = useState({
    _id: uuidv4(),
    name: "",
    specialization: "",
    experience: "",
    contact: "",
    email: "",
    allSlots: ALL_SLOTS,
    bookedSlots: [],
    profileImage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setDoctor(prev => ({ ...prev, profileImage: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Info:", doctor);
    // handle form submission (backend/API integration)
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={doctor.name}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Specialization</label>
          <select
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Specialization</option>
            {SPECIALIZATIONS.map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Experience</label>
          <select
            name="experience"
            value={doctor.experience}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Experience</option>
            {EXPERIENCES.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={doctor.contact}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="mb-1">Doctor Bio</label>
          <textarea
            name="bio"
            value={doctor.bio}
            onChange={handleChange}
            rows="4"
            className="border p-2 rounded"
            placeholder="Write a short description..."
            required
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctorsNew;
