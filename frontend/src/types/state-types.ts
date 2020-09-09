export type WordListType = {
    word: string,
    description: string,
};
export type AuthStateType = {
    isSuccess: boolean,
    isError: boolean,
    isLoading: boolean,
}

export type InitialStateType = {
    auth: AuthStateType,
}
