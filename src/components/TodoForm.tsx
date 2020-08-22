import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, FormikProps, FormikHelpers } from "formik";
import * as yup from "yup";
import { addTodo } from "store/actions";

type Values = { text: string };

const validationSchema = yup.object({
  text: yup.string().required("text required")
});

export default () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ text: "" }}
        validationSchema={validationSchema}
        onSubmit={(values: Values, bag: FormikHelpers<any>) => {
          dispatch(addTodo(values.text));
          bag.resetForm();
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <Field name="text" />
            <input type="submit" value="Add Todo" name="" id="" />
          </Form>
        )}
      </Formik>
    </>
  );
};
