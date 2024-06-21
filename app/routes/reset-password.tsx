// routes/reset-password.tsx
import { ActionFunction, json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { resetPassword } from '~/utilities/supabase';

type ActionData = {
  error?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;

  try {
	await resetPassword(email);
	return json({ message: 'Password reset link sent!' });
  } catch (error: any) {
	return json<ActionData>({ error: error.message }, { status: 400 });
  }
};

export default function ResetPassword() {
  const actionData = useActionData<ActionData>();

  return (
	<div>
	  <h1>Reset Password</h1>
	  <Form method="post">
		<label>
		  Email: <input type="email" name="email" required />
		</label>
		<button type="submit">Reset Password</button>
	  </Form>
	  {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
	</div>
  );
}