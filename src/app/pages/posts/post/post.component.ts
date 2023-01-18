import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje:any;

  // Con Output el componente hijo puede emitir un evento al componente padre
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.clickPost.emit( this.mensaje.id );
  }

}
