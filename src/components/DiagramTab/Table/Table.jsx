import React from 'react';
import { Formik, Field, Form } from 'formik';
import {
  ColorDiv,
  Head,
  TotalLine,
  Section,
  TotalExp,
  DataRow,
  Line,
  ExpBlock,
  HeadText,
  TotalInc,
} from './Table.styled';

function Table({ totalIncome, totalExpense, expenses, isLoading }) {
  return (
    <Section>
      <Formik
        initialValues={{
          location: [],
        }}
        onSubmit={() => {}}
      >
        {({
          isSubmitting,
          getFieldProps,
          handleChange,
          handleBlur,
          values,
        }) => (
          <Form>
            <Field
              component="select"
              id="location"
              name="location"
              multiple={false}
            >
              <option value="NY">New York</option>
              <option value="SF">San Francisco</option>
              <option value="CH">Chicago</option>
              <option value="OTHER">Other</option>
            </Field>
          </Form>
        )}
      </Formik>

      <Head>
        <HeadText>Category</HeadText>
        <HeadText>Sum</HeadText>
      </Head>
      {expenses.map(element => (
        <div key={element.category}>
          <DataRow>
            <ExpBlock>
              <ColorDiv style={{ background: element.color }}></ColorDiv>
              <span>{element.category}</span>
            </ExpBlock>
            <span>{element.summary}</span>
          </DataRow>{' '}
          <Line></Line>
        </div>
      ))}
      <TotalLine>
        <span>Expenses:</span>
        <TotalExp>{totalExpense}</TotalExp>
      </TotalLine>
      <TotalLine>
        <span>Income:</span>
        <TotalInc>{totalIncome}</TotalInc>
      </TotalLine>
    </Section>
  );
}

export default Table;
