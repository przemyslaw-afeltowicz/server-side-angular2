import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() src:string;
  @Input() poster:string;

  constructor() { }

  ngOnInit() {
  }

  progress(video, range, progress){
    // let procent = (video.currentTime / video.duration) * 100;
    // progress.style.width = procent + "%";
    // range.style.left = procent + "%";
  }

  timeupdate(video, range, progress){
    var procent = (video.currentTime / video.duration) * 100;
    progress.style.width = procent + "%";
    range.style.left = procent + "%";
  }

  setFullScreen(video){
    video.webkitEnterFullScreen();
  }

  setPlay(video, play){
    if(video.paused){
      play.classList.remove("fa-play");
      play.classList.add("fa-pause");
      video.play();
    }else {
      play.classList.add("fa-play");
      play.classList.remove("fa-pause");
      video.pause();
    }
  }

  setTime(event, video, range, that){
    let procent = (event.offsetX / that.offsetWidth) * 100;

    console.log(procent);
    range.style.left = procent + "%";
    // that.style.width = procent + "%";
    let sec = (video.duration * procent) / 100;
    video.currentTime = sec;
    if(!video.paused){
      video.play();
    }
  }

}
