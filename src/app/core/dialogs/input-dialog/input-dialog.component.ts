import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit,AfterViewInit {

  public _payload!: any;

  public amount: string | number = '';

  public bondAmount: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.min(1)]);

  public onConfirm: boolean = false;
  @ViewChild('input') input!:ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private payload: any,
    private dialogRef: MatDialogRef<InputDialogComponent>
  ) { }

  ngOnInit(): void {
    this._payload = this.payload;
    this.amount = this.payload.amount;
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  onYesClick(): void {
    this.onConfirm = true;
    if (this.bondAmount.valid) {
      this._payload.onYesClick.emit({ amount: this.bondAmount.value });
      // this.bondAmount.onYesClick.emit();
      this.bondAmount.setValue('')
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this._payload.onNoClick.emit();
    this.dialogRef.close();
  }

}
