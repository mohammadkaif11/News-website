let newsacc=document.getElementById('newsacc')
const xhr=new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=18f30ccbe8074223951c057194a1df68',true);
 xhr.onload=function(){
     if(this.status=200){
         let json=JSON.parse(this.responseText);
     //        console.log(json);
         let articles=json.articles;
   //   console.log(articles)
         let newshtml=''
         articles.forEach(function(element) {
           let news =`<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
aria-expanded="false" aria-controls="multiCollapseExample1" >${element["title"]}</a>
  <div class="row">
      <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                 ${element["description"]}. <a href="${element['url']}" target="_blank">Readmore</a> 
                  </div>
          </div>
      </div>
  </div>`
  newshtml+=news;
});
  newsacc.innerHTML=newshtml
     }else{
         console.log("some error")
     }
 }
 xhr.send();