import React from "react";

import styles from "./Form.module.css";
import Input from "../Form/Input/Input";
import Button from "../UI/Button/Button";

const Form = props => {
	const inputs = props.inputs.map(input => {
		return (
			<Input
				name={input.name}
				key={input.name}
				label={input.label}
				type={input.type}
				otherProps={input.config}
				change={props.change}
				checkValidity={props.invalid}
			/>
		);
	});

	return (
		<div className={styles.formContainer}>
			<h3 className={styles.formHeading}>{props.heading}</h3>
			<form className={styles.formBody} onSubmit={props.submit}>
				<div className={styles.btnContainer}>
					{inputs}
					<Button type="submitBtn" btnType="submit">
						{props.action}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Form;
