import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

function RenderImages({ arr }) {
  if (arr.length > 0) {
    return (
      <Grid.Row width={3} className="photos_row">
        <Image.Group size="small">
          {arr.map((pic) => <Image key={pic} src={pic} />)}
        </Image.Group>
      </Grid.Row>
    );
  }
}

export default RenderImages;
