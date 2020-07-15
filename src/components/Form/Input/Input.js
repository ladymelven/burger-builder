import React from "react";

import styles from "./Input.module.css";

const Input = props => {
	let InputEl = null;
	switch (props.type) {
		case "text":
		case "email":
		case "time":
		case "date":
		case "url":
		case "search":
			InputEl = (
				<input
					onChange={props.change}
					className={styles.textInput}
					type={props.type}
					name={props.name}
					id={props.name}
					{...props.otherProps}
				/>
			);
			break;
		case "tel":
			const classes = [styles.textInput];
			if (props.checkValidity && !props.otherProps.valid) {
				classes.push(styles.invalid);
			}
			InputEl = (
				<input
					onChange={props.change}
					className={classes.join(" ")}
					type={props.type}
					name={props.name}
					id={props.name}
					{...props.otherProps}
				/>
			);
			break;
		case "textarea":
			InputEl = (
				<textarea
					onChange={props.change}
					className={styles.textArea}
					name={props.name}
					id={props.name}
				/>
			);
			break;
		case "select":
			const options = props.otherProps.options.map(el => {
				return (
					<option value={el.value} key={el.value}>
						{el.text}
					</option>
				);
			});
			InputEl = (
				<select
					name={props.name}
					id={props.name}
					value={props.otherProps.options[0]}
				>
					{options}
				</select>
			);
			break;
		case "datalist":
			const suggestions = props.otherProps.options.map(el => {
				return <option value={el} key={el} />;
			});
			InputEl = (
				<React.Fragment>
					<input
						onChange={props.change}
						className={styles.textInput}
						list={props.otherProps.listName}
						name={props.name}
						id={props.name}
					/>
					<datalist
						id={props.otherProps.listName}
						value={props.otherProps.options[0]}
					>
						{suggestions}
					</datalist>
				</React.Fragment>
			);
			break;
		default:
			InputEl = <input />;
	}

	return (
		<div className={styles.inputContainer}>
			<label htmlFor={props.name} className={styles.inputLabel}>
				{props.label}
				{props.label && props.otherProps.required ? <span>*</span> : null}
			</label>
			{InputEl}
		</div>
	);
};

export default Input;
