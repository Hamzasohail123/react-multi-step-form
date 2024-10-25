// // Update initialState in your formReducer.js

// export const initialState = {
//   personalInfo: {
//     firstName: "hamza",
//     lastName: "sohail",
//     email: "hamza@gmail.com",
//     gender: "male",
//     country: "Pakistan",
//     PhoneNumber: "3353381690",
//   },
//   profile: {
//     profileDescription: "Profile Description",
//     profilePhoto: null,
//   },
//   video: {
//     video: null,
//     videoUrl: 'https://www.youtube.com/watch?v=aAAa-kG5a7I'
//   },
//   education: {
//     university: "karachi University",
//     degree: "computer science",
//     degreeType: "BS",
//     yearOfStudy: "2020",
//     endOfStudy: "2024",
//     document: null,
//   },
//   availability: [
//     {
//       day: "Monday",
//       enabled: true,
//       timeSlots: [
//         { time: "09:00 AM - 12:00 PM", selected: true },
//         { time: "12:00 PM - 03:00 PM", selected: true },
//         { time: "03:00 PM - 06:00 PM", selected: true },
//       ],
//     },
//     {
//       day: "Tuesday",
//       enabled: true,
//       timeSlots: [
//         { time: "09:00 AM - 12:00 PM", selected: false },
//         { time: "12:00 PM - 03:00 PM", selected: false },
//         { time: "03:00 PM - 06:00 PM", selected: false },
//       ],
//     },
//     {
//       day: "Wednesday",
//       enabled: true,
//       timeSlots: [
//         { time: "09:00 AM - 12:00 PM", selected: false },
//         { time: "12:00 PM - 03:00 PM", selected: false },
//         { time: "03:00 PM - 06:00 PM", selected: false },
//       ],
//     },
//     {
//       day: "Thursday",
//       enabled: true,
//       timeSlots: [
//         { time: "09:00 AM - 12:00 PM", selected: false },
//         { time: "12:00 PM - 03:00 PM", selected: false },
//         { time: "03:00 PM - 06:00 PM", selected: false },
//       ],
//     },
//     {
//       day: "Friday",
//       enabled: false,
//       timeSlots: [
//         { time: "09:00 AM - 12:00 PM", selected: false },
//         { time: "12:00 PM - 03:00 PM", selected: false },
//         { time: "03:00 PM - 06:00 PM", selected: false },
//       ],
//     },
//   ],
//   subjectsAndCurrency: 
//     {
//       curriculum: "",
//       hoursPerWeek: "0",
//       hourlyRate: "0",
//       currency: "AED",
//       addedEducations: [], // Initialize with addedEducations
//     },

  

//   errors: {},
// };

// export const formReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_PERSONAL_INFO":
//       return {
//         ...state,
//         personalInfo: {
//           ...state.personalInfo,
//           [action.payload.name]: action.payload.value,
//         },
//       };
//     case "SET_PROFILE":
//       return {
//         ...state,
//         profile: {
//           ...state.profile,
//           [action.payload.name]: action.payload.value,
//         },
//       };
//     case "SET_VIDEO":
//       return {
//         ...state,
//         video: {
//           ...state.video,
//           [action.payload.name]: action.payload.value,
//         },
//       };
//     case "SET_EDUCATION":
//       return {
//         ...state,
//         education: {
//           ...state.education,
//           [action.payload.name]: action.payload.value,
//         },
//       };
//     case "SET_AVAILABILITY":
//       console.log("action payload", action.payload);
//       return {
//         ...state,
//         availability: [...action.payload],
//       };
//     case "SET_SUBJECTS":
//       console.log("actionnnnnnnnn",action.payload);
//       return {
//         ...state,
//         subjects: action.payload,
//       };

//     case "SET_ERRORS":
//       return { ...state, errors: action.payload };
//     default:
//       return state;
//   }
// };
// console.log(initialState);
// // import { PhoneNumber } from "react-phone-number-input";
// import * as Yup from "yup";

// export const validationSchemas = [
//   Yup.object().shape({
//     firstName: Yup.string()
//       .required("First Name is required")
//       .min(2, "First Name must be at least 2 characters long"),
//     lastName: Yup.string()
//       .required("Last Name is required")
//       .min(2, "Last Name must be at least 2 characters long"),
//     email: Yup.string()
//       .required("Email Address is required")
//       .email("Invalid email format"),
//     gender: Yup.string().required("Gender is required"),
//     country: Yup.string().required("Country is required"),
//   }),
//   Yup.object().shape({
//     profileDescription: Yup.string().required(
//       "Profile description is required"
//     ),
//     profilePhoto: Yup.mixed().required("Profile photo is required"),
//   }),
//   Yup.object().shape({
//     video: Yup.mixed().required("A video file is required"),
//     // videoUrl: Yup.mixed().required("A video file is required"),
//   }),

//   Yup.object().shape({
//     university: Yup.string().required("University is required"),
//     degree: Yup.string().required("Degree is required"),
//     degreeType: Yup.string().required("Degree type is required"),
//     yearOfStudy: Yup.string()
//       .matches(/^\d{4}$/, "Year of study must be a 4-digit number")
//       .required("Year of study is required"),
//     endOfStudy: Yup.string()
//       .matches(/^\d{4}$/, "End of study must be a 4-digit number")
//       .required("End of study is required"),
//     document: Yup.mixed()
//       .test("fileType", "Unsupported file format", (value) => {
//         return value && value.type === "application/pdf";
//       })
//       .required("Document is required"),
//   }),
//   Yup.array().of(
//     Yup.object().shape({
//       day: Yup.string().required("Day is required"),
//       enabled: Yup.boolean().required("Enabled is required"),
//       timeSlots: Yup.array().of(
//         Yup.object().shape({
//           time: Yup.string().required("Time is required"),
//           selected: Yup.boolean().required("Selected is required"),
//         })
//       ),
//     })
//   ),
// ];
