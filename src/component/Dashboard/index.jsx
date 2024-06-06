import React from "react";
import Stepper from '../../common/Stepper'
import Navbar from "../../common/Navbar";

export const Dashboard = () => {

  const Steps = [
    {
      name: "Personal Information",
      status: "In-Progress",
    },
    {
      name: "Professional Background",
      status: "In-Progress",
    },
    {
      name: "Educational Background",
      status: "In-Progress",
    },
    {
      name: "Area Of Expertise",
      status: "In-Progress",
    },
    {
      name: "Mentorship Experience",
      status: "In-Progress",
    },
    {
      name: "Mentorship Preference",
      status: "In-Progress",
    },
    {
      name: "Goals and Expectations",
      status: "In-Progress",
    },
    {
      name: "Availability and Commitment",
      status: "In-Progress",
    },
    {
      name: "Additional Information",
      status: "In-Progress",
    },
  ];


  return (
    <div class="mx-11 px-4">
      <Navbar />
    </div>

    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //   <Navbar />
    //   <div>
    //     Fill the Question and Answer
    //   </div>
    //   <Stepper steps={Steps} />
    // </div>
  );
};
