export type WordListType = {
    id: string,
    word: string,
    description: string,
};

export type ProfileStateType = {
    isSuccess: boolean,
    error: string,
    isLoading: boolean,
    wordList: Array<WordListType>,
}

export type AuthStateType = {
    isSuccess: boolean,
    isError: boolean,
    isLoading: boolean,
}

export type InitialStateType = {
    auth: AuthStateType,
    profile: ProfileStateType,
}
