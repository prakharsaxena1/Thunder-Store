import React from "react";
import { Form } from 'react-bootstrap';
import { ErrorMessage, useField } from "formik";

export const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  const label = field.name[0].toUpperCase() + field.name.substring(1);
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className={`shadow-none ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="text-danger" />
    </Form.Group>
  );
};
