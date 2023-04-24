// const otpGenerator = 'otp-generator';
import * as otpGenerator from 'otp-generator';
export const generateOTP = () => {
  const OTP = otpGenerator.generate(6, {upperCaseAlphabets: false,  digits: true,specialChars: false,lowerCaseAlphabets:false});
  return OTP;
};

// The OTP_LENGTH is a number, For my app i selected 10.
// The OTP_CONFIG is an object that looks like 
