/* eslint-disable operator-linebreak */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Icon, Image } from 'semantic-ui-react';

function ReviewBody({
  summary,
  body,
  recommend,
  photos,
  response,
}) {
  let prepended = null;
  let summaryCopy = summary.slice();

  if (summary.length > 60) {
    const shortSummary = summaryCopy.slice(0, 60);
    const endSummary = summaryCopy.slice(60);
    // let prependedBody = endSummary + body;

    summaryCopy = shortSummary.concat('...');
    prepended = '...'.concat(endSummary);
  }

  // const renderPhotos = () => {
  //   if (photos.length > 0) {
  //     console.log(photos);
  //     return (
  //       <div>
  //         {photos.map((photo) => (
  //           <div>photo</div>
  //         ))}
  //       </div>
  //     );
  //   } return null;
  // };

  return (
    <Grid.Row className="reviewBody" textAlign="left">
      <Grid.Column floated="left">
        <Container textAlign="left">
          <p className="reviewTitle">{summaryCopy}</p>
          <p>{prepended}</p>
          <p>
            {body}
          </p>
          <div>
            {photos.length > 0
              ? (
                <Image.Group size="tiny">
                  {photos.map((image) => (
                    <Image src={image.url} />
                  ))}
                </Image.Group>
              ) : null}
          </div>

          {response
            ? (
              <div style={{ margin: '10px' }}>
                <span style={{
                  borderStyle: 'none none solid solid',
                  borderWidth: '1px',
                  borderColor: 'lightGrey',
                  borderRadius: '4px',
                  padding: '3px 10px',
                }}>
                  {`Response from seller: ${response}`}
                </span>
              </div>
            ) : null}
          <div>
            {recommend ?
              (
                <div>
                  <Icon name="check" />
                  I recommend this product
                </div>
              ) : null}
          </div>
        </Container>
      </Grid.Column>
    </Grid.Row>
  );
}

ReviewBody.propTypes = {
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  recommend: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired,
  response: PropTypes.string,
};

ReviewBody.defaultProps = {
  response: null,
};

export default ReviewBody;
