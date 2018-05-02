let maps = {
    baidu:'http://api.map.baidu.com/api?v=2.0&ak=5xg2kqlDtrMlhuMjuhVA5tYZe4OQ68dY',
    gaode:'http://webapi.amap.com/maps?v=1.4.6&key=5b4860517fabc59de44100761be6af22'
}

export const importMap = (mapType,callback) =>{
    //创建script
    let loadMap = ()=>{
        let hasScript = Array.prototype.slice.call(document.getElementsByTagName('script'), 0);
        for(let item of hasScript){
            if(item.dataset.map==mapType){
                return 1
            }
        }
        return 0
    }

    if(loadMap()){
        callback()
    }else{
        let script = document.createElement('script');
        script.setAttribute('type','text/javascript');
        script.setAttribute('data-map',mapType);
        script.setAttribute('src',maps[mapType]);
        document.body.appendChild(script);
        if (script.readyState) {//ie  
            script.onreadystatechange = function() {  
                var state = this.readyState;  
                if (state === 'loaded' || state === 'complete') {  
                    callback();  
                }  
            }  
        } else {//Others: Firefox, Safari, Chrome, and Opera   
            script.onload = function() {  
                callback();  
            }  
        }
    }
}
