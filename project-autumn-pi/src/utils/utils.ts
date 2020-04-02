const checkEnvironment = (
  env: NodeJS.ProcessEnv,
  requiredVars: string[]
): void => {
  requiredVars.forEach((envVar: string) => {
    if (!env[envVar]) throw new Error(`Mising environent variable: ${envVar}`);
  });
};

const isEnvironmentValid = (
  env: NodeJS.ProcessEnv,
  requiredVars: string[]
): boolean => {
  try {
    checkEnvironment(env, requiredVars);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { isEnvironmentValid, checkEnvironment };
