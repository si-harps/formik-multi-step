import React, { useState } from 'react';
import { Formik, Form, FormikConfig, FormikValues } from 'formik'
import { FormikStepProps } from './form-step';

const FormStepper = ({ children, ...props }: FormikConfig<FormikValues> ) => {

  const [step, setStep] = useState<number>(0);

  const stepChildren = React.Children.toArray(children); // as React.ElementType<FormikStepProps>[];
  const currentChild = stepChildren[step] as React.ElementType<FormikStepProps>;

  console.log('child', currentChild);

  function isLastStep() {
    return step === stepChildren.length - 1;
  }

  return (
    <Formik {...props} 
      validationSchema={currentChild.props.validationSchema}
      onSubmit={ async (values, helpers) => {
        if (isLastStep()) {
          console.log(values)
          await props.onSubmit(values, helpers);
        } else {
          setStep(step + 1);
        }
      }}>
      <Form autoComplete="off" >
        { currentChild }
        { step > 0 ? <button type="button" onClick={ e => setStep(step - 1)}>Back</button> : null }
        <button type="submit">{ isLastStep() ? 'Save' : 'Next' }</button>
      </Form>
    </Formik>
  )
}

export default FormStepper;