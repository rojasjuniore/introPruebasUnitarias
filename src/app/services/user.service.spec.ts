import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";

import { UserService } from './user.service';
import { Users } from '../model/users'

describe('UserService', () => {


  let injector: TestBed
  let service: UserService;
  let httpMock: HttpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [UserService]
    })

    injector = getTestBed()
    service = TestBed.get(UserService)
    httpMock = injector.get(HttpTestingController)

  });

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });




  const dummyUserListResponse = {
    data: [
      { id: 1, last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
      { id: 2, last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg' },
      { id: 3, last_name: 'Wong', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' },
    ],
  };


  it('getUserList() should return data', () => {

    service.getUserList().subscribe((res) => {
      console.log(res)
      expect(res).toEqual(dummyUserListResponse);
    });

    const req = httpMock.expectOne('https://reqres.in/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });

});
