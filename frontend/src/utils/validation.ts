export type ValidationResultType = {
  isSuccess: boolean,
  message: string,
};

export function passwordValidation(password: string): boolean {
  const pattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  return !!password.match(pattern);
}

export function emailValidation(email: string): boolean {
  const pattern: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!email.match(pattern);
}

export function loginFormValidation(
  email: string, password: string,
): ValidationResultType {
  if (!emailValidation(email)) {
    return {
      isSuccess: false,
      message: 'Email validation error!',
    };
  }
  if (!passwordValidation(password)) {
    return {
      isSuccess: false,
      message: 'Password validation error!',
    };
  }
  return {
    isSuccess: true,
    message: '',
  };
}
export function registerFormValidation(
  email: string, password: string, confirmPassword: string,
): ValidationResultType {
  if (!emailValidation(email)) {
    return {
      isSuccess: false,
      message: 'Email validation error!',
    };
  }
  if (!passwordValidation(password)) {
    return {
      isSuccess: false,
      message: 'Password validation error!',
    };
  }
  if (password === confirmPassword) {
    return {
      isSuccess: true,
      message: '',
    };
  }
  return {
    isSuccess: false,
    message: 'Passwords don\'t match',
  };
}
