import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { invoice } from 'src/app/models/invoice.model';
import { invoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice:invoice|undefined;
  name:string|undefined;
  in_date:Date|undefined;
  out_date:Date|undefined;
  fee:number|undefined;
  constructor(private invoiceService:invoiceService, private router:Router) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(!user){
      this.router.navigateByUrl('');
    }
    this.invoiceService.sendRequest().subscribe((res)=>{
      this.invoice = res;
      this.name = res.name;
      this.in_date = res.in_date;
      this.out_date = res.out_date;
      this.fee = res.fee;
      console.log(res);
    })
  }
  public convetToPDF()
{
var val = document.getElementById('contentToConvert') as HTMLCanvasElement;
html2canvas(val).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('Invoice.pdf'); // Generated PDF
});
}
}
