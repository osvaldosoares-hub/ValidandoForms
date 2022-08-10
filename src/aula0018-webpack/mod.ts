import isEmail from 'validator/lib/isEmail'

const Show_error_massages = 'show-error-message'

const forms = document.querySelector('.form') as HTMLFormElement
const user = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const password2 = document.querySelector('.password2') as HTMLInputElement

forms.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  hideErrorMSG(forms)
  checkForEmpty(user, email, password, password2)
  chekcForEmail(email)
  checkEqualPasswords(password, password2)
  if (shouldSendForm(forms)) console.log('form ENVIADO')
})
const checkEqualPasswords = (
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void => {
  if (password.value !== password2.value)
    showErrorMessage(password2, 'senhas nao sao iguais')
}
const chekcForEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessage(input, 'email invalido')
}
const checkForEmpty = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'campo nao pode estar vazio')
  })
}
const hideErrorMSG = (form: HTMLFormElement): void => {
  form
    .querySelectorAll('.' + Show_error_massages)
    .forEach((item) => item.classList.remove(Show_error_massages))
}

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formFields = input.parentElement as HTMLDivElement
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement

  errorMessage.textContent = msg
  formFields.classList.add(Show_error_massages)
}

const shouldSendForm = (form: HTMLFormElement): boolean => {
  let send = true
  form.querySelectorAll('.' + Show_error_massages).forEach(() => (send = false))
  return send
}
