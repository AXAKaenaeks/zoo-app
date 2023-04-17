import './homepage.scss';
import Carousel from "react-material-ui-carousel";
import lionImage from '../img/lion.png';
import {Button, Card, CardActions, CardContent, CardHeader, Paper} from "@mui/material";

function Homepage() {
    const news = [
        {title: 'Titel 1', text: 'Text', image: lionImage},
        {title: 'Titel 2', text: 'Text', image: lionImage},
        {title: 'Titel 3', text: 'Text', image: lionImage}
    ]

    return (
        <div className="homepage">
            <Carousel
                interval={20000}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                stopAutoPlayOnHover={true}
                height="100%"
                className="carousel">
                {news.map(i =>
                    <Paper className="content"
                           sx={{background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${i.image})`}}>
                        <Card className="info">
                            <CardHeader title={i.title}/>
                            <CardContent>{i.text}</CardContent>
                        </Card>
                    </Paper>
                )}
            </Carousel>
            <Card className="zoo-infos">
                <CardHeader title="Öffnungszeiten"/>
                <CardContent>
                    <p>geöffnet von:</p>
                    <p>MO: 9:00 - 18:00</p>
                    <p>DI: 9:00 - 18:00</p>
                    <p>MI: 8:00 - 18:00</p>
                    <p>DO: 9:00 - 18:00</p>
                    <p>FR: 9:00 - 18:00</p>
                    <p>SA: 9:00 - 19:00</p>
                </CardContent>
                <CardActions><Button variant="contained">Tickets kaufen</Button></CardActions>
            </Card>
        </div>
    );
}

export default Homepage;