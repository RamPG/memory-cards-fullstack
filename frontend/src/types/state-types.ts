export type AuthenticationStateType = {
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
};

export type InitialStateType = {
    login: AuthenticationStateType,
    register: AuthenticationStateType,
}
