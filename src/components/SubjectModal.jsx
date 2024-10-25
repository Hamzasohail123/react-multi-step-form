// SubjectModal.js
'use client'
import React, { useState } from 'react';
import Button from './Button';

const SubjectModal = ({ isOpen, onClose, onSubmit, subjects, levels }) => {

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [selectedLevel, setSelectedLevel] = useState(levels[0]);
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedSubject, selectedLevel);
  };


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Subject</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Subject</label>
            <select name="subject" className="w-full p-2 border border-gray-300 rounded" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Subject Level</label>
            <select name="level" className="w-full p-2 border border-gray-300 rounded" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
              {levels.map((level, index) => (
                <option key={index} value={level}>{level}</option>
              ))}
            </select>
          </div>
          
          <div className="flex justify-between">
            <Button type="button" onClick={onClose} className="bg-white text-[#38B6FF] border border-[#38B6FF] px-4 py-2 rounded mr-2">Cancel</Button>
            <Button type="submit" className="bg-[#38B6FF] text-white px-4 py-2 rounded">Add</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubjectModal;
