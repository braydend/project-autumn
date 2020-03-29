const isEnvironmentValid = (
    env: NodeJS.ProcessEnv,
    requiredVars: string[]
): boolean => {
    checkEnvironment(env, requiredVars);
    return requiredVars.reduce((acc: boolean, cur) => {
        return env[cur] ? acc : false;
    }, true);
};

const checkEnvironment = (
    env: NodeJS.ProcessEnv,
    requiredVars: string[]
): void => {
    requiredVars.forEach((envVar: string) => {
        if (!env[envVar])
            throw new Error(`Mising environent variable: ${envVar}`);
    });
};

export { isEnvironmentValid, checkEnvironment };
