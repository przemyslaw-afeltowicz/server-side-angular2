import {Injectable} from '@angular/core';

@Injectable()
export class FilmsService {

  films = [
    {
      id: 1,
      thumb: "https://news.mit.edu/sites/mit.edu.newsoffice/files/images/2016/MIT-Earth-Dish_0.jpg",
      title: "Tytuł filmu",
      description: "Opis filmu",
      source: "http://projekty.pro-comp.pl/nowy/video.mp4",
      category: "Komedia",
      director: "Adam Kowalski",
      actors: []
    },
    {
      id: 2,
      title: "Lorem ipsum",
      thumb: "https://static1.squarespace.com/static/54406c8fe4b0b8e2e81ba876/58351244e3df28974c9282cf/5835127a579fb34d13e304a3/1479873150361/pexels-photo-196667.jpeg",
      description: "Opis filmu",
      source: "http://projekty.pro-comp.pl/nowy/video.mp4",
      category: "Dramat",
      director: "Piotr Nowak",
      actors: []
    },
    {
      id: 3,
      title: "Sintel",
      thumb: "https://vodo.net/media/screenshots/work_138.jpeg",
      description: "Opis filmu",
      source: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      category: "Komedia",
      director: "Przemysław Testowy",
      actors: []
    },
    {
      id: 4,
      title: "Paluch",
      thumb: "https://vodo.net/media/screenshots/work_138.jpeg",
      description: "Paluch - Gdy kiedyś....",
      source: "https://r2---sn-f5f7ln7s.googlevideo.com/videoplayback?pl=18&mime=video/mp4&ei=LNqVWL3JCpGvWO2iv-AN&clen=13843438&expire=1486237324&id=o-AOkkjsFfJJ3cloaokaNyqHQ7NkVQxIZnFPiS0xPo0lCo&itag=18&sparams=clen,dur,ei,expire,gir,id,initcwndbps,ip,ipbits,ipbypass,itag,lmt,mime,mm,mn,ms,mv,nh,pl,ratebypass,requiressl,source,upn&upn=QxCWdLSXjZ4&gir=yes&requiressl=yes&ipbits=0&ip=77.91.32.28&lmt=1480018396873715&dur=234.057&ratebypass=yes&source=youtube&key=cms1&signature=4E92E35F39D316736DA80FC167E2430CEAEE6F1F.7DD7DECE95E23FC2A8A705C41E8DC6851C6BE46D&title=WWW.DOWNVIDS.NET-Paluch%20%22Gdybys%CC%81%20kiedys%CC%81%22%20prod.%20Maiky%20Beatz%20(%20OFFICIAL%20VIDEO%20)&redirect_counter=1&req_id=6452f4cc1e15a3ee&cms_redirect=yes&ipbypass=yes&mm=31&mn=sn-f5f7ln7s&ms=au&mt=1486215679&mv=m&nh=IgpwcjAyLndhdzAyKgkxMjcuMC4wLjE",
      category: "Polish rap",
      director: "Paluch",
      actors: []
    },
    {
      id: 5,
      title: "Elektronomia",
      thumb: "http://www.mrwallpaper.com/wallpapers/Planet-Energy-Art-1920x1200.jpg",
      description: "Elektronomia - Energy",
      source: "http://www.youtubeinmp4.com/redirect.php?video=fzNMd3Tu1Zw",
      category: "Polish rap",
      director: "Elektronomia",
      actors: []
    }

  ];

  // 'http://www.youtubeinmp4.com/redirect.php?video=TW9d8vYrVFQ'

  constructor() {


  }

  getFilms() {
    return this.films;
  }

  getFilm(id) {
    return this.films.find((item) => {
      return item.id === id;
    });
  }
}
