export const FormFields = [];

export const PersonalInformationFields = [
  {
    type: "input",
    name: "first_name",
    fieldtype: "text",
    label: "First Name",
    placeholder: "Enter First Name",
  },
  {
    type: "input",
    name: "email",
    fieldtype: "email",
    label: "E-mail",
    placeholder: "Enter Email",
  },
  {
    type: "input",
    name: "phone_number",
    fieldtype: "number",
    label: "Phone Number",
    placeholder: "Enter Phone Number",
  },
  {
    type: "dropdown",
    name: "is_linkedin_available",
    label: "LinkedIn Profile (if available)",
    placeholder: "",
    options: [
      { key: "yes", value: "Yes" },
      { key: "no", value: "No" },
    ],
  },
];

export const ProfessionalBackgroundFields = [
  {
    type: "input",
    name: "current_job_title",
    fieldtype: "text",
    label: "Current Job Title",
    placeholder: "Current Job Title",
  },
  {
    type: "input",
    name: "current_employee",
    fieldtype: "text",
    label: "Current Employee ",
    placeholder: "Current Employee ",
  },
  {
    type: "input",
    name: "industry",
    fieldtype: "text",
    label: "Industry",
    placeholder: "Industry",
  },
  {
    type: "dropdown",
    name: "is_linkedin_available",
    label: "LinkedIn Profile (if available)",
    placeholder: "",
    options: [
      { key: "yes", value: "Yes" },
      { key: "no", value: "No" },
    ],
  },
];

export const EducationalBackgroundFields = [
  {
    type: "input",
    name: "current_job_title",
    fieldtype: "text",
    label: "Highest Degree Achieved",
    placeholder: "Highest Degree Achieved",
  },
  {
    type: "input",
    name: "current_employee",
    fieldtype: "text",
    label: "Field of Study",
    placeholder: "Field of Study",
  },
  {
    type: "input",
    name: "industry",
    fieldtype: "text",
    label: "Industry",
    placeholder: "Industry",
  },
];

export const AreaOfExpertiseFields = [
  {
    type: "input",
    name: "current_job_title",
    fieldtype: "text",
    label: "Please list your areas of expertise",
    placeholder: "(e.g., project management, software development, marketing)",
  },
  {
    type: "input",
    name: "current_employee",
    fieldtype: "text",
    label:
      "What specific skills or knowledge are you most confident in sharing with a mentee?",
    placeholder: "Skils",
  },
];

export const MentorShipExperienceFields = [
  {
    type: "checkbox",
    name: "current_job_title",
    label: "Have you previously mentored someone?",
    options: [
      { key: "yes", value: "Yes" },
      { key: "no", value: "No" },
    ],
  },
  {
    type: "input",
    name: "current_employee",
    fieldtype: "text",
    label: "If yes, please briefly describe your mentorship experience",
    placeholder: "mentorship experience",
  },
];

export const MentorshipPreferenceFields = [
  {
    type: "input",
    name: "current_job_title",
    fieldtype: "text",
    label: "What type of mentee are you most interested in mentoring?",
    placeholder:
      "(e.g., students, early-career professionals, career changers)",
  },
  {
    type: "input",
    name: "current_employee",
    fieldtype: "text",
    label: "Preferred method of communication",
    placeholder: "(e.g., email, video calls, in-person meetings)",
  },
  {
    type: "input",
    name: "industry",
    fieldtype: "text",
    label: "How often are you available to meet with a mentee?",
    placeholder: "(e.g., weekly, bi-weekly, monthly)",
  },
];

export const GoalsandExperienceFields = [
  {
    type: "input",
    name: "current_job_title",
    fieldtype: "text",
    label: "What do you hope to achieve through this mentorship program?",
    placeholder: "",
  },
  {
    type: "input",
    name: "current_employee",
    fieldtype: "text",
    label: "What are your expectations from the mentee?",
    placeholder: "",
  },
];

export const AvailabilityCommitmentFields = [
  {
    type: "input",
    name: "current_job_title",
    fieldtype: "text",
    label: "How many mentees are you willing to take on at a time?",
    placeholder: "",
  },
  {
    type: "input",
    name: "current_employee",
    fieldtype: "text",
    label: "What is your preferred duration for a mentorship relationship?",
    placeholder: "",
  },
];

export const AdditionalInformationFields = [
    {
      type: "textbox",
      name: "current_job_title",
      label: "Is there any additional information you would like to provide about yourself or your mentorship style?",
      placeholder: "",
    },
  ];
