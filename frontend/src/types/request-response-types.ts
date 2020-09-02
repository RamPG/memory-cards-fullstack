export type PostDataType = {
    email: string,
    password: string,
};

export type RegisterResponseType = {
    message: string,
};

export type LoginResponseType = {
    message: string,
    token: string,
};
