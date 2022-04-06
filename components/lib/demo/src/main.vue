<template>
  <div>
      <h1>demo</h1>
      <slot :user="user">
          {{user}}
      </slot>
  </div>
</template>

<script>
export default {
    name:'Demo',
    data(){
        return{
            user:{
                name:'DYY'
            }
        }
    }
}
</script>

<style>

</style>