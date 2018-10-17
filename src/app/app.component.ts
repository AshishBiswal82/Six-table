import { Component, OnInit } from '@angular/core';
import {ExcelService} from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-six-datatable';
  public data : any
 
  constructor(private excelService:ExcelService) {   }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
 }

  ngOnInit() {
    this.data = [/*{'name':'Anil', 'anil.singh581@gmail.com' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
    {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }*/
    {'rideownerUsername' : 'manisha.chavan',
    'rideownerEmail' : 'manisha.chavan@jadeglobal.com',
    'rideownerMobileNumber' : '9028022992',
    'source' : 'Nyati Tech Park, Digambar Nagar, Vadgaon Sheri, Pune, Maharashtra 411014, India',
    'destination' : 'Wagholi',
    'rideRoute' : 'Nagar Road',
    'vehicleType' : 'Bike',
    'vehicleName' : 'Scooty',
    'rideTitle' : 'Office to Wagholi',
    'availableSeats' : '1',
    'vehicleNumber' : 'MH-12 FR 7751'},
    {'rideownerUsername' : 'manisha.chavan',
    'rideownerEmail' : 'manisha.chavan@jadeglobal.com',
    'rideownerMobileNumber' : '9028022992',
    'source' : 'Nyati Tech Park, Digambar Nagar, Vadgaon Sheri, Pune, Maharashtra 411014, India',
    'destination' : 'Wagholi',
    'rideRoute' : 'Nagar Road',
    'vehicleType' : 'Bike',
    'vehicleName' : 'Scooty',
    'rideTitle' : 'Office to Wagholi',
    'availableSeats' : '1',
    'vehicleNumber' : 'MH-12 FR 7751'},
    {'rideownerUsername' : 'manisha.chavan',
    'rideownerEmail' : 'manisha.chavan@jadeglobal.com',
    'rideownerMobileNumber' : '9028022992',
    'source' : 'Nyati Tech Park, Digambar Nagar, Vadgaon Sheri, Pune, Maharashtra 411014, India',
    'destination' : 'Wagholi',
    'rideRoute' : 'Nagar Road',
    'vehicleType' : 'Bike',
    'vehicleName' : 'Scooty',
    'rideTitle' : 'Office to Wagholi',
    'availableSeats' : '1',
    'vehicleNumber' : 'MH-12 FR 7751'},
    {'rideownerUsername' : 'shilpa.mishra',
    'rideownerEmail' : 'shilpa.mishra@jadeglobal.com',
    'rideownerMobileNumber' : '7888041288',
    'source' : 'Nyati Tech Park, Digambar Nagar, Vadgaon Sheri, Pune, Maharashtra 411014, India',
    'destination' : 'Kharadi',
    'rideRoute' : 'Chandan Nagar',
    'vehicleType' : 'Bike',
    'vehicleName' : 'Dio',
    'rideTitle' : 'Test Ride',
    'availableSeats' : '1',
    'vehicleNumber' : 'MH-12 AB 1234'},
    {'rideownerUsername' : 'aditya.singh',
    'rideownerEmail' : 'aditya.singh@jadeglobal.com',
    'rideownerMobileNumber' : '8600612175',
    'source' : 'Nyati Tech Park, Digambar Nagar, Vadgaon Sheri, Pune, Maharashtra 411014, India',
    'destination' : 'Sunita Nagar',
    'rideRoute' : 'Tempo Chowk',
    'vehicleType' : 'Bike',
    'vehicleName' : 'Suzuki Gixxer SF',
    'rideTitle' : 'Ride',
    'availableSeats' : '0',
    'vehicleNumber' : 'MH-12 MP 8530'},
    {'rideownerUsername' : 'aditya.singh',
    'rideownerEmail' : 'aditya.singh@jadeglobal.com',
    'rideownerMobileNumber' : '8600612175',
    'source' : 'Nyati Tech Park, Digambar Nagar, Vadgaon Sheri, Pune, Maharashtra 411014, India',
    'destination' : 'Sunita Nagar',
    'rideRoute' : 'Tempo Chowk',
    'vehicleType' : 'Bike',
    'vehicleName' : 'Suzuki Gixxer SF',
    'rideTitle' : 'Ride',
    'availableSeats' : '0',
    'vehicleNumber' : 'MH-12 MP 8530'},
    {'rideownerUsername' : 'maruti.pawar',
    'rideownerEmail' : 'maruti.pawar@jadeglobal.com',
    'rideownerMobileNumber' : '7709399155',
    'source' : 'Nyati Tech Park, Digambar Nagar, Vadgaon Sheri, Pune, Maharashtra 411014, India',
    'destination' : 'Anand Park',
    'rideRoute' : 'Brahma Suncity',
    'vehicleType' : 'Bike',
    'vehicleName' : 'Activa',
    'rideTitle' : 'Office to Anand Park',
    'availableSeats' : '0',
    'vehicleNumber' : 'MH-12 GU 6505'}
   ]
  }
}
