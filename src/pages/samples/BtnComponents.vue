<script setup></script>
<template>
  <div class="wrapper">
    <h2>Button Hover Animations</h2>
  <section>
  <button class="base-btn bottom-border">
    <div class="bottom-border-label" >Bottom Border</div>
  </button>
  <button class="base-btn btn-ltr-bg-transition">Left to right BG Transition</button>
  <button class="base-btn box-shadow-transition">Box Shadow</button>
  <button class="base-btn bg-color-scale">
    <div class="bg-color-scale-label">Background Color Scale</div>
  </button>
</section>
</div>
</template>
<style>

.wrapper{
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: var(--vt-c-black) !important;
}
section{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
}
.base-btn {
  width: 10em;
  aspect-ratio: 3/1;
  border-radius: 10px;
  border: 0;
  outline: 0;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
}

.bottom-border{
  position: relative;
}
.bottom-border-label{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  z-index: 4;
  animation-duration: 0.5ms;
}
.bottom-border::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  border-radius: 10px;
  transition-duration: 600ms;
  background-color:var(--primary-color);

}
.bottom-border:hover::after{
  height: 100%;
}
.bottom-border:hover>.bottom-border-label{
  color: #fff;
}
.btn-ltr-bg-transition{
    background-image: linear-gradient(var(--primary-color),var(--primary-shade-2));
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position: right;
    transition: background-size 500ms;
}
.btn-ltr-bg-transition:hover {
  background-size: 100% 100%;
  background-position-x: left;
  color:#fff;
}
.box-shadow-transition{
   
}

.box-shadow-transition:hover{
  background: var(--primary-color);
  box-shadow: 
  0 0 20px var(--primary-color),
  0 0 40px var(--primary-color),
  0 0 60px var(--primary-color),
  0 0 80px var(--primary-color);
  /* color: red; */
  transition-delay: .3ms;
  }

.bg-color-scale{
  position: relative;
  border: 1px solid var(--primary-color);
  color: #000;
  z-index: 20;
}
.bg-color-scale-label{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.bg-color-scale::before{
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right:50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: var(--primary-color);
  border-radius: 10px;
}
.bg-color-scale:hover, button:focus{
  color: #fff;
}
.bg-color-scale:hover::before, .bg-color-scale:focus::before{
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);

}
.bg-color-scale:active{
  transform: scale(1);
}
</style>