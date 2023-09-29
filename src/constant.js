export const interpolatePath = (path, paramValues) =>
  path.replace(/:(\w*)/g, (_, param) => paramValues[param]);