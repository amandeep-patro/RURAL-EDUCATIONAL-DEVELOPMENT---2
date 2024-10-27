// pages/Assessment.js

import React from 'react';
import Header from '../components/Header';
import AssessmentCard from '../components/AssessmentCard';
import SubjectCard from '../components/SubjectCard';
import StudentRankings from '../components/StudentRankings';
import AssessmentTable from '../components/AssessmentTable';

const assessmentCards = [
  { title: "UT-1", bgColor: "bg-amber-400 bg-opacity-10" },
  { title: "HALF YEARLY", bgColor: "bg-sky-300 bg-opacity-10" }
];

const subjectCards = [
  { chapter: "CHAPTER 1-5", subject: "Physics", date: "5TH September 2024" },
  { chapter: "CHAPTER 1-8", subject: "English", date: "7TH September 2024" },
  { chapter: "CHAPTER 1-6", subject: "History", date: "9TH September 2024" },
  { chapter: "CHAPTER 1-12", subject: "Maths", date: "11TH September 2024" }
];

function Assessment() {
  return (
    <main className="flex overflow-hidden flex-col bg-slate-300 min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <section className="flex flex-col px-20 mt-6 w-full max-md:px-5">
        
        {/* Greeting Message */}
        <h1 className="text-6xl font-medium text-fuchsia-700 tracking-[2.56px] max-md:text-4xl">
          Good Morning
        </h1>
        <h2 className="mt-3.5 text-4xl font-medium tracking-widest text-fuchsia-700">
          Mr. Pranshu Agarwal
        </h2>

        {/* Assessment Cards */}
        <div className="flex flex-wrap gap-2.5 mt-14">
          {assessmentCards.map((card, index) => (
            <AssessmentCard key={index} {...card} />
          ))}
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-4 gap-5 mt-28 max-md:grid-cols-1">
          {subjectCards.map((card, index) => (
            <SubjectCard key={index} {...card} />
          ))}
        </div>

        {/* Student Rankings */}
        <div className="mt-10">
          <StudentRankings />
        </div>

        {/* Assessment Table */}
        <div className="mt-10">
          <AssessmentTable />
        </div>
      </section>
    </main>
  );
}

export default Assessment;
