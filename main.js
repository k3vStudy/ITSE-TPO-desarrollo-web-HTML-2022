"use strict";
const submit_form = document.getElementById("submit_form");
const customer_name = document.getElementById("customer_name");
const email_address = document.getElementById("email_address");
const comments = document.getElementById("comments");
submit_form.onclick = (e) => {
	e.preventDefault();
	if (customer_name.value.length < 1)
		return alert("El nombre no puede estar vacío");

	if (email_address.value.length < 1)
		return alert("El email no puede estar vacío");

	if (!email_address.value.includes("@") && !email_address.value.includes("."))
		return alert("El email no es válido, por favor introducir uno válido");
	return alert("Se ha enviado su consulta exitosamente");
};
