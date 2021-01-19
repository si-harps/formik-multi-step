import React from 'react';
import { Field } from 'formik';
import { object, mixed, number } from 'yup';
import { FormStepper, FormStep } from './components/form';

function App() {
  return (
    <div className="App">
      <FormStepper 
        initialValues={{
          firstName: '',
          lastName: '',
          millionaire: false,
          balance: 0,
          description: ''
        }}
        onSubmit={ () => {}}
      >

        <FormStep>
          <Field name="firstName" type="text" label="First Name" placeholder="First Name" />
          <Field name="lastName" type="text" label="Last Name" placeholder="Last Name" />
          <Field name="millionaire" type="checkbox" />
        </FormStep>

        <FormStep
          validationSchema={ object({
            balance: mixed().when('millionaire', {
              is: true,
              then: number().required().min(1_0000_000, 'Balance must be at least £1,000,000'),
              otherwise: number().required()
            })
          })}
        >
          <Field name="balance" type="number" label="Account Balance" placeholder="Account Balance" />
        </FormStep>

        <FormStep>
          <Field name="description" label="description" placeholder="Description" />
        </FormStep>
        
      </FormStepper>
    </div>
  );
}

export default App;
