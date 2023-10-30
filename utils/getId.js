export const getIdFromUrl = (url) => {
    if(url){
        let url_splited = url.split('/');
        return url_splited[url_splited.length-2]
    }
}
