import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap'

const CharacterCard = props => {

    console.log(props)
    const { character } = props;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{character.name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>Height: {character.height}</CardText>
                <CardText>Weight: {character.mass}</CardText>
                <CardText>Hair-Color: {character.hair_color}</CardText>
                <CardText>Skin-Color: {character.skin_color}</CardText>
            </CardBody>
        </Card>
    )
}

export default CharacterCard;