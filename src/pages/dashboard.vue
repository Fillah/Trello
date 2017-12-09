<template>
  <div class="dashboard content">

    <div class="selected-board">
      <div class="flex-row">
        <div class="icon">
          <i class="material-icons">star_rate</i>
        </div>
        <div class="board-name">
          <h1>Planner Board</h1>
          <p>Netguru</p>
        </div>
        <div class="board-visibility">
          <i class="material-icons">remove_red_eye</i>
          <span>Team visible</span>
        </div>
      </div>
    </div>

    <div class="board-container">
      <div class="flex-row flex-space">
        <div class="board">

        </div>
        <div class="board">
          
        </div>
        <div class="board">
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>