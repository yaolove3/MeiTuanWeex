<template>
  <div>
    <text :style="{'margin-left': '20px', 'marginBottom': '10px'}"></text>
    <text :style="{ 'margin-left': myMargin + 'px' }"></text>
    <text :style="myData.styles"></text>
    <div :style="myData.styles"></div>
    <div :style="getStyles('div')"></div>
    <div :style="isMyTheme ? { marginLeft: '20px' } : yourStyles"></div>
    <div :style="isMyTheme ? myStyles : yourStyles"></div>
  </div>
</template>
