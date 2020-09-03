export type PostDataFormType = {
    email: string,
    password: string,
};

export type GetDataTokenType = {
    email: string,
    token: string,
}
export type RegisterResponseType = {
    message: string,
};

export type LoginResponseType = {
    message: string,
    email: string,
};

export type VerifyTokenResponseType = {
    message: string,
    pass: boolean,
}
