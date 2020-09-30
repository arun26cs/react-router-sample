import React,{Component} from 'react';
import Hocstyleer from '../hoc/Hocstyleer'
import axios from 'axios';

class home extends Component{
    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
            this.setState({posts:response.data})
        })
    }
    render(){
        const {posts} = this.state;
        console.log(posts)
        const homepost = posts.length ? (
            posts.map(post=>{
                return (
                <div className='post card'>
                    <div className='card-content'>
                        <p className='card-title'>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                </div>
            );
            })
        ):(
            <div className="center">
                <h3>No posts!!!</h3>
            </div>
        );
        return (
            <div className="container">
                <h1 className="center">Home page </h1>
                {homepost}
            </div>
        );
    }
}

export default Hocstyleer(home);