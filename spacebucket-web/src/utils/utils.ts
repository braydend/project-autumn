const isEnvironmentValid = (): boolean => {
    if (!process.env.REACT_APP_FIREBASE_API_KEY) return false;
    if (!process.env.REACT_APP_FIREBASE_AUTH_DOMAIN) return false;
    if (!process.env.REACT_APP_FIREBASE_DATABASE_URL) return false;
    if (!process.env.REACT_APP_FIREBASE_PROJECT_ID) return false;
    if (!process.env.REACT_APP_FIREBASE_STORAGE_BUCKET) return false;
    if (!process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID) return false;
    if (!process.env.REACT_APP_FIREBASE_APP_ID) return false;
    if (!process.env.REACT_APP_FIREBASE_MEASUREMENT_ID) return false;

    return true;
};

export { isEnvironmentValid };
