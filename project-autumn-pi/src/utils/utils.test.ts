import { isEnvironmentValid } from "./utils";

test("isEnvironmentValidTest", () => {
    const requiredVars: string[] = ["MISSING_VAR"];
    expect(isEnvironmentValid(process.env, requiredVars)).toBeFalsy();
});
