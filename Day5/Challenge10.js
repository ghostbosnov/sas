let tab=[5,3,8,1,2,9,4]
let temp=0
for(i=0;i<tab.length;i++){
    for(j=0;j<tab.length-1;j++){
        if (tab[j]>tab[j+1]){
            temp=tab[j];
            tab[j]=tab[j+1];
            tab[j+1]=temp;
        }
    }
}
console.log(tab)