import axiosInstance from "../api/axiosInstance";

export const login = async (formData) => {
  const response = await axiosInstance.post("/api/auth/login", formData);
  return response.data;
};

export const signup = async (formData) => {
  const response = await axiosInstance.post("/api/auth/signup", formData);
  return response.data;
};