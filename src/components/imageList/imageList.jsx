import useStyles from "./imageListStyle";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { useState, useEffect } from "react";

 const SingleLineImageList = (props) => {
  const classes = useStyles();
  const [itemData, setItemData] = useState([]);

  useEffect(()=>{
    setItemData(props.items)
  })

  return (
    <div className={classes.root}>
      <ImageList  className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.name}>
            <img  src={URL.createObjectURL(item)} alt={item.name} />
            <ImageListItemBar
              title={item.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default SingleLineImageList
