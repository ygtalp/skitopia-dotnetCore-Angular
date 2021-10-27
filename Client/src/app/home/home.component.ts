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
       "time": 11
     },
     {
       "id": "9a9af92685bf600b74522a1457c9f756de84cb27",
       "parents": [
         [
           "a03f8bdb3c318b1bacf6e2e8c735413196f0d33d",
           11,
           0
         ]
       ],
       "message": "Done Server: Docker and Redis Implementation. Created and Implemented Basket Repository. BasketController. Test functionality.",
       "author": "ygtalp",
       "date": "2021-10-12 06:28:16",
       "time": 12
     },
     {
       "id": "b2e64aec16fc55106e91556d66fb58f1bfdf4ca0",
       "parents": [
         [
           "9a9af92685bf600b74522a1457c9f756de84cb27",
           12,
           0
         ]
       ],
       "message": "Done Client: Basket module, types and service methods. Summary and Totals components. Inc/Decr functionality and checkout.",
       "author": "ygtalp",
       "date": "2021-10-15 07:04:34",
       "time": 13
     },
     {
       "id": "e4e06220f21f46c7e795bc659fefcdb41608a809",
       "parents": [
         [
           "b2e64aec16fc55106e91556d66fb58f1bfdf4ca0",
           13,
           0
         ]
       ],
       "message": "Done API: Identity, IdentityDbContext, migration and seed, Account Controller, Registering, Token Generation Service, User Manager Extension and DTO",
       "author": "ygtalp",
       "date": "2021-10-18 18:56:58",
       "time": 14
     },
     {
       "id": "5000483908c0093c6b7164c0c3b6d0cc47f8e522",
       "parents": [
         [
           "e4e06220f21f46c7e795bc659fefcdb41608a809",
           14,
           0
         ]
       ],
       "message": "Done Server: Server Side Validation. Price, Quantity and User login/register validation. Validating Basket and swagger config for identity.",
       "author": "ygtalp",
       "date": "2021-10-19 00:34:29",
       "time": 15
     },
     {
       "id": "cc20f67b47e294c0138318604fc2375a3e84f64e",
       "parents": [
         [
           "5000483908c0093c6b7164c0c3b6d0cc47f8e522",
           15,
           0
         ]
       ],
       "message": "Done Client: Account Module and Service, Login and Register Form, Submitting Data to Server, Persisting the login, Navbar Dropdown, Form Validation and Displaying Errors, Async Validation, Auth Guard.",
       "author": "ygtalp",
       "date": "2021-10-20 06:18:24",
       "time": 16
     },
     {
       "id": "dae05a4558a6eae6015602a5ed6841e7f7517902",
       "parents": [
         [
           "cc20f67b47e294c0138318604fc2375a3e84f64e",
           16,
           0
         ]
       ],
       "message": "Done API: Order Aggregate, Order Entities, Seeding Delivery Method, Order Migration and Service, Order Controller, Unit of work, Generic Repository, Order Service to use the Unit of Work and AutoMappers & Value Resolver.",
       "author": "ygtalp",
       "date": "2021-10-22 16:28:34",
       "time": 17
     },
     {
       "id": "ae27a05652ed2b67395ce2b758b8739981a62b47",
       "parents": [
         [
           "dae05a4558a6eae6015602a5ed6841e7f7517902",
           17,
           0
         ]
       ],
       "message": "Done Client: Checkout Page, Stepper Component, checkout & address & delivery forms, Http interceptor for send to token, summary and review, populating the address form from API, saving address, shipping price and updating total, submission and success page.",
       "author": "ygtalp",
       "date": "2021-10-23 00:03:00",
       "time": 18
     },
     {
       "id": "6e457eb39300a688a1c5b46082cb61a6960be2e3",
       "parents": [
         [
           "ae27a05652ed2b67395ce2b758b8739981a62b47",
           18,
           0
         ]
       ],
       "message": "Bug: Register put to post. bug fixed.",
       "author": "ygtalp",
       "date": "2021-10-23 00:14:33",
       "time": 19
     },
     {
       "id": "b90ca23a1d71a358f1db248023ab81dce7ed8531",
       "parents": [
         [
           "6e457eb39300a688a1c5b46082cb61a6960be2e3",
           19,
           0
         ]
       ],
       "message": "Done Client: Orders and Order details components, module and service.",
       "author": "ygtalp",
       "date": "2021-10-26 17:17:15",
       "time": 20
     },
     {
       "id": "a32585cefb090645d02c9939a63ada636c47e3d5",
       "parents": [
         [
           "b90ca23a1d71a358f1db248023ab81dce7ed8531",
           20,
           0
         ]
       ],
       "message": "DONE: Stripe Payment Controller, Funcs. Card validation implement from Stripe. Stepper linear mode. Services and webhooks. Client fixes.",
       "author": "ygtalp",
       "date": "2021-10-27 07:43:45",
       "time": 21
     },
     {
       "id": "6b660805edd45d5c62fc7d4bc288ae656dc2b2ee",
       "parents": [
         [
           "a32585cefb090645d02c9939a63ada636c47e3d5",
           21,
           0
         ]
       ],
       "message": "Done: Caching and styling",
       "author": "ygtalp",
       "date": "2021-10-27 11:17:40",
       "time": 22
     }
   ]
 };

  constructor() { }

  ngOnInit(): void {
  }



}
