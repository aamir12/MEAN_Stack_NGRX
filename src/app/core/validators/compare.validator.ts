import { FormControl, FormGroup } from "@angular/forms";

export const mustMatch = (controlName:string,matchingControlName:string) =>  {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName] as FormControl;
      const matchingControl = formGroup.controls[matchingControlName]  as FormControl;

      if (matchingControl.errors && !matchingControl?.errors['mustMatch']) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
}

export const mustNotMatch = (controlName:string,matchingControlName:string) =>  {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName] as FormControl;
    const matchingControl = formGroup.controls[matchingControlName]  as FormControl;

    if (matchingControl.errors && !matchingControl.errors['mustNotMatch']) {
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value === matchingControl.value) {
      matchingControl.setErrors({ mustNotMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}