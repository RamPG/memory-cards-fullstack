import { WordListType } from './state-types';

export type PostDataFormType = {
    email: string,
    password: string,
};

export type RegisterResponseType = {
    message: string,
};

export type LoginResponseType = {
    message: string,
    email: string,
    wordList: WordListType,
};

export type VerifyTokenResponseType = {
    message: string,
    pass: boolean,
}

export type LogoutResponseType = {
    message: string,
}

export type WordListResponseType = {
    wordList: Array<WordListType>
}
