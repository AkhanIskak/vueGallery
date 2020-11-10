<template>
    <div>
         <li>  
         <span v-bind:class="{done:todo.completed}">
                        
        <input type="checkbox" v-on:change="todo.completed=!todo.completed">    
                <strong>{{index}}</strong>
            {{todo.title}}
             <button v-on:click="$emit('remove-todo',todo.id)">&times;</button>
        </span></li>
    </div>
</template>
<script>

export default {
    
    props:{
        todo:{
            type:Object,
            required:false
        },
        index:Number
    }
}
</script>
<style scoped>
li{
    border:1px solid rgb(206, 71, 71);
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}
.done {
    text-decoration: line-through;
}
</style>