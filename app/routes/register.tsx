// routes/register.tsx
import { ActionFunction, json, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { createUser } from '~/utilities/supabase';

type ActionData = {
  error?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
	await createUser(email, password);
	return redirect('/login');
  } catch (error: any) {
	return json<ActionData>({ error: error.message }, { status: 400 });
  }
};

export default function Register() {
  const actionData = useActionData<ActionData>();

  return (
	<div>
	  <h1>Register</h1>
	  <Form method="post">
		<label>
		  Email: <input type="email" name="email" required />
		</label>
		<label>
		  Password: <input type="password" name="password" required />
		</label>
		<button type="submit">Register</button>
	  </Form>
	  {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
	</div>
  );
}