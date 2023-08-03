import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Valid() {
  const [category, setCategory] = useState([])
  useEffect(() => {
    const response = axios.get('http://164.92.190.147:8880/home/tours/dzhip-tur-v-ozero-kel-suu/')
    const data = response.data
    setCategory(data)

  }, []) 

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Дополнительные переменные состояния для хранения сообщений об ошибках и состояния кнопки отправки формы.
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [formValid, setFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Обработчики изменения состояния для каждого поля формы.
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    const emailValue = event.target.value.trim();
    setEmail(emailValue);
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(emailValue).toLowerCase())) {
      setEmailError('Некоректный емейл');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(event) {
    const passwordValue = event.target.value.trim();
    setPassword(passwordValue);
  
    if (passwordValue.trim().length < 8 || passwordValue.trim().length > 16) {
      setPasswordError('Пароль должен быть не меньше 8 и не больше 16');
    
    } else if (!/^[a-zA-Z0-9]*$/.test(passwordValue)) {
      setPasswordError('Пароль должен содержать только буквы и цифры');
      
    } else {
      setPasswordError('');
      setFormValid(confirmPassword === passwordValue);

    }
  }
  
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value.trim());
    if (event.target.value !== password) {
      setConfirmPasswordError('Пароль не совпадает, введите пароль, который вы указали выше');
      return;
    } else {
      setConfirmPasswordError('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    // Выполнение проверки формы перед отправкой.
    if (password !== confirmPassword) {
      setPasswordError('Пароли не совпадают');
      console.log('hi');
      return;
    }
  
    if (emailError || passwordError || confirmPasswordError) {
      return;
    }
  
    setIsFormSubmitted(true);
    // Здесь можно отправить данные формы на сервер.
  }

  useEffect(() => {
    if (isFormSubmitted) {
      setFormValid(
        firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().length > 0 &&
        password.trim().length > 0 &&
        confirmPassword.trim().length > 0 &&
        emailError === '' && 
        passwordError === '' &&
        confirmPasswordError === ''
      );
    } else {
      setFormValid(
        firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().length > 0 &&
        password.trim().length > 0 &&
        confirmPassword.trim() === password.trim()
      );
    }
  }, [firstName, lastName, email, password, confirmPassword, emailError, passwordError, isFormSubmitted, confirmPasswordError]);

  // Отрисовка компонента формы.
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {category.map((item) => (
          <p>{item.description}
          <img src={item.tour_images} alt="toour" />
          </p>
         ))}
      </ul>
      <div>
        <label htmlFor="first-name-input">Имя:</label>
        <input id="first-name-input" type="text" value={firstName} onChange={handleFirstNameChange} />
      </div>
      <div>
        <label htmlFor="last-name-input">Фамилия:</label>
        <input id="last-name-input" type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
      <div>
        <label htmlFor="email-input">Email:</label>
        <input id="email-input" type="email" value={email} onChange={handleEmailChange} />
        {emailError && <span>{emailError}</span>}
      </div>
      <div>
        <label htmlFor="password-input">Пароль:</label>
        <input id="password-input" type="password" value={password} onChange={handlePasswordChange} />
        {passwordError && <span>{passwordError}</span>}
      </div>
      <div>
        <label htmlFor="confirm-password-input">Подтвердите пароль:</label>
        <input id="confirm-password-input" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        {confirmPasswordError && <span>{confirmPasswordError}</span>}
      </div>
      <button type="submit" disabled={!formValid}>Отправить</button>
    </form>
  );
}
export default Valid;



