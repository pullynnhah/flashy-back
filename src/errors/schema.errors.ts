import { AppError } from "../protocols";

const schemaError = (errors: string[]): AppError => {
  return {
    name: "SchemaError",
    message: errors,
  };
};

export { schemaError };
