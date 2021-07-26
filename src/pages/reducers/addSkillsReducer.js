const initialState = {
  skillsForProject: [
    
  ],
};

export default function AddSkillsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        skillsForProject: [...state.skillsForProject, action.skill]
      };
    case "DELETE":
      let skills = state.skillsForProject
      skills = skills.filter(skill => skill !== action.skill)
      return {
        skillsForProject: skills
      };
    default:
      return state;
  }
}
