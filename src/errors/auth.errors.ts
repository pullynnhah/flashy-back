import { AppError } from "../protocols";

const authenticationError = (): AppError => {
  return {
    name: "AuthenticationError",
    message: "Username and/or password are incorrect",
  };
};

const tokenMissingError = (): AppError => {
  return {
    name: "TokenMissingError",
    message: "Token is missing",
  };
};

export { authenticationError, tokenMissingError };
