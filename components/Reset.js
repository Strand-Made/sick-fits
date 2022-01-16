import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

const Reset = ({ token }) => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await reset().catch(console.error);
    resetForm();
  };

  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h1>Reset your password</h1>
      <DisplayError error={error || successfulError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! You can now sign in with your password</p>
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
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Request reset!</button>
      </fieldset>
    </Form>
  );
};

export default Reset;
