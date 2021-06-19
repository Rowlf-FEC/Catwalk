import React from 'react';
import { Grid } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

function BottomBar() {
  return (
    <Grid
      className="bottomText"
      centered
      style={{ marginTop: '50px' }}
    >
      <Grid.Row centered columns={5} style={{ paddingBottom: '10px' }}>
        <Grid.Column className="footerLink" width={2} textAlign="left">
          <p>Terms of Use</p>
        </Grid.Column>
        <Grid.Column className="footerLink" width={2} textAlign="left">
          <p>Privacy Policy</p>
        </Grid.Column>
        <Grid.Column className="footerLink" width={3} textAlign="center">
          <p>Don&apos;t Sell My Info</p>
        </Grid.Column>
        <Grid.Column className="footerLink" width={2} textAlign="right">
          <p>About Us</p>
        </Grid.Column>
        <Grid.Column className="footerLink" width={2} textAlign="right">
          <p>Sitemap</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingTop: '0px', paddingBottom: '0px' }} centered columns={1}>
        <Grid.Column textAlign="center" style={{ borderTop: '1px solid black', paddingTop: '10px' }} width={11}>
          Created by Michael Williamson, Jason Wesson and Ryan May
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingTop: '0px' }} centered columns={1}>
        <Grid.Column textAlign="center" width={11}>
          2021 Rowlf Catwalk Front End Capstone
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

// RelatedItems.propTypes = {

// };

export default BottomBar;
