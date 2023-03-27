# Zoo Application
### Contributors
Loris Frei, Nick Werginz, Eleni Müller, Luca Reinle
### GitHub Workflow
1. create new branch
2. implement your changes
3. commit and push
4. creat Pull-Request (with 1 reviewer)
5. Merge into develop


###Release on Docker
1. If you have an old image from this project on docker pls delete it
2. run docker-deploy script
3. Open browser on port 3000

### Release
1. Update version in develop and push it
2. Merge develop into Master (dont delete develop!)
3. run release script in package json (Master branch)

### GitHub Naming
Wie wird was benannt / beschrieben?

#### Branches:
Branch Names sollen kurz beschreiben was der neue Change bringt. 
zB. "change-Readme" abstände werden ersetzt mit bindestrich.

#### Commit Messages:
Commit message sollen beschreiben, was geändert wurde. Link oder Name von Story

#### Kommentare:
Nur bei verwirrendem Code sollen kurze Kommentare geschrieben werden.