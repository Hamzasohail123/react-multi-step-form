

const updatePersonalInfo = (state, payload) => ({
  ...state,
  personalInfo: {
    ...state.personalInfo,
    [payload.name]: payload.value,
  },
});

const updateProfile = (state, payload) => ({
  ...state,
  profile: {
    ...state.profile,
    [payload.name]: payload.value,
  },
});

const updateVideo = (state, payload) => ({
  ...state,
  video: {
    ...state.video,
    [payload.name]: payload.value,
  },
});

const updateEducation = (state, payload) => ({
  ...state,
  education: {
    ...state.education,
    [payload.name]: payload.value,
  },
});

const updateAvailability = (state, payload) => ({
  ...state,
  availability: [...payload],
});

export const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_PERSONAL_INFO":
      return updatePersonalInfo(state, action.payload);
    case "SET_PROFILE":
      return updateProfile(state, action.payload);
    case "SET_VIDEO":
      return updateVideo(state, action.payload);
    case "SET_EDUCATION":
      return updateEducation(state, action.payload);
    case "SET_AVAILABILITY":
      return updateAvailability(state, action.payload);
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};