const REQUIRED_Field = 'Обязательно для заполнения';

export const loginValidation = {
    required: REQUIRED_Field,
    validate: (value: string) => {

        if (value.match(/[а-яА-Я]/)) {
            return 'Логин не может содержать русские буквы'
        }

        return true;
    }

}

export const passwordValidation = {
    required: REQUIRED_Field,
    validate: (value: string) => {

        if (value.length < 6) {
            return 'Пароль должен быть длинее 6-ти символов'
        }

        return true;
    }

}
