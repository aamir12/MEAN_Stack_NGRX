import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from '../../model/message.model';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  public data!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private payload: Message,
    private dialogRef: MatDialogRef<MessageDialogComponent>
  ) { }

  ngOnInit(): void {
    this.data = this.payload;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
