import React from 'react';
import './App.css';
import { client } from './client';
import { makeStyles } from '@material-ui/core/styles';
import Posts from './Components/Posts'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer from './Footer';
import Header from './Header';

const sections = [
 { title: 'Fashion Blogs', url: 'https://www.hellofashionblog.com/' },
  { title: 'Food Blogs', url: 'https://pinchofyum.com/garlic-basil-chicken-with-tomato-butter-sauce' },
  { title: 'Lifestyle Blogs', url: 'https://www.nomadicmatt.com/travel-blog/' },
  { title: 'Sports Blogs', url: 'https://detailed.com/sports-blogs/' },
  { title: 'Finance Blogs', url: 'https://www.startamomblog.com/what-is-a-lifestyle-blog/' },
 { title: 'Music Blogs', url: 'https://blog.feedspot.com/music_blogs/' },
  { title: 'Science Blogs', url: 'https://www.healthline.com/health/fitness-exercise/best-blogs-of-the-year#1' },
  { title: 'Health Blogs', url: 'https://www.under30experiences.com/blog/top-10-travel-bloggers-you-should-already-be-following' },
  { title: 'Fitness Blogs', url: 'https://www.healthline.com/health/fitness-exercise/best-blogs-of-the-year#1' },
  { title: 'Travel Blogs', url: 'https://www.under30experiences.com/blog/top-10-travel-bloggers-you-should-already-be-following' },
];


const sidebar = {title: 'About',description: "We design, build and maintain individual software and hardware projects for small and medium-sized enterprises.",
  archives: [
   { title: 'Archive1', url: '#' },
    { title: 'Archive2', url: '#' },
    { title: 'Archive3', url: '#' },
    { title: 'Archive4', url: '#' },
    { title: 'Archive5', url: '#' },
    { title: 'Archive6', url: '#' },
   ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};
class App extends React.Component{
    state = {
        articles: []
      }


    componentDidMount() {
        client.getEntries()
            .then((response) => {
                console.log(response)
                this.setState({
                    articles: response.items
                })
            })
            .catch(console.error)
    }

    render() {
 return (
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header style= {{ backgroundColor: "#212121"}} title="My First Blog" sections={sections} />
        <main>
         <div className='wrapper'> <Posts posts={this.state.articles}/></div>
           <p sidebar={sidebar}></p></main>     
         </Container>
      <Footer title="Footer" style={{color:"white"}} description="a ghat valley company!" />
    </React.Fragment>
      );
    }
}

export default App;
