import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sliderOptions = [
    {name: 'Clase 1', icon: 'accessibility-outline'},
    {name: 'Clase 2', icon: 'airplane-outline'},
    {name: 'Clase 3', icon: 'alarm-outline'},
    {name: 'Clase 4', icon: 'aperture-outline'},
  ];

  cardsArray = [
    {
      image: 'assets/home/dog.jpg',
      subTitle: 'Clase 1',
      title: 'Ejemplo de Javascript',
      description: 'Lorem ipsum dolor, laboriosam doloremque sapiente.',
      label: 'Revisar clase',
      type: 0
    },
    {
      image: 'assets/home/italy.jpg',
      subTitle: 'Clase 2',
      title: 'Ejemplo de Ionic',
      description: 'Lorem ipsum dolor, laboriosam doloremque sapiente.',
      label: 'Ejercicio de tarea',
      type: 1
    }
  ];

  // eslint-disable-next-line max-len
  arrayRandomPeople = ['https://picsum.photos/200/300?random=1', 'https://picsum.photos/200/300?random=2', 'https://picsum.photos/200/300?random=3', 'https://picsum.photos/200/300?random=$4'];

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

  randomNumber() {
    return Math.round(Math.random() * (5 - 1) + 1);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Descargar multimedia!',
      message: 'Estas apunto de descargar un contenido <strong>increible</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'custom-danger',
          handler: (blah) => {
            this.presentToast();
          }
        }, {
          text: 'Descargar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Cancelado',
      message: 'Descarga cancelada.',
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }
}
