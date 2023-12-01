<template>
    <div class="header">
        
        <div class="date">{{ date }}</div>
    </div>      
</template>

<script>
export default {
    props: ["date"]

}
</script>

<style>
  .header{
    width: 380px;
    height: 200px;
    background-image: url('../assets/bg1.jpg');
    background-size: 100% 200%;
    background-repeat: no-repeat;
    border-radius: 15px 15px 0 0;
    position: relative;
    }

    .date{
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #FFF;
    font-size: 25px;
    font-family: 'Titillium Web', sans-serif;
    }
</style>