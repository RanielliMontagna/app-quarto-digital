import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { LoginFormValues } from '../Login.types';

export interface IFieldsLogin {
  register: UseFormRegister<LoginFormValues>;
  errors: FieldErrors<LoginFormValues>;
}
