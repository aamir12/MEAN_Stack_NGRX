import { DOCUMENT } from '@angular/common';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';
import { CoverageFilterDialogComponent } from '../../dialogs/coverage-filter-dialog/coverage-filter-dialog.component';
import { MessageDialogComponent } from '../../dialogs/message-dialog/message-dialog.component';
import { InputDialogComponent } from '../../dialogs/input-dialog/input-dialog.component';
import { Message } from '../../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private dialog: MatDialog
  ) { }

  messageDialog(data: Message, width = '500px', height = '250px'): void {
    let dialogRef = this.dialog.open(MessageDialogComponent, {
      width,
      height,
      data
    });

    dialogRef.afterOpened().subscribe(() => {
      this.document.body.className += ' modal-open';
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Message Dialog closed, ${result}`);
    });
  }

  /**
   * 
   * @param data 
   * @param width 
   * @param height 
   */
  coverageSelectionFilterDialog(data: any, width = '400px', height = '240px'): void {
    let dialogRef = this.dialog.open(CoverageFilterDialogComponent, {
      panelClass: "filter-dialog",
      width,
      height,
      data
    });

    dialogRef.afterOpened().subscribe(() => {
      this.document.body.className += ' modal-open';
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Message Dialog closed, ${result}`);
    });
  }

  /**
   * 
   * @param data 
   * @param width 
   * @param height 
   */
  confirmDialog(data: any, width = '400px', height = 'auto'): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width,
      height,
      data,
    });

    dialogRef.afterOpened().subscribe(() => {
      this.document.body.className += ' modal-open';
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Message Dialog closed, ${result}`);
    });
  }

  inputDialog(data: any, width = '400px', height = 'auto'): void {
    let dialogRef = this.dialog.open(InputDialogComponent, {
      width,
      height,
      data,
    });

    dialogRef.afterOpened().subscribe(() => {
      this.document.body.className += ' modal-open';
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Message Dialog closed, ${result}`);
    });
  }

}
