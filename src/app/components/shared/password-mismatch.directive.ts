import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMismatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmePassword = control.get('confirmPassword');

    return password && confirmePassword && password.value !== confirmePassword.value ? { passwordMismatch: true } : null;
}