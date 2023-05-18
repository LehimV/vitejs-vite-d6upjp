import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CharacterCard(character) {

  return (
    <Card sx={{ display: "flex", background: "grey", border: 'solid', borderColor: 'white',}}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={character.img}
        alt={character.name}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            sx={{
              color: "#42b4ca",
              textShadow: "1px 1px 2px yellow, 0 0 0.2em purple",
            }}
          >
            {character.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            component="div"
            
          >
            Species: {character.specie}
          </Typography>
          <Typography
            variant="subtitle1"
            color="whitesmoke"
            component="div"
          >
            Origin: {character.origin}
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            component="div"
          >
            Status: {character.status}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}