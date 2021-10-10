import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import './popular.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
 

function Popular() {
 
  var data0,data1,data2,data3,data4,data5,data6;
  var imdbData;
    const [imdbFullData ,setImdbFullData] =useState([]);
    const [popularId, setPopularId ] = useState([
      "tt0104040",
"tt5566790",
"tt9735318",
"tt0101700",
"tt10767168",
"tt0077523",
"tt0356680",
"tt0328099",
"tt0418689",
"tt3385524",
"tt1216487",
"tt3312180",
"tt3247714",
"tt1698641",
"tt0073802",
"tt6760876",
"tt6211976",
"tt0361467",
"tt0247425",
"tt2788732",
"tt8820590",
   ]
);

    
// initialize starting triger
useEffect(() => {
      
  getImdbData();
 },[])  


    

    const [isLoading, setLoading] = useState('');
  
  
//// get imdb id for popular movies    
// const getImdbId = () => {   
//    const options = {
//       method: 'GET',
//       url: 'https://data-imdb1.p.rapidapi.com/movie/order/byPopularity/',
//       headers: {
//         'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
//         'x-rapidapi-key': 'e497470d92msh184116dd7f558c4p19f4a6jsn1d39b63a73c0'
//       }
//     };
    
//     axios.request(options).then(function (response) {
//         setPopularId(
//           [
//             (response.data['Movie Order By Popularity'][0].imdb_id),
//             (response.data['Movie Order By Popularity'][1].imdb_id),
//             (response.data['Movie Order By Popularity'][2].imdb_id),
//             (response.data['Movie Order By Popularity'][3].imdb_id),
//             (response.data['Movie Order By Popularity'][4].imdb_id),
//             (response.data['Movie Order By Popularity'][5].imdb_id),
//             (response.data['Movie Order By Popularity'][6].imdb_id),
//             (response.data['Movie Order By Popularity'][7].imdb_id),
//             (response.data['Movie Order By Popularity'][8].imdb_id),
//             (response.data['Movie Order By Popularity'][9].imdb_id),
//             (response.data['Movie Order By Popularity'][10].imdb_id),
//             (response.data['Movie Order By Popularity'][11].imdb_id),
//             (response.data['Movie Order By Popularity'][12].imdb_id),
//             (response.data['Movie Order By Popularity'][13].imdb_id),
//             (response.data['Movie Order By Popularity'][14].imdb_id),
//             (response.data['Movie Order By Popularity'][15].imdb_id),
//             (response.data['Movie Order By Popularity'][16].imdb_id),
//             (response.data['Movie Order By Popularity'][17].imdb_id),
//             (response.data['Movie Order By Popularity'][18].imdb_id),
//             (response.data['Movie Order By Popularity'][19].imdb_id),
//             (response.data['Movie Order By Popularity'][20].imdb_id), 
//         ])
         
//         console.log([
//           (response.data['Movie Order By Popularity'][0].imdb_id),
//           (response.data['Movie Order By Popularity'][1].imdb_id),
//           (response.data['Movie Order By Popularity'][2].imdb_id),
//           (response.data['Movie Order By Popularity'][3].imdb_id),
//           (response.data['Movie Order By Popularity'][4].imdb_id),
//           (response.data['Movie Order By Popularity'][5].imdb_id),
//           (response.data['Movie Order By Popularity'][6].imdb_id),
//       ])
        
//     }).catch(function (error) {
//         console.error(error);
//     });


// }
  

     const getImdbData = () => {
 
   //// set data for each imdb id because it buffer to delay of each request
   if(popularId[0]) {
   console.log("check id",popularId[0]);

    const options = {
      method: 'GET',
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${popularId[0]}`,
      headers: {
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
        'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
      }
    };
    
    axios.request(options).then((response) => {
      data0 = response.data
      console.log("data 0 response",data0)
      return data0
    }).catch(function (error) {
      console.error(error);
    }); 
               
             } 
             console.log("ouside a ",data0)

          if(popularId[1]) {


const options = {
  method: 'GET',
  url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${popularId[1]}`,
  headers: {
    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
    'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
  }
};

axios.request(options).then(function (response) {
	 data1= response.data

}).catch(function (error) {
	console.error(error);
}); 
           
         } 
         if(popularId[2]) {


          const options = {
            method: 'GET',
            url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${popularId[2]}`,
            headers: {
              'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
              'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
            }
          };
          
          axios.request(options).then(function (response) {
             data2 = response.data
          
          }).catch(function (error) {
            console.error(error);
          }); 
                     
                   } 
                if(popularId[3]) {
      
      
      const options = {
        method: 'GET',
        url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${popularId[3]}`,
        headers: {
          'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
          'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
        }
      };
      
      axios.request(options).then(function (response) {
         data3 =response.data
      
      }).catch(function (error) {
        console.error(error);
      }); 
                 
               }  if(popularId[4]) {


                const options = {
                  method: 'GET',
                  url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${popularId[4]}`,
                  headers: {
                    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                    'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
                  }
                };
                
                axios.request(options).then(function (response) {
                 data4 =response.data
                
                }).catch(function (error) {
                  console.error(error);
                }); 
                           
                         } 
                      if(popularId[5]) {
            
            
            const options = {
              method: 'GET',
              url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${popularId[5]}`,
              headers: {
                'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
              }
            };
            
            axios.request(options).then(function (response) {
              data5 = response.data
            
            }).catch(function (error) {
              console.error(error);
            }); 
                       
                     } 
                     if(popularId[6]) {


                      const options = {
                        method: 'GET',
                        url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${popularId[6]}`,
                        headers: {
                          'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                          'x-rapidapi-key': '7aacdf0638msha58f0af4a1e8709p1f7b23jsnc981274d462d'
                        }
                      };
                      
                      axios.request(options).then(function (response) {
                      data6 =response.data
                      
                      }).catch(function (error) {
                        console.error(error);
                      }); 
                                 
                               } 
                             
                               

         
       setImdbFullData([
          data0,data1,data3,data4,data5,data6
     ])
          
    console.log(imdbData);
     }  
     

     // use effect for tow defferent functions 
     
    //  useEffect(() =>{
    //   getImdbId();  
      
    // }, [])
   

     const allOutput = ()=>{

      return imdbFullData.map((imdbData,id)=>{
            console.log("check data",imdbData)
    return <Carousel.Item className="popular_movie_detail" key={id}> 
        <h3 className="popular_movie_title">{imdbData.title}</h3> 
        <img src={imdbData.poster} alt={imdbData.title} className="popular_image"></img>
        <p>{imdbData.plot}</p>
         
    
      </Carousel.Item>
  
      })
      
    }

    // console.log("real popular id",popularId)
    // console.log("real out data ",imdbData);
    return (  
      <div className="container">

        <Carousel className="mt-5 popular_movie_container">
            {allOutput()}
      </Carousel>
      </div>   
    )
} 
export default Popular
