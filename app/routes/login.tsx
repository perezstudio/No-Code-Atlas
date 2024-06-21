import { LoaderFunction, ActionFunction, json, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { loginUser } from '~/utilities/supabase';

type ActionData = {
  error?: string;
};

// Loader function to handle GET requests
export const loader: LoaderFunction = async () => {
  return json({});
};

// Action function to handle POST requests for login
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
	await loginUser(email, password);
	return redirect('/admin');
  } catch (error: any) {
	return json<ActionData>({ error: error.message }, { status: 400 });
  }
};

export default function Login() {
  const actionData = useActionData<ActionData>();

  return (
	<div>
	  <h1>Login</h1>
	  <Form method="post">
		<label>
		  Email: <input type="email" name="email" required />
		</label>
		<label>
		  Password: <input type="password" name="password" required />
		</label>
		<button type="submit">Login</button>
	  </Form>
	  {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
	</div>
  );
}