import React, { useState } from "react";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black shadow-md rounded-lg w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-white">Contact Us</legend>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-sm py-2 px-3 border border-gray-300 focus:ring-2 focus:ring-slate-200 focus:outline-none text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-sm py-2 px-3 border border-gray-300 focus:ring-2 focus:ring-slate-200 focus:outline-none text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="textbox" className="text-sm font-medium text-white">
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-sm py-2 px-3 border border-gray-300 focus:ring-2 focus:ring-slate-200 focus:outline-none text-black"
              rows={4}
            />
          </div>
        </fieldset>

        <div className="flex justify-evenly gap-4">
          <button
            type="button"
            onClick={handleClear}
            className="py-2 px-4 bg-white text-black font-medium rounded-md hover:bg-stone-200"
          >
            Clear All
          </button>
          <button
            type="submit"
            className="py-2 px-4 bg-stone-700 text-white font-medium rounded-md hover:bg-stone-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
