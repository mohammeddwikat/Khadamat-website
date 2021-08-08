import {useHistory} from 'react-router-dom'
import useStyles from './imagesGalleryStyle'
import code from '../../../images/code.jpg'
import forget from '../../../images/forget.jpg'
import newWork from '../../../images/newWork.jpg'
import people from '../../../images/people.jpeg'
import work from '../../../images/work.jpg'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ListSubheader from '@material-ui/core/ListSubheader';

const itemData = [
    {
        freelancer:"mohammad",
        img: work,
        name:"test",
        title:"web development"
    },
    {
        freelancer:"mohammad",
        img: people,
        name:"test",
        title:"web development"
    },
    {
        freelancer:"mohammad",
        img: code,
        name:"test",
        title:"web development"
    },
    {
        freelancer:"mohammad",
        img: forget,
        name:"test",
        title:"web development"
    },
    {
        freelancer:"mohammad",
        img: newWork,
        name:"test",
        title:"web development"
    }
]

const ImagesGallery = (props) => {
  const userId = props.id;
  //const itemData = props.items;
  const history = useHistory()
  const classes = useStyles()
  const redirectToWorkPage = (userId, workId) => {
    //history('/freelancer/work/:userId/:workId')
  }

  const height = window.innerWidth
  return (
    <div className={classes.root}>
      <ImageList cols={parseInt(height/400)}  spacing={30} rowHeight={500}  className={classes.imageList}>
    
        {itemData.map((item) => (
          <ImageListItem key={item.name} className={classes.imageItem}>
            <img width="300px" height="600px" src={item.img} alt={item.name} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.freelancer}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  className={classes.icon}
                  
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImagesGallery;
