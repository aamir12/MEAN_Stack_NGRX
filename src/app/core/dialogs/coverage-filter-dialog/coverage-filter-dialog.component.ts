import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-coverage-filter-dialog',
  templateUrl: './coverage-filter-dialog.component.html',
  styleUrls: ['./coverage-filter-dialog.component.scss']
})
export class CoverageFilterDialogComponent implements OnInit {

  public options: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private payload: any,
    private dialogRef: MatDialogRef<CoverageFilterDialogComponent>
  ) { }

  ngOnInit(): void {
    this.options = this.payload.options;
  }

  onItemClick(coverageType: any): void {
    this.payload.onSelectEvent.emit(coverageType);
    this.dialogRef.close();
  }

}
