import { SET_USER, LOG_OUT } from "../types/types";

export const login = (user) => ({
  type: SET_USER,
  user,
});
export const logout = () => ({
  type: LOG_OUT,
});
