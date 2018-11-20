import { GET_DEPARTMENT, GET_CATEGORY, GET_VENDOR, GET_YEAR, FILTER_RESET, APPLY_FILTER} from '../dictionary'

export const getDepartment = () => ({
      type: GET_DEPARTMENT,
});

export const getCategory = ({departmentId}) => ({
      type: GET_CATEGORY,
      id: departmentId
});

export const getVendor = () => ({
      type: GET_VENDOR,
});

export const getYear = () => ({
      type: GET_YEAR,
});

export const resetFilter = () => ({
      type: FILTER_RESET,
});

export const applyFilter = ({payload}) => ({
  type: APPLY_FILTER,
  payload: payload
});

