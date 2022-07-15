import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  public _payload!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private payload: any,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit(): void {
    this._payload = this.payload;
  }

  onYesClick(): void {
    this._payload.onYesClick.emit();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this._payload.onNoClick.emit();
    this.dialogRef.close();
  }

}
