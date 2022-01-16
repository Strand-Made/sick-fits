import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

const RequestReset = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });

  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup().catch(console.error);
    console.log({ data, loading, error });
    console.log(res);
    resetForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h3>Request a password reset</h3>
      <DisplayError error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for reset link</p>
        )}

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Request reset!</button>
      </fieldset>
    </Form>
  );
};

export default RequestReset;
