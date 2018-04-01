import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CameraProvider {

  constructor(public http: HttpClient) { }

}
