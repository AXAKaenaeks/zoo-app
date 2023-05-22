import {Button, Card, CardActions, CardContent, CardHeader, Paper} from "@mui/material";

function Animals() {
    const animals = [
        {
            title: 'Schildkröten',
            text: 'Schildkröten sind die Meister des gemütlichen Lebens. Ihr Panzer bietet ihnen immer einen bequemen Ruheplatz. Sie haben auch einen Sinn für Humor und spielen gerne Streiche. Wenn es ums Essen geht, sind sie echte Feinschmecker und nehmen sich Zeit für die Auswahl. Aber ihr lustigster Aspekt ist ihr unverwechselbarer Gang - eine gemächliche Eleganz, als würden sie über den roten Teppich schreiten. Schildkröten lehren uns, dass ein langsames Tempo manchmal der beste Weg zur Entspannung ist. Ausserdem werden sie mehrere hundert Jahre alt!',
        },
        {
            title: 'Affen',
            text: 'Affen sind die Spaßvögel des Tierreichs! Mit wackeligen Kletterkünsten und lustigen Grimassen bringen sie uns zum Lachen. Sie sind schlau und können Werkzeuge benutzen. Ihr soziales Netzwerk besteht aus Lauten, Gesten und Gesichtsausdrücken. Als Feinschmecker probieren Affen gerne verschiedene Früchte und Insekten. Bananen sind ihre Favoriten. Vorsicht, sie stehlen gerne und sorgen für verrückte Situationen. Als Haustiere bringen sie lustige Eskapaden mit. Affen sind lustige und schlaue Tiere. Sie haben ein beeindruckendes soziales Leben und genießen das Leben. Halte die Augen offen für die nächste Affenkomödie - sie könnten die Hauptdarsteller sein!',
        },
        {
            title: 'Fische',
            text: 'Fische sind unterwasserische Komiker! Mit wackelnden Flossen und funkelnden Augen sorgen sie für Lacher im Ozean. Sie beherrschen die Kunst der Tarnung und sind wahre Modeikonen des Meeres. Fische spielen gerne Streiche und haben einen ausgeprägten Sinn für Humor. Als Feinschmecker probieren sie verschiedene Leckerbissen und sorgen für Unterwasser-Spaß. Tauche ein und lass dich von ihrer humorvollen Präsenz verzaubern!'

        },
        {
            title: 'Giraffen',
            text: 'Kennst du den Witz über die Giraffe, die in eine Bar geht? Der Barkeeper fragt: "Warum hast du einen so langen Hals?" Die Giraffe antwortet: "Die Getränke sind hier so gut, ich kann nicht widerstehen! Giraffen sind nicht nur bekannt für ihre langen Hälse, sondern auch für ihren großartigen Sinn für Humor. Egal ob sie lustige Verrenkungen machen, sich hinter Bäumen verstecken oder sogar versuchen, Handstände zu machen, sie bringen uns immer zum Lachen. Giraffen sind die wahren Spaßvögel der Tierwelt'

        },
        {
            title: "Löwe",
            text: "Löwen, die königlichen Spaßmacher der Savanne! Mit wilden Mähnen und majestätischem Gang bringen sie uns zum Lachen. Löwen lieben gemeinsame Faulenzereien und beeindrucken mit ihren imposanten Mähnen. Sie haben einen schelmischen Sinn für Humor und sind echte Fleischliebhaber. Halte Ausschau nach der nächsten Löwenkomödie - sie könnten die Stars sein!"
        }
    ]

    return (
        <div className="homepage">
            {animals.map(i =>
                <table>
                    <th>{i.title}</th>
                    <td>{i.text}</td>
                </table>
            )}
        </div>
    );
}

export default Animals;