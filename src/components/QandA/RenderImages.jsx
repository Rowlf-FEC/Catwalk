import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

function RenderImages({ arr, bool }) {
  if (arr.length > 0 && bool) {
    return (
      <Grid.Row width={3} className="photos_row">
        <Image.Group size="small">
          {arr.map((pic) => <Image key={pic} src={pic} />)}
        </Image.Group>
      </Grid.Row>
    );
  }
  if (!bool) {
    return (
      <div id="submitThumbnails">
        <Image.Group size="tiny">
          {arr.map((pic) => <Image key={pic} src={pic} />)}
        </Image.Group>
      </div>
    );
  }
}

export default RenderImages;
