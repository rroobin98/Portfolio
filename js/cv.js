// CV - JSON



let url ="./json/cv.json";

async function getSomething(){
    let response = await fetch (url)

    if(response.ok){
        let data = await response.json();
        



        //Employment

        data.employment.forEach(item => {
            let li = document.createElement('h3');
            
            li.innerHTML = `<div class="json">
            <h1> ${item.heading}</h1>
            <h2> <em>${item.jobTitle}</em></h2>
            <h5> ${item.location}</h5>
            <h4> ${item.about}</h4>
            </div>
            
            `;
            
            
            console.log(li);

          document.getElementById('json-emp-h3').appendChild(li);
            
        });


        //Education

        data.education.forEach(item => {
            let li = document.createElement('h3');
            li.innerHTML = item;
            
            
            console.log(li);
            document.getElementById('json-ed-h3').appendChild(li);
        });



        //Language

            let li = document.createElement('h3');
            
            li.innerHTML = `
           <div class="div-lang"> 
            <h5> ${data.language.Swedish} </h5>
            <h5> ${data.language.English}</h5>
            </div>
            
            `;
            
            
            console.log(li);
           document.getElementById('json-lang-h3').appendChild(li);
            
        

     


    } else{
        console.log("HTTP-error:"+ response.status);
    }
    
}

getSomething();