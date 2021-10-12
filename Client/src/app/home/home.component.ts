import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = {
   "commits": [
      {
         "id": "78117b2af300cf2fb136f2d5a5362539b82af896",
         "parents": [],
         "message": "Second commit desktop",
         "author": "ygtalp",
         
         "date": "2021-09-22 02:50:02",
         
         "space": 0,
         "time": 0
      },
      {
         "id": "0c09675a8b87dc786cc44babc01492aa3b1b049c",
         "parents": [
            [
               "78117b2af300cf2fb136f2d5a5362539b82af896",
               0,
               0
            ]
         ],
         "message": "Seed Data and Include brands/types to product controller",
         "author": "ygtalp",
         
         "date": "2021-09-22 05:42:13",
         
         "space": 0,
         "time": 1
      },
      {
         "id": "d5c8bf398ed91d344ae1137e1d1021cad98b0cbd",
         "parents": [
            [
               "0c09675a8b87dc786cc44babc01492aa3b1b049c",
               1,
               0
            ]
         ],
         "message": "Done: Generic Repository, Specifaction Pattern, DTO, AutoMapper, Static Img Files",
         "author": "ygtalp",
         
         "date": "2021-09-22 09:12:16",
         
         "space": 0,
         "time": 2
      },
      {
         "id": "7fc201bdc2d05b13f8fdb24cde299b9e3e209b00",
         "parents": [
            [
               "d5c8bf398ed91d344ae1137e1d1021cad98b0cbd",
               2,
               0
            ]
         ],
         "message": "Done: Error handling and cleaning for startup",
         "author": "ygtalp",
         
         "date": "2021-09-24 02:09:22",
         
         "space": 0,
         "time": 3
      },
      {
         "id": "7fa791a3e3ba3377c5b0133138d46f67daf38b20",
         "parents": [
            [
               "7fc201bdc2d05b13f8fdb24cde299b9e3e209b00",
               3,
               0
            ]
         ],
         "message": "Done: Sorting Specification, Filtering Brand & Type Functionality, Pagination Size & Indexing, Search Functionality, CORS",
         "author": "ygtalp",
         
         "date": "2021-10-02 17:15:34",
         
         "space": 0,
         "time": 4
      },
      {
         "id": "1365fe7dee62d16159bea645558581dbfe64be64",
         "parents": [
            [
               "7fa791a3e3ba3377c5b0133138d46f67daf38b20",
               4,
               0
            ]
         ],
         "message": "Done: Angular Implemented. SSL/HTTPS, Bootstrap, Ngx-Bootstrap",
         "author": "ygtalp",
         
         "date": "2021-10-02 19:06:28",
         
         "space": 0,
         "time": 5
      },
      {
         "id": "0499b6f8809a5bb2607c802585e6504f92595c54",
         "parents": [
            [
               "1365fe7dee62d16159bea645558581dbfe64be64",
               5,
               0
            ]
         ],
         "message": "Client Done: Navbar, Logo, Products and Pagination Models, UI",
         "author": "ygtalp",
         
         "date": "2021-10-03 01:48:39",
         
         "space": 0,
         "time": 6
      },
      {
         "id": "cee230980be4764bb0f9fc70b3096cec2b0a279b",
         "parents": [
            [
               "0499b6f8809a5bb2607c802585e6504f92595c54",
               6,
               0
            ]
         ],
         "message": "Done Client: Service, Designing Shop Page, Product Filters, Filter & Sort Functionality, Pagination and front etc. Fully~ complated front page.",
         "author": "ygtalp",
         
         "date": "2021-10-05 08:11:04",
         
         "space": 0,
         "time": 7
      },
      {
         "id": "fa760e0f609b486195cc96ae0bed92ab73e8daba",
         "parents": [
            [
               "cee230980be4764bb0f9fc70b3096cec2b0a279b",
               7,
               0
            ]
         ],
         "message": "Fix: End of lines error.",
         "author": "ygtalp",
         
         "date": "2021-10-05 08:16:25",
         
         "space": 0,
         "time": 8
      },
      {
         "id": "089c1915d84919208ef5f3dbadcd70c4db3437d9",
         "parents": [
            [
               "fa760e0f609b486195cc96ae0bed92ab73e8daba",
               8,
               0
            ]
         ],
         "message": "Done Client: Nav Active Link, Product Detail Page, Routes, Lazy Loading (Angular Module)",
         "author": "ygtalp",
         
         "date": "2021-10-07 03:05:50",
         
         "space": 0,
         "time": 9
      },
      {
         "id": "47602e555625fe2255999bb1a298d15b23faff6c",
         "parents": [
            [
               "089c1915d84919208ef5f3dbadcd70c4db3437d9",
               9,
               0
            ]
         ],
         "message": "Done: 400, 401, 404, 500 Interceptors. Error test page and toast.",
         "author": "ygtalp",
         
         "date": "2021-10-07 04:35:37",
         
         "space": 0,
         "time": 10
      },
      {
         "id": "a03f8bdb3c318b1bacf6e2e8c735413196f0d33d",
         "parents": [
            [
               "47602e555625fe2255999bb1a298d15b23faff6c",
               10,
               0
            ]
         ],
         "message": "Done Client: Breadcrumb and Service, Section Header, Styling Product Items, Bootstrap Theme (Bootswatch), Loading Indicator (Spinner), Home Page Content and Commit History",
         "author": "ygtalp",
         
         "date": "2021-10-07 13:02:39",
         
         "space": 0,
         "time": 11
      }
   ]
  };

  constructor() { }

  ngOnInit(): void {
  }



}
