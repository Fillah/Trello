<template>
  <div id="app">
    <header>
      <div class="wrap">
        <div class="flex-row flex-center">
          <ul>
            <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve" width="20px" height="20px">
                  <g>
                    <g id="Grid">
                      <path d="M144.364,0H24.061C10.767,0,0,10.767,0,24.061v120.303c0,13.281,10.767,24.061,24.061,24.061h120.303    c13.293,0,24.061-10.779,24.061-24.061V24.061C168.424,10.767,157.657,0,144.364,0z M144.364,144.364H24.061V24.061h120.303    V144.364z" fill="#919191"/>
                      <path d="M360.909,0H240.606c-13.293,0-24.061,10.767-24.061,24.061v120.303c0,13.281,10.767,24.061,24.061,24.061h120.303    c13.281,0,24.061-10.779,24.061-24.061V24.061C384.97,10.767,374.191,0,360.909,0z M360.909,144.364H240.606V24.061h120.303    V144.364z" fill="#919191"/>
                      <path d="M360.909,216.545H240.606c-13.293,0-24.061,10.779-24.061,24.061v120.303c0,13.293,10.767,24.061,24.061,24.061h120.303    c13.281,0,24.061-10.767,24.061-24.061V240.606C384.97,227.313,374.191,216.545,360.909,216.545z M360.909,360.909H240.606    V240.606h120.303V360.909z" fill="#919191"/>
                      <path d="M144.364,216.545H24.061C10.767,216.545,0,227.325,0,240.606v120.303c0,13.293,10.767,24.061,24.061,24.061h120.303    c13.293,0,24.061-10.767,24.061-24.061V240.606C168.424,227.313,157.657,216.545,144.364,216.545z M144.364,360.909H24.061    V240.606h120.303V360.909z" fill="#919191"/>
                    </g>
                  </g>
                </svg>
                <span>Boards</span>
              </a>
            </li>
        
            <li>
              <input type="search" placeholder="Search ...">
            </li>
          </ul>

          <div class="logo">
            <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png" alt="logo" class="img-responsive">
          </div>

          <ul class="right">
            <li>
              <a href="#">
                <div class="flex-row flex-center user">
                  <img src="./assets/images/me.png" alt="me">
                  <p>Hello, Jonas!</p>
                </div>
              </a>
            </li>
            <li class="notifications">
              <a href="#">
                <i class="material-icons">notifications_none</i>
              </a>
            </li>
            <li class="menu-right">
              <a href="#">
                <i class="material-icons">menu</i>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './scss/main';
</style>