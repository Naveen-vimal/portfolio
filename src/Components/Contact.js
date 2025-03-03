import React, { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [namesList, setNamesList] = useState([]);

  // Fetch names from the server
  const fetchNames = async () => {
    try {
      const response = await fetch("http://localhost/server.php");
      const data = await response.json();
      setNamesList(data);
    } catch (error) {
      console.error("Error fetching names:", error);
    }
  };

  // Fetch names when component mounts
  useEffect(() => {
    fetchNames();
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/server.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name }),
      });

      const data = await response.text();
      setResult(data);

      // Refresh the names list
      fetchNames();
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Failed to submit");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div>
        <form className="contact-form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Your Name"
          />
          <button type="submit" className="secondary-button">Submit</button>
        </form>
        <h1>{result}</h1>
      </div>

      {/* Display list of names */}
      <h2>Submitted Names:</h2>
      <ul>
        {namesList.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
