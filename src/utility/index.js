const Utility = {
  includesSplit: function({url, qString, splitter, index}){
    if(url && url.includes(qString)){
      return url.split(splitter)[index];
    }else{
      return '';
    }
  }
}

export default Utility;
