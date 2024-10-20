import React from "react";
import { educationMentor } from "../assets/assets";

const EducationMentor = () => {
  return (
    <div className="bg-greyBgColor my-12 mx-12 p-8 rounded-2xl"> 
      <div>
        <h1 className="font-semibold text-2xl">Education Mentor Services</h1>
        <p className="font-light mt-2">
          Struggling with academic challenges or seeking advice on career paths?
          Our education mentors are here to guide you through your educational
          journey. From study techniques to career advice, we offer support
          tailored to your individual academic needs.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        {
            educationMentor.slice(0,4).map((item,index)=>(
                <div key={index} className="bg-secondaryColor bg-opacity-30 p-4 rounded-2xl">
                    <div className="flex items-center gap-6">
                        <img className="w-16 rounded-full" src={item.mentorImage} alt="" />
                        <p className="text-lg font-medium">{item.mentorName}</p>
                    </div>
                    <div className="mt-3">
                        <p className="font-medium">Specialization: <span className="font-normal">{item.specialization}</span></p>
                        <p className="font-medium">Qualification: <span className="font-normal">{item.qualification}</span></p>
                        <p className="font-medium">Experience: <span className="font-normal">{item.experience} + years</span></p>
                        <p className="font-medium">About: <span className="font-normal">{item.about}</span></p>
                        <ul className="list-disc font-medium">
                            Expertise:
                            <li className="ml-6 font-normal">{item.expertise.line1}</li>
                            <li className="ml-6 font-normal">{item.expertise.line2}</li>
                            <li className="ml-6 font-normal">{item.expertise.line3}</li>
                        </ul>
                    </div>
                </div>
            ))
        }
      </div>
      <div className="flex justify-center mt-6 cursor-pointer">
        See More
      </div>
    </div>
  );
};

export default EducationMentor;
