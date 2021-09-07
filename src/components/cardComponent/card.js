import React from 'react';
import { Card, imagen } from 'semantic-ui-react';

const CardComponent = ({name, description, imagen}) => {
    return (
        <div>
  <Card>
    
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{imagen}</Card.Meta>
      <Card.Description>
       {description}
      </Card.Description>
    </Card.Content>
    
  </Card>


        </div>
    )
}

export default CardComponent;
