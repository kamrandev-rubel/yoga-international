import React, { useEffect, useState } from 'react';
import useServiceData from '../../../Hooks/useServiceData';
import Course from '../Course/Course';

const Courses = () => {
    const [services, setServices] = useServiceData()
    const [courses, setCourses] = useState([])
    const coursesData = services.filter(course => course.category === 'course')
    useEffect(()=>{
      setCourses(coursesData)
    },[services])
    return (
      <div className="container mx-auto mt-16">
        <div className="mb-16">
          <h2 className="text-[#112734] text-[5vw]">My Services & <span className='text-[#375B26]'>Courses</span></h2>
          <p className="text-lg text-[#11273499]">
		  I am Fitness instructor and Yoga teacher who is passionate about healthy living. 
          </p>
        </div>
        <div className="grid gap-8 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {courses.map((course) => <Course key={course.id} course={course} />)}
        </div>
      </div>
    );
};

export default Courses;