function recommend(arr){
    var h={};
    var maxNum=0;
    var maxEle=null;
    for(var i=0;i<arr.length;i++){
        var a=arr[i];
        h[a]===undefined? h[a]=1 :(h[a]++);
        if(h[a]>maxNum){
            maxEle=a;
            maxNum=h[a];
        }
    }
    return maxEle;
}

module.exports=recommend;
