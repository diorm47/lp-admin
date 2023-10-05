const CREATE_EMPLOYYE = "CREATE_EMPLOYYE";
const GET_EMPLOYYE = "GET_EMPLOYYE";

const initialState = {
  employees: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMPLOYYE:
      return {
        ...state,
        employees: { ...state.employees, ...action.payload },
      };
    case GET_EMPLOYYE:
      return {
        ...state,
        employees: [...state.employees, ...action.payload],
      };

    default:
      return state;
  }
};

export const createEmployeeAction = (payload) => {
  return {
    type: CREATE_EMPLOYYE,
    payload,
  };
};
export const getEmployeeAction = (payload) => {
  return {
    type: GET_EMPLOYYE,
    payload,
  };
};

export default employeeReducer;
