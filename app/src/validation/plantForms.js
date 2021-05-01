import * as yup from "yup";

const plantSchema = yup.object().shape({
	// addPlant and createPlant schema:
	nickname: yup.string().required("Name of plant required."),
	species: yup.string().required("Species of plant required."),
	h2o_frequency: yup.string().required("Watering frequency required."),
});

const loginSchema = yup.object().shape({
	// login validation:
	username: yup.string().required("Username required."),
	password: yup.string().required("Password required."),
});

export { plantSchema, loginSchema };
