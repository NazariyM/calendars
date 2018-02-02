import {$nav, $body, $window} from "../modules/dev/_helpers";

export default class Navigations {
  constructor() {
    this.$nav = $nav;
    this.$navBtn = $('.js-nav-toggle');
    this.$menu = $('.js-menu');
    this.$menuBtn = this.$menu.find('.menu__mob-title');
    this.$menuContainer = this.$menu.find('ul');
    this.init();
  }

  initMobNav() {
    const _this = this;
    this.$navBtn.on('click', function (e) {
      let $this = $(this);
      $this.toggleClass('is-active');
      $body.toggleClass('is-locked');
      $nav.fadeToggle(100).css('display', 'flex');
    });

    $window.on('resize', function () {
      _this.$navBtn.removeClass('is-active');
      $body.removeClass('is-locked');
      _this.$nav.removeAttr('style');
      _this.$menuContainer.removeAttr('style');
    });
  }

  initMenu() {
    this.$menuBtn.on('click', function () {
      let $this = $(this);

      $this.next().slideToggle();
    });
  }

  init() {
    this.initMobNav();
    this.initMenu();
  }
}