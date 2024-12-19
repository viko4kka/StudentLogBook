function LoginForm() {
	return (
		<div>
			<h4>Log in</h4>
			<form>
				<div>
					<label>Email address</label>
					<input type="email" />
				</div>
				<div>
					<label>Password</label>
					<input type="password" />
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
