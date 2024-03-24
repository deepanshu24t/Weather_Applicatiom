import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './InfoBox.css';

function InfoBox({info}) {
    const COLD_URL = "https://images.unsplash.com/photo-1687904364304-3fa792cdb55a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB0ZW1wZXJhdHVyZXN8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1572339152622-ce5e57956129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMHRlbXBlcmF0dXJlfGVufDB8fDB8fHww";
    const RAINY_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAINY_URL: info.temp>15 ? HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon>: info.temp>15 ? <WbSunnyIcon></WbSunnyIcon>:<AcUnitIcon></AcUnitIcon>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.temp_min}&deg;C</p>
                        <p>Max Temp = {info.temp_max}&deg;C</p>
                        <p>The weather can be described {info.weather} and feels like {info.feelsLike}&deg;C</p>

                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
    )
}

export default InfoBox;
