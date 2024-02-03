import { useForm } from '../Hooks/useForm';
interface formData {
	email: string;
	nombre: string;
	edad: number;
}
const Formulario = () => {
	const { edad, handleChange, formulario } = useForm<formData>({
		email: 'edwardo@gmail.com',
		nombre: 'Edward Montero',
		edad: 39,
	});
	//const { edad } = formulario;
	//const { email, nombre, edad } = formulario;

	// const [formulario, setFormulario] = useState({
	// 	email: '',
	// 	nombre: '',
	// });
	// const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
	// 	const { name, value } = target;

	// 	setFormulario({
	// 		...formulario,
	// 		[name]: value,
	// 	});
	//};

	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label className="form-label">Email: </label>
				<input
					type="email"
					className="form-control"
					name="email"
					value={formulario.email}
					onChange={handleChange}
				/>
			</div>
			<br />
			<div className="mb-3">
				<label className="form-label">Nombre: </label>
				<input
					type="text"
					className="form-control"
					name="nombre"
					value={formulario.nombre}
					onChange={handleChange}
				/>
			</div>
			<br />
			<div className="mb-3">
				<label className="form-label">Edad: </label>
				<input
					type="number"
					className="form-control"
					name="edad"
					value={edad}
					onChange={handleChange}
				/>
			</div>

			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	);
};

export default Formulario;
