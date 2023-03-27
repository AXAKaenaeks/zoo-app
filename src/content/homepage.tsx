import './homepage.css';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
function Homepage() {
    return (
        <>
            <header className="header">
                <IconButton><MenuIcon/></IconButton>
                


                     <h1>Mein Zoo</h1>
            </header>
            <main className="main">
                <p>Homepage</p>
            </main>
        </>
    );
}

export default Homepage;