import * as yup from "yup";

export default yup.object().shape({
	nickname: yup.string().required("Name of plant required."),
	species: yup.string().required("Species of plant required."),
	h2o_frequency: yup.string().required("Watering frequency required."),
});
