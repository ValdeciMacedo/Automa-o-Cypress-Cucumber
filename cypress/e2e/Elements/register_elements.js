class RegisterElements {

inputFirstName = () => { return '[placeholder="First Name"]'}
inputLastName = () => { return '[placeholder="Last Name"]'}
inputAddress = () => { return '[ng-model="Adress"]' }
inputAddressEmail = () => { return '#eid'}
inputPhoneNumber = () => { return '[ng-model="Phone"]' }
selectFile =() => { return '#imagesrc'}
checkRadioGender = () => { return'//*[@id="basicBootstrapForm"]/div[5]/div/label[1]'}
checkHobbies = () => { return'//*[@id="basicBootstrapForm"]/div[6]/label'}
inputLanguages = () => { return '#msdd'}
inputSkills = () => { return '#Skills'}
selectCountry = () => { return '#country'}
selectYear = () => { return '#yearbox'}
selectMonth = () => { return '[placeholder="Month"]'}
selectDay = () => { return '#daybox'}
inputPass = () => { return '#firstpassword'}
inputConfirmPass = () => { return '#secondpassword'}
btnSubmit = () => { return '#submitbtn'}

} export default RegisterElements;