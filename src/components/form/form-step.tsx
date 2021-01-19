import React from 'react';
import { FormikConfig, FormikValues } from 'formik';

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {

}

const FormStep = ({ children }: FormikStepProps) => {
  return <>{ children }</>
} 

export default FormStep;