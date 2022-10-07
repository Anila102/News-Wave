import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import React from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from 'react';


const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78c43a110b214ff5adf40ab228a052ef&page=${page - 1}&pagesize=${props.pageSize}`;

        let fetchedData = await fetch(url);
        props.setProgress(50);

        let parsedData = await fetchedData.json();
        props.setProgress(70);


        props.setProgress(100);
        setarticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setloading(false);


    }
    useEffect(() => {
        updateNews();
    }, [])

    // useEffect(() => {
    //     document.title = `${capitalizeFirstLetter(props.category)} - NewsWave`;
    //     updateNews();
    //     // eslint-disable-next-line
    // }, [])
    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=78c43a110b214ff5adf40ab228a052ef&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()

        setarticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setPage(page + 1)
    };

    return (
        <>
            <Box component="h1" mt={"30px"} mb={"5px"} textAlign="center"

            >World Today-Top {capitalizeFirstLetter(props.category)} Headlines
            </Box>
            {/* <h1> <div className="text-center " style={{ color: "black", marginTop: "50px", marginBottom: "20px" }}>World Today- {capitalizeFirstLetter(props.category)} Update</div></h1> */}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >
                {/* <div className="container">

                    <div className="row my-8">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}


                    </div ></div> */}

{/* <Grid gridRow={8}   > */}

                <Grid container justifyContent="center" alignItems="center" 
                columns={12} 
                 >
                    {articles.map((element) => (
                        <Grid key={element.url} item xl={3} xs={1} md={3}>

                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                        </Grid>
                    ))}

                </Grid>
                {/* </Grid> */}



            </InfiniteScroll >
        </>
    )

}
News.defaultProps = {
    country: "us",
    pageSize: 9,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;

// Class Based 

// heaxaiiiiiiiiiiiiiiu
// import React, { Component } from 'react'
// import Loading from './Loading';
// import NewsItem from './NewsItem'
// import PropTypes from "prop-types"
// import InfiniteScroll from "react-infinite-scroll-component";

// const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// export default class News extends Component {
//      capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     static defaultProps = {
//         country: "us",
//         pageSize: 9,
//         category: "general"
//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string
//     }
//     constructor(props) {
//         super(props);
//         state = {
//             articles: [],
//             loading: true,
// totalResults:0,
// // progress:progress,
//             page: 1
//         }
//         document.title=`${capitalizeFirstLetter(props.category)} - NewsWave`;

//     }
//     async updateNews() {
//         props.setProgress(10);
//         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78c43a110b214ff5adf40ab228a052ef&page=${state.page - 1}&pagesize=${props.pageSize}`;
//         setState({ loading: true });
//         let fetchedData = await fetch(url);
//         props.setProgress(50);

//         let parsedData = await fetchedData.json();
//         props.setProgress(70);

//         setState({
//             articles: parsedData.articles,

//             loading: false,
//             totalResults:parsedData.totalResults

//         })
//         props.setProgress(100);

//     }
//     async componentDidMount() {
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78c43a110b214ff5adf40ab228a052ef&pagesize=${props.pageSize}`;

//         //     let fetchedData = await fetch(url);
//         //     let parsedData = await fetchedData.json();

//         //     setState({

//         //         articles: parsedData.articles
//         //     })
//         updateNews();

//     }
//     handlePrevClick = async () => {

//         // if (!(state.page + 1 > Math.ceil(state.totalResults / 21))) {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78c43a110b214ff5adf40ab228a052ef&page=${state.page - 1}&pagesize=${props.pageSize}`;
//         // setState({ loading: true });
//         // let fetchedData = await fetch(url);
//         // let parsedData = await fetchedData.json();

//         // setState({
//         //     articles: parsedData.articles,
//         //     page: state.page - 1,
//         //     loading: false

//         // })
//         setState({ page: state.page - 1 });
//         updateNews();

//     }
//     handleNextClick = async () => {

//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78c43a110b214ff5adf40ab228a052ef&page=${state.page + 1}&pagesize=${props.pageSize}`;
//         // setState({ loading: true });

//         // let fetchedData = await fetch(url);
//         // let parsedData = await fetchedData.json();

//         // setState({
//         //     articles: parsedData.articles,
//         //     page: state.page + 1,
//         //     loading: false
//         // })
//         setState({ page: state.page + 1 });

//         updateNews();


//     }
//     // useEffect(() => {
//     //     document.title = `${capitalizeFirstLetter(props.category)} - NewsWave`;
//     //     updateNews();
//     //     // eslint-disable-next-line
//     // }, [])
//     fetchMoreData = async () =>{
//         // setState({page: state.page + 1})
//         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=78c43a110b214ff5adf40ab228a052ef&page=${state.page}&pageSize=${props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setState({
//         articles: state.articles.concat(parsedData.articles),
//         totalResults: parsedData.totalResults,
//         loading:false ,
//         page: state.page + 1
//         }
//         )
//     };
// render() {
//     return (
//         <>

//            <h1> <div className="text-center " style={{ color: "black", marginTop:"50px" , marginBottom:"20px" }}>World Today- {capitalizeFirstLetter(props.category)} Update</div></h1>

//             <InfiniteScroll
//                 dataLength={state.articles.length}
//                 next={fetchMoreData}
//                 hasMore={state.articles.length !== state.totalResults}
//                 loader={<Loading />}
//             >
//             <div className="container">

//         <div className="row my-8">
//         {state.articles.map((element) => {
//             return <div className="col-md-4" key={element.url}>
//             <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//             </div>
//         })}


//         </div ></div>



//             </InfiniteScroll >
//          </> 
//     )
//  }
// }


