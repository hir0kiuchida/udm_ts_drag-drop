/** Validation */
export interface Validatable {
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable): boolean {
  let isValid = true;
  const { value, required, minLength, maxLength, min, max } = validatableInput;
  if (required) {
    isValid = isValid && value.trim().length > 0;
  }
  if (minLength) {
    isValid = isValid && value.length >= minLength;
  }
  if (maxLength) {
    isValid = isValid && value.length <= maxLength;
  }
  if (min) {
    isValid = isValid && +value >= min;
  }
  if (max) {
    isValid = isValid && +value <= max;
  }
  return isValid;
}
