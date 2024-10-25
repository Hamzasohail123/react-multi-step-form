import * as Yup from "yup";
export const validationSchemas = [
  Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters long"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters long"),
    email: Yup.string()
      .required("Email Address is required")
      .email("Invalid email format"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
  }),
  Yup.object().shape({
    profileDescription: Yup.string().required(
      "Profile description is required"
    ),
    profilePhoto: Yup.mixed().required("Profile photo is required"),
  }),
  Yup.object().shape({
    video: Yup.mixed().required("A video file is required"),
  }),
  Yup.object().shape({
    university: Yup.string().required("University is required"),
    degree: Yup.string().required("Degree is required"),
    degreeType: Yup.string().required("Degree type is required"),
    yearOfStudy: Yup.string()
      .matches(/^\d{4}$/, "Year of study must be a 4-digit number")
      .required("Year of study is required"),
    endOfStudy: Yup.string()
      .matches(/^\d{4}$/, "End of study must be a 4-digit number")
      .required("End of study is required"),
    document: Yup.mixed()
      .test("fileType", "Unsupported file format", (value) => {
        return value && value.type === "application/pdf";
      })
      .required("Document is required"),
  }),
  Yup.array().of(
    Yup.object().shape({
      day: Yup.string().required("Day is required"),
      enabled: Yup.boolean().required("Enabled is required"),
      timeSlots: Yup.array().of(
        Yup.object().shape({
          time: Yup.string().required("Time is required"),
          selected: Yup.boolean().required("Selected is required"),
        })
      ),
    })
  ),
];
