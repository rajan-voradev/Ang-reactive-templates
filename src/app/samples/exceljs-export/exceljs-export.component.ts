import { Component, OnInit } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

export interface product {
  id: number;
  name: string;
  brand: string;
  color: string;
  price: number;
}

@Component({
  selector: 'app-exceljs-export',
  templateUrl: './exceljs-export.component.html',
  styleUrls: ['./exceljs-export.component.css'],
})
export class ExceljsExportComponent implements OnInit {
  title = 'excelJs Example in Angular';
  data: product[] = [
    {
      id: 1,
      name: 'Nivia Graffiti Basketball',
      brand: 'Nivia',
      color: 'Mixed',
      price: 391.0,
    },
    {
      id: 2,
      name: 'Strauss Official Basketball',
      brand: 'Strauss',
      color: 'Orange',
      price: 391.0,
    },
    {
      id: 3,
      name: 'Spalding Rebound Rubber Basketball',
      brand: 'Spalding',
      color: 'Brick',
      price: 675.0,
    },
    {
      id: 4,
      name: 'Cosco Funtime Basket Ball, Size 6 ',
      brand: 'Cosco',
      color: 'Orange',
      price: 300.0,
    },
    {
      id: 5,
      name: 'Nike Dominate 8P Basketball',
      brand: 'Nike',
      color: 'brick',
      price: 1295,
    },
    {
      id: 6,
      name: 'Nivia Europa Basketball',
      brand: 'Nivia',
      color: 'Orange',
      price: 280.0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  exportExcel() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('ProductSheet');

    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 32 },
      { header: 'Brand', key: 'brand', width: 10 },
      { header: 'Color', key: 'color', width: 10 },
      {
        header: 'Price',
        key: 'price',
        width: 10,
        style: { font: { name: 'Arial Black', size: 10 } },
      },
    ];

    this.data.forEach((e) => {
      worksheet.addRow(
        {
          id: e.id,
          name: e.name,
          brand: e.brand,
          color: e.color,
          price: e.price,
        },
        'n'
      );
    });

    //to save it to a csv
    /*
    workbook.csv.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'text/csv' });
      fs.saveAs(blob, 'ProductData.csv');
    })
  */
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'ProductData.xlsx');
    });
  }
}
