import { useForm } from '../Hooks/useForm';

const Formulario2 = () => {
	const { formulario, handleChange } = useForm({
		postal: 'ABC',
		ciudad: 'Santo Dom Norte',
	});
	const { postal, ciudad } = formulario;
	return (
		<form autoComplete="off">
			<div className="mb-5">
				<label className="form-label">Codigo pastal: </label>
				<input
					type="text"
					className="form-control"
					name="postal"
					value={postal}
					onChange={handleChange}
				/>
			</div>
			<br />
			<div className="mb-5">
				<label className="form-label">Ciudad: </label>
				<input
					type="text"
					className="form-control"
					name="ciudad"
					value={ciudad}
					onChange={handleChange}
				/>
			</div>
			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	);
};

export default Formulario2;
