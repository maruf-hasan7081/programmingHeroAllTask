// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



      const Data=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      }



      const postdata=()=>{
        const url=('https://jsonplaceholder.typicode.com/posts')
        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            showdata(json)
        })
          
      }
      // postdata()
      



      const showdata=(post)=>{

const postdatali=document.getElementById('postli')
    //   console.log(postdata2)
    postdatali.innerHTML=''




        // console.log(post)
        post.forEach((post)=>{
            const  li =document.createElement('li')

            // console.log(post.title)
            li.innerText=post.title
            postdatali.appendChild(li)

        })
          
      }
