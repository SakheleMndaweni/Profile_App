import { Component, OnInit } from '@angular/core';
import {ExaServiceService} from '../exa-service.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts;
  ad=[];
  message='';
  name='';
  email='';
  respo;
  res='';
  constructor(private s: ExaServiceService) { }

  ngOnInit(): void {
  }

  contacts_retrive(){
    this.s.get_Contacts().subscribe(data => {
      this.contacts = data;
    });
    this.ad = this.contacts.address.split(' ');
  }
  send(){

    if(this.message !=' ' && this.email !=' ' && this.name){
        this.s.send_Message(this.name,this.email,this.message).subscribe(data => {
          this.respo = data;
        });
        setInterval(this.check, 2000);
    }else {
      this.res ='Missing values'
    }
    
  }

  check(){
    if(this.respo != null){
      this.res ='Message sent';
      this.name = " ";
      this.email = " ";
      this.message =" ";
      
    }else {

      this.res ='Message not sent';
    }


  }

}
