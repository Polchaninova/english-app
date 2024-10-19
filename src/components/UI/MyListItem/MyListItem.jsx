import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//  {
//    topic.lessons.map((lesson, lessonIndex) => (
//      <ListItem key={lessonIndex}>
//        <img src={lesson.img} alt={lesson.title} />
//        <ListItemText>{lesson.title}</ListItemText>
//      </ListItem>
//    ));
//  }
const MyListItem = ({ topic }) => {
  return (
    <>
      {topic.lessons.map((lesson, lessonIndex) => (
        <Card sx={{ maxWidth: 166, mb: "16px", p: "16px" }} key={lessonIndex}>
          <Typography gutterBottom variant="h4" component="div">
            {lesson.title}
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: 75 }}
            image={lesson.img}
            alt={lesson.title}
          />
        </Card>
      ))}
    </>
  );
};

export default MyListItem;
