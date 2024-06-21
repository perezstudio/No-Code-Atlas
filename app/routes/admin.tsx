// routes/admin.tsx
import { LoaderFunction, redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import { requireAuth } from '~/utilities/supabase';

export const loader: LoaderFunction = async ({ request }) => {
  try {
	await requireAuth(request);
	return null;
  } catch {
	return redirect('/login');
  }
};

export default function AdminLayout() {
  return (
	<div>
	  <h1>Admin Area</h1>
	  <Outlet />
	</div>
  );
}