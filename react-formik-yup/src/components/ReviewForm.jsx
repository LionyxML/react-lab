import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ProductReviewForm = () => {
  // If you want another locale translations, like in pt-br, uncomment bellow:
  // Yup.setLocale({
  //   mixed: {
  //     default: "é inválido",
  //     required: "é um campo obrigatório",
  //     oneOf: "deve ser um dos seguintes valores: ${values}",
  //     notOneOf: "não pode ser um dos seguintes valores: ${values}",
  //   },
  //   string: {
  //     length: "deve ter exatamente ${length} caracteres",
  //     min: "deve ter pelo menos ${min} caracteres",
  //     max: "deve ter no máximo ${max} caracteres",
  //     email: "tem o formato de e-mail inválido",
  //     url: "deve ter um formato de URL válida",
  //     trim: "não deve conter espaços no início ou no fim.",
  //     lowercase: "deve estar em maiúsculo",
  //     uppercase: "deve estar em minúsculo",
  //   },
  //   number: {
  //     min: "deve ser no mínimo ${min}",
  //     max: "deve ser no máximo ${max}",
  //     lessThan: "deve ser menor que ${less}",
  //     moreThan: "deve ser maior que ${more}",
  //     notEqual: "não pode ser igual à ${notEqual}",
  //     positive: "deve ser um número posítivo",
  //     negative: "deve ser um número negativo",
  //     integer: "deve ser um número inteiro",
  //   },
  //   date: {
  //     min: "deve ser maior que a data ${min}",
  //     max: "deve ser menor que a data ${max}",
  //   },
  //   array: {
  //     min: "deve ter no mínimo ${min} itens",
  //     max: "deve ter no máximo ${max} itens",
  //   },
  // });

  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

  const validationSchema = Yup.object({
    product: Yup.string().required("Please select a product").oneOf(products),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    title: Yup.string().required(),
    review: Yup.string().required(),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
  });

  const initialValues = {
    name: "",
    email: "",
    title: "",
    review: "",
    rating: "",
    date: new Date(),
    wouldRecommend: false,
    product: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const productOptions = products.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));

  const renderError = (message) => <p className="help is-danger">{message}</p>;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div
          className="container"
          style={{
            width: "60%",
          }}
        >
          <div className="field">
            <label className="label" htmlFor="name">
              Full name
            </label>
            <div className="control">
              <Field
                name="name"
                type="text"
                className="input"
                placeholder="Full name"
              />
              <ErrorMessage name="name" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="email">
              Email address
            </label>
            <div className="control">
              <Field
                name="email"
                type="text"
                className="input"
                placeholder="Email address"
              />
              <ErrorMessage name="email" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="product">
              Product
            </label>
            <div className="control">
              <Field name="product" as="select" className="select is-fullwidth">
                <option value={""}>Select a product</option>
                {productOptions}
              </Field>
              <ErrorMessage name="product" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="title">
              Title
            </label>
            <div className="control">
              <Field
                name="title"
                type="text"
                className="input"
                placeholder="Title"
              />
              <ErrorMessage name="title" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="review">
              Review
            </label>
            <div className="control">
              <Field
                name="review"
                as="textarea"
                className="textarea"
                placeholder="Review"
              />
              <ErrorMessage name="review" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="rating">
              Rating
            </label>
            <div className="control">
              <Field
                name="rating"
                type="number"
                className="input"
                placeholder="Rating"
              />
              <ErrorMessage name="rating" render={renderError} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox label" htmlFor="wouldRecommend">
                <Field
                  name="wouldRecommend"
                  type="checkbox"
                  className="checkbox"
                />
                Would recommend
              </label>
            </div>
          </div>
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default ProductReviewForm;
