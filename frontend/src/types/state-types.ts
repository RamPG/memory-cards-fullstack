export type RegistrationStateType = {
    error: string,
    success: string,
    isLoading: boolean,
};

export type LoginStateType = {
    error: string,
    success: string,
    isLoading: boolean,
    token: string
}

export type InitialStateType = {
    login: LoginStateType,
    register: RegistrationStateType,
}
