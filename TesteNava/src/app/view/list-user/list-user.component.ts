import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers: [UserService]
})
export class ListUserComponent implements OnInit {

  public user = {} as User;
  public index: number = -1;
  public listUser: User[] = [];
  public map: google.maps.Map; 

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  // Chama o serviço para pegar todos os usuários
  getUser() {
    this.userService.getUsers().subscribe((list: User[]) => {
    this.listUser = list;

    });

    for (var i: number = 0; i < 0; i++) {
      this.listUser[i].flagFavorite = false;
    }
    console.log(this.listUser);
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  // favorita o usuário
  controlFavorite(index: number) {
    this.listUser[index].flagFavorite = !this.listUser[index].flagFavorite;
  }

  // defini se um usuário será atualizado no caso do uso de api
  // saveUser(form: NgForm) {
  //   if (this.user.flagFavorite) {
  //     this.userService.updateUser(this.user).subscribe(() => {
  //       this.cleanForm(form);
  //     });
  //   } else {
  //     console.log('Esse usuário não pode ser alterado, pois não é favorito');
  //   }
  // }

  // defini se um usuário será atualizado para lista fixa
  saveUser(form: NgForm) {
    if (this.user.flagFavorite) {
      this.listUser[this.index] = this.user;
    } else {
      console.log('Esse usuário não pode ser alterado, pois não é favorito');
    }
  }

  // deleta um usuário no caso de usar uma api
  // deleteUser(user: User) {
  // this.userService.deleteUser(user).subscribe(() => {
  // this.getUser();
  // });
  // }

  // deleta um usuário no caso de uma lista fixa
  deleteUser(index: number) {
    this.listUser.slice(index - 1, 1);
  }

  // copia o usuário para ser editado.
  editUser(user: User, index: number) {
    this.user = user;
    this.index = index;
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUser();
    form.resetForm();
    this.user = new User();
  }

}
