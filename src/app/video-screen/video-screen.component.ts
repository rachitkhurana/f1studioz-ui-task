import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.css']
})
export class VideoScreenComponent implements OnInit {


  callerName = 'Aishwarya';
  productName = 'Gold Earings';

  @Output() billScreenTrigger = new EventEmitter();

  elem: any; isFullScreen: boolean = false;

  imgUrls = {
    notMute: './../../assets/provided_assets/mic-on.svg',
    mute: './../../assets/provided_assets/mute.svg',
    video: './../../assets/provided_assets/video-off-grey.svg',
    noVideo: './../../assets/provided_assets/video-off.svg',
  }


  isMute = false;
  muteImg = this.imgUrls.notMute;

  isVideoOff = false;
  videoImg = this.imgUrls.video;


  videoItemsExpanded = true;
  videoItemsToggle() {
    this.videoItemsExpanded = !this.videoItemsExpanded;
  }

  constructor(
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    //this.chkScreenMode();
    this.elem = document.documentElement;
  }



  triggerBillScreen() {
    this.billScreenTrigger.emit(true);
  }

  triggerFullscreen() {

  }

  muteClicked() {
    this.isMute = !this.isMute;
    if (this.isMute) {
      this.muteImg = this.imgUrls.mute;
    } else {
      this.muteImg = this.imgUrls.notMute;
    }
  }

  videoOffClicked() {
    this.isVideoOff = !this.isVideoOff;
    if (this.isVideoOff) {
      this.videoImg = this.imgUrls.noVideo;
    } else {
      this.videoImg = this.imgUrls.video;
    }
  }



  // FULL SCREEN FUNCTIONALITY

  fullscreenmodes(event){
    this.chkScreenMode();
  }
chkScreenMode(){
    // if(document['fullscreenEnabled']){
    //   //fullscreen
    //   this.isFullScreen = true;
    // }else{
    //   //not in full screen
    //   this.isFullScreen = false;
    // }
    this.isFullScreen = !this.isFullScreen;
  }
openFullscreen() {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
      this.isFullScreen = true;
    }
/* Close fullscreen */
    closeFullscreen() {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
      this.isFullScreen = false;
    }
}

