import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
})
export class CanDeactivateComponent implements CanDeactivateComponent{
// export class CanDeactivateComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly userForm = this.formBuilder.group({
    firstName: this.formBuilder.control('', [Validators.required]),
    lastName: this.formBuilder.control(''),
  });

  isFormSaved = false;
  openConfirmDialog = false;

  private confirmDialog = new Subject<boolean>();

  // pristine - проверка на неизменённую форму: т.е пользователь ещё ничего не ввёл в форму(форма чистая)
  isAllowedToLeave(): boolean {
    return (
      (this.isFormSaved && this.userForm.valid) ||
      !this.userForm.touched ||
      this.userForm.pristine
    );
  }

  confirm(): Observable<boolean> {
    this.openConfirmDialog = true;
    return this.confirmDialog.asObservable();
  }

  onConfirmClick(): void {
    this.openConfirmDialog = false;
    this.confirmDialog.next(true);
  }

  onCancelClick(): void {
    this.openConfirmDialog = false;
    this.confirmDialog.next(false);
  }

  submit(): void {
    this.isFormSaved = true;
  }
}
