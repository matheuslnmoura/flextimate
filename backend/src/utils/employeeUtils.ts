import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

function encryptPassword(password: string) {
  const salt = 10;
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
}

function validatePassword(password: string, hashPassword: string) {
  const isPasswordValid = bcrypt.compareSync(password, hashPassword);
  if(!isPasswordValid) {
    throw {code: 401, message: 'Invalid Password'};
  }
}

async function createToken(id: number) {
  return jwt.sign({id}, process.env.JWT_SECRET);
}

const employeeUtils = {
  encryptPassword,
  validatePassword,
  createToken
};

export default employeeUtils;