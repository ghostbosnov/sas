let prompt=require('prompt-sync')()
  let tab=[10,8,9,42,12,5,7]
  let tab1=[]
  let tab2=[]
  for(i=0;i<tab.length;i++){
    if (tab[i]%2!==0){
        tab1[tab1.length]=tab[i]
    }
    if (tab[i]%3==0){
        tab2[tab2.length]=tab[i]
    }
  }
        console.log(tab1)
        console.log(tab2)
  if(tab1.length>tab2.length){
        console.log("les impaires sont plus que les multiples de 3")
  }
  else if(tab2.length>tab1.length){
        console.log("les impaires sont moins que les multiples de 3")
  }
  else {
        console.log("les impaires et les multiples de 3 sont identiques")
  }