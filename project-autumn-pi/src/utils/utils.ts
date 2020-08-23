const getEnvironmentVariable: (key: string) => string = (key) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Environment variable: ${key} does not exist`);
  }

  return value;
};
