import { Form, Formik, Field, ErrorMessage } from "formik";
import css from "../RegistrationForm/RegistrationForm.module.css";
import * as Yup from "yup";
import { date } from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  picked: Yup.string()
    .oneOf(["social", "friends", "myself"])
    .required("Required"),
  date: date().default(() => new Date()),
});

export default function RegistrationForm({ onAdd, onBack }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <div>
      <button className={css.btn} onClick={onBack}>
        Back
      </button>
      <div className={css.formik}>
        <Formik
          initialValues={{
            username: "",
            email: "",
            date: new Date().toISOString().split("T")[0],
            picked: "",
          }}
          validationSchema={UserSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className={css.form}>
              <h3 className={css.title}>Event registration</h3>
              <div className={css.formFields}>
                <label htmlFor={`${fieldId}-username`}>Full name</label>
                <Field
                  className={css.input}
                  type="text"
                  name="username"
                  id={`${fieldId}-username`}
                />
                <ErrorMessage
                  className={css.error}
                  name="username"
                  component="span"
                />
              </div>
              <div className={css.formFields}>
                <label htmlFor={`${fieldId}-email`}>Email</label>
                <Field
                  className={css.input}
                  type="email"
                  name="email"
                  id={`${fieldId}-email`}
                />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="span"
                />
              </div>
              <div className={css.formFields}>
                <label htmlFor={`${fieldId}-date`}>Date of birth</label>
                <Field
                  className={css.input}
                  type="date"
                  name="date"
                  id={`${fieldId}-date`}
                />
                <ErrorMessage
                  className={css.error}
                  name="date"
                  component="span"
                />
              </div>

              <div className={css.formFields}>
                <div>Where did you hear about this event?</div>
                <div
                  className={css.formFieldsRadio}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label className={css.radio}>
                    <Field
                      type="radio"
                      name="social"
                      value="social"
                      checked={values.picked === "social"}
                      onChange={() => setFieldValue("picked", "social")}
                    ></Field>
                    Social media
                  </label>
                  <label className={css.radio}>
                    <Field
                      type="radio"
                      name="friends"
                      value="friends"
                      checked={values.picked === "friends"}
                      onChange={() => setFieldValue("picked", "friends")}
                    ></Field>
                    Friends
                  </label>
                  <label className={css.radio}>
                    <Field
                      type="radio"
                      name="myself"
                      value="myself"
                      checked={values.picked === "myself"}
                      onChange={() => setFieldValue("picked", "myself")}
                    ></Field>
                    Found myself
                  </label>
                </div>
                <ErrorMessage
                  className={css.error}
                  name="picked"
                  component="span"
                />
              </div>
              <button className={css.btn} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
