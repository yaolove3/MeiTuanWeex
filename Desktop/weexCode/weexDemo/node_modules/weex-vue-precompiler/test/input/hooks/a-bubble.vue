<template>
  <div ref="outer" @click="outerClick">
    <a href="#">
      <div ref="inner" @click="innerClick"></div>
    </a>
  </div>
</template>
