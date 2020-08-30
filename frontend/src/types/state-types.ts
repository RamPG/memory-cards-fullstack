export type AuthenticationStateType = {
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
};

export type InitialStateType = {
    login: AuthenticationStateType,
    register: AuthenticationStateType,
}
