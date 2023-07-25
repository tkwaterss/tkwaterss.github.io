import React from "react";
import classes from "./Textarea.module.css";

const Textarea = (props) => {
  return (
    <div className={props.invalid ? `${classes.formGroup} ${classes.invalidGroup}` : classes.formGroup}>
      <textarea
        id={props.id}
        rows={props.rows}
        cols={props.cols}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.invalid ? `${classes.formField} ${classes.invalidField}` : classes.formField}
        placeholder={props.placeholder}
      />
      <label htmlFor={props.id} className={props.invalid ? `${classes.formLabel} ${classes.invalidLabel}` : classes.formLabel}>
        {props.children}
      </label>
    </div>
  );
};

export default Textarea;