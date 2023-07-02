import { AppError } from "../protocols";

const usernameExistsError = (): AppError => {
  return {
    name: "UsernameExistsError",
    message: "Username already exists",
  };
};

export { usernameExistsError };
