import React from 'react';
import { Calendar, Clock, GraduationCap } from 'lucide-react';

const InternshipCard = ({ course, year, duration, dates, joining }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-5 h-5 text-blue-600" />
        <div className="text-blue-600 font-semibold">{course}</div>
        <div className="text-gray-600">({year})</div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Duration: {duration}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Dates: {dates}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Joining: {joining}</span>
        </div>
      </div>
    </div>
  );
};

function Recruiters() {
  const internships = [
    {
      course: 'B.Tech',
      year: '2025 passing',
      duration: '6 MONTHS',
      dates: '01 JAN 2025 to 30 JUNE 2025',
      joining: 'July 2025'
    },
    {
      course: 'B.Tech',
      year: '2026 passing',
      duration: '2 MONTHS',
      dates: '24 MAY 2025 to 25 JULY 2025',
      joining: 'July 2026'
    },
    {
      course: 'M.Tech',
      year: '2025 Passing',
      duration: '6 MONTHS',
      dates: '01 JAN 2025 to 30 JUNE 2025',
      joining: 'July 2025'
    },
    {
      course: 'M.Tech',
      year: '2026 Passing',
      duration: '2 MONTHS',
      dates: '24 MAY 2025 to 25 JULY 2025',
      joining: 'July 2026'
    },
    {
      course: 'M.Tech',
      year: '2026 Passing',
      duration: '6 MONTHS',
      dates: '01 JAN 2026 to 30 JUNE 2026',
      joining: 'July 2026'
    },
    {
      course: 'M.Sc',
      year: '2025 Passing',
      duration: '4 MONTHS',
      dates: '01 JAN 2025 to 30 April 2025',
      joining: 'June 2025'
    },
    {
      course: 'B.Design',
      year: '2025 Passing',
      duration: '6 MONTHS',
      dates: '01 JAN 2025 to 30 JUNE 2025',
      joining: 'July 2025'
    },
    {
      course: 'B.Design',
      year: '2026 Passing',
      duration: '2 MONTHS',
      dates: '24 MAY 2025 to 25 JULY 2025',
      joining: 'July 2026'
    },
    {
      course: 'MBA',
      year: '2025 Passing',
      duration: '4 MONTHS',
      dates: '01 JAN 2025 to 30 APRIL 2025',
      joining: 'June 2025'
    },
    {
      course: 'MBA',
      year: '2026 Passing',
      duration: '2 MONTHS',
      dates: '24 MAY 2025 to 25 JULY 2025',
      joining: 'June 2026'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-dotted-pattern bg-dot-lg opacity-100 pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Internship/Placement Availability and Joining dates for students
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Below is a detailed description of internship and Placements availability (date & duration) for various courses at
          the university. The dates mentioned below for the exam and internship are tentative, it all depends on the
          release of the last date sheet scheduled 10-15 days before the exam
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              course={internship.course}
              year={internship.year}
              duration={internship.duration}
              dates={internship.dates}
              joining={internship.joining}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recruiters;