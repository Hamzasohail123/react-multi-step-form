export const initialState = {
  personalInfo: {
    firstName: "hamza",
    lastName: "sohail",
    email: "hamza@gmail.com",
    gender: "male",
    country: "Pakistan",
    PhoneNumber: "3353381690",
  },
  profile: {
    profileDescription: "Profile Description",
    profilePhoto: null,
  },
  video: {
    video: null,
    videoUrl: "https://www.youtube.com/watch?v=aAAa-kG5a7I",
  },
  education: {
    university: "karachi University",
    degree: "computer science",
    degreeType: "BS",
    yearOfStudy: "2020",
    endOfStudy: "2024",
    document: null,
  },
  availability: [
    {
      day: "Monday",
      enabled: true,
      timeSlots: [
        { time: "09:00 AM - 12:00 PM", selected: true },
        { time: "12:00 PM - 03:00 PM", selected: true },
        { time: "03:00 PM - 06:00 PM", selected: true },
      ],
    },
    {
      day: "Tuesday",
      enabled: true,
      timeSlots: [
        { time: "09:00 AM - 12:00 PM", selected: false },
        { time: "12:00 PM - 03:00 PM", selected: false },
        { time: "03:00 PM - 06:00 PM", selected: false },
      ],
    },
    {
      day: "Wednesday",
      enabled: true,
      timeSlots: [
        { time: "09:00 AM - 12:00 PM", selected: false },
        { time: "12:00 PM - 03:00 PM", selected: false },
        { time: "03:00 PM - 06:00 PM", selected: false },
      ],
    },
    {
      day: "Thursday",
      enabled: true,
      timeSlots: [
        { time: "09:00 AM - 12:00 PM", selected: false },
        { time: "12:00 PM - 03:00 PM", selected: false },
        { time: "03:00 PM - 06:00 PM", selected: false },
      ],
    },
    {
      day: "Friday",
      enabled: false,
      timeSlots: [
        { time: "09:00 AM - 12:00 PM", selected: false },
        { time: "12:00 PM - 03:00 PM", selected: false },
        { time: "03:00 PM - 06:00 PM", selected: false },
      ],
    },
  ],
  subjectsAndCurrency: {
    curriculum: "",
    hoursPerWeek: "0",
    hourlyRate: "0",
    currency: "AED",
    addedEducations: [],
  },

  errors: {},
};
