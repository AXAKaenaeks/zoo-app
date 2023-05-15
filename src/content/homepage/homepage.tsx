import './homepage.scss';
import Carousel from "react-material-ui-carousel";
import lionImage from '../img/lion.png';
import giraffeImage from '../img/giraffe.png';
import monkeyImage from '../img/monkey.png';
import {Button, Card, CardActions, CardContent, CardHeader, Paper} from "@mui/material";

function Homepage() {
    const news = [
        {
            title: 'Löwen Baby geboren',
            text: 'Am 19.3.2023 ist der kleine Simba auf die Welt gekommen.',
            image: lionImage
        },
        {
            title: 'Affe entkommen',
            text: 'Am Donnerstag dieser Woche ist ein Affe aus dem Gehege ausgebrochen. Halten Sie ausschau!',
            image: monkeyImage
        },
        {
            title: 'Neues Streichelgehege für die Giraffen',
            text: 'Ab dem 24.4.2023 wird ein neues Streichelgehege für die Giraffen eröffnet. Komm vorbei!',
            image: giraffeImage
        }
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
                           sx={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${i.image})`}}>
                        <div className="info">
                            <CardHeader title={i.title}/>
                            <CardContent>{i.text}</CardContent>
                        </div>
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