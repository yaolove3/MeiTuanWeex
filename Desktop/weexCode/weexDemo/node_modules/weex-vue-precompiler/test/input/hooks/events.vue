<template>
  <div>
    <some-cmp @someEvent="someHandler" @appear.native="appear"></some-cmp>
    <slider @change="change" @appear="appear"></slider>
    <div @click="click" @appear="appear"></div>
    <input @return="onReturn" />
  </div>
</template>
