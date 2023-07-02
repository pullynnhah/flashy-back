import { AppError } from "../protocols/error.protocol";

const usernameExistsError = (): AppError => {
  return {
    name: "UsernameExistsError",
    message: "Username already exists",
  };
};

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

const schemaError = (errors: string[]): AppError => {
  return {
    name: "SchemaError",
    message: errors,
  };
};

export { usernameExistsError, authenticationError, tokenMissingError, schemaError };
