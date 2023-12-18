<script lang="ts">
    import { login } from '$lib';

    const credentials: LoginCredentials = {
        email: 'user@example.com',
        password: 'your_password',
    };

    login(credentials)
    .then((response) => {
        if (response.error) {
        console.error('Login error:', response.error.message);
        } else {
        console.log('Login successful:', response.user);
        }
    })
    .catch((error) => {
        console.error('Error during login:', error.message);
    });
</script>
<div>
    <div>
        <div>
            <img src="no-code-atlas-logo.svg" alt="No Code Atlas Logo" />
            <h1>Sign In</h1>
        </div>
        <form>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <div>
                <button type="submit" on:click={login}>Sign In</button>
            </div>
        </form>
    </div>
</div>