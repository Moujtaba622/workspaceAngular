import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  imports: [CommonModule],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member {
  //saisir le tableau de membres
    dataSource: any[] = [];
}
