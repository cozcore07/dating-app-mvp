import React, { useState } from "react";

export default function MatchmakerIntake() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferences: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch("/api/matchmaker/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      alert("Intake form submitted!");
      setFormData({ name: "", email: "", preferences: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Matchmaker Intake Form</h2>
      <input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Your Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="preferences"
        placeholder="Your Preferences"
        value={formData.preferences}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
   
