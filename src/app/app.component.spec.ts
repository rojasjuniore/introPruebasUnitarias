import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {

  let appComp
  let service

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [AppComponent, UserService],
    }).compileComponents();

    appComp = TestBed.get(AppComponent)
    service = TestBed.get(UserService)
  }));


  it('should create the app', () => {
    expect(appComp).toBeTruthy();
  });


  it('prueba de var', () => {
    expect(appComp._toEqual).toEqual('rojas');
  })


  it('la variables debe contener junior', () => {
    expect(appComp._toContain).toContain('junior');
  })

  it('debe retornar true', () => {
    const resp = appComp.par(22)
    expect(resp).toBeTruthy()
  })

  it('debe retornar false', () => {
    const resp = appComp.par(23)
    expect(resp).toBeFalsy()
  })

  const dummyUserListResponse = {
    data: [
      { id: 1, last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
      { id: 2, last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg' },
      { id: 3, last_name: 'Wong', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' },
    ],
  };

  it('debe llamar a nuestro servcios y el metodo getUserList', () => {

    const users = spyOn(service, 'getUserList').and.callFake(users => {
      return of(dummyUserListResponse)
    })

    appComp.ngOnInit()

    expect(users).toHaveBeenCalled()
  })


});
