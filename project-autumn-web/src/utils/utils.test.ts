import { isEnvironmentValid } from "./utils";

const includedEnv = ["REACT_APP_FIREBASE_APP_ID"];

test("Test Environemnt Validity Check", () => {
    expect(isEnvironmentValid(process.env, includedEnv)).toBeTruthy();
});
