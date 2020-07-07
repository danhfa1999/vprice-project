<template>
    <v-app>
          <v-img id="shiba"
            src="../assets/background2.png"
          transition="scale-transition"
          >
          <div id="info">
           <v-btn
           large
           id="btn-info"
      >
         <a 
          href="https://web.vnappmob.com/page/vprice-ung-dung-bao-gia-vang-ty-gia-ngoai-te-133"
          target="_blank"
        >
          Information App
        </a>
      </v-btn>
          </div>
          </v-img>
          <Navigation/>
    </v-app>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
#shiba{
  width: 100%;
  height:850px;
}
#btn-info{
  width:300px;
  background-color:#59b6dd;
  a{
    outline: none;
    text-decoration:none ;
    color:#ffff;
  }
}
#info{
  display:flex;
  justify-content: center;  
  position: relative;
  top: 55%;
}
</style>