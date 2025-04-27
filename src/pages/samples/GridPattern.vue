<script setup></script>
<template>
    <main>
        <header>Header</header>
        <article>Content</article>
        <aside>SideBar</aside>
        <footer>Footer</footer>
    </main>
    
</template>
<style>
* {
    text-align: center;
    color: #000;
}
main{
    width: 100%;
    height: 100dvh;
    background-color: red !important;
    display: grid;
    grid-template-areas: 
    "head head head"
    "side content content"
    "footer footer footer"
    ;
    grid-template-rows: 100px auto 30px;
    grid-template-columns: 400px auto;
}
header{
    grid-area: head;
    background-color: green;
}
article{
    grid-area: content;
    background-color: blue;
}
aside{
    grid-area: side;
    background-color: yellow;
}
footer{
    grid-area: footer;
}
</style>