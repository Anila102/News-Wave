// import React, { Component } from 'react'

// export default class NewsItem extends Component {
//     render() {
//         let { title, description, imageUrl, newsUrl, author , date,source } = this.props;
//         return (
//             < div >

//                 <div className="card my-4 dark" style={{
//                     borderWidth: 4,
//                     borderColor: "rgb(149 149 149)",

//                     backgroundColor: "black",
//                     color: "white"
//                 }} >
//                     <div style={{
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         position: 'absolute',
//                         right: '0'
//                     }
//                     }>

//                         <span className="badge rounded-pill bg-danger"> {source} </span>
//                     </div>
//                     <img src={!imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png" : imageUrl} className="card-img-top" alt="..." />
//                     < div className="card-body" >
//                     <h5 className="card-title">{title} </h5>  
//                         <h5 className="card-title" > {title}.. </h5>
//                         <p className="card-text" > {description}..
//                         </p>
//                         <p className="card-text"><span className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</span></p>
//                         < a href={newsUrl} target="blank" className="btn btn-sm btn-dark" style={{
//                             borderWidth: 1,
//                             borderColor: "#6e6e6e",

//                         }} > Read More </a> </div>
//                 </div>
//             </div>
//         )
//     }
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'



const NewsItem = (props) => {
    // let { title, description, imageUrl, newsUrl, author , date,source } = this.props;

    return (
        <Card sx={{ maxWidth: 345, margin: "10px 1px" }}>
            <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: red[500], fontSize:"10px", textAlign:"center"  }} aria-label="source" >
                       {props.source}
                    </Avatar>
                }
              title={ <b>{props.title}</b>}
                // subheader={!props.author ? "Unknown" : props.author}
                subheader={new Date(props.date).toGMTString()}
            />
            <CardMedia
                component="img"
                height="194"
                image={!props.imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png" : props.imageUrl}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.primary"  my="2px">
                <b>Written By: {!props.author ? "Anonymous" : props.author}</b> </Typography>
                <Typography variant="body2" color="text.primary">
                    {props.description}
                    
                      
                </Typography>
            </CardContent>
            {/* <ReadMore > */}
            <Button
                component={Link}
                target="_blank"
                href={props.newsUrl}
               key={props.newsUrl}
                variant="contained"
                sx={{  mx: 3, my: 1, color: 'white', display: "flex", justifyContent: "flex-center", }}
            >
                Read More<ReadMoreIcon />
                 </Button>
            {/* </ReadMore> */}
        </Card>
    );
}

export default NewsItem;
// 78c43a110b214ff5adf40ab228a052ef