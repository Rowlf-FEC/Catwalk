import { Button, Icon, Grid } from 'semantic-ui-react';
import React from 'react';

function moreAndLess(showLess, showMore, count, arrOfObjs, nounString) {
  if (arrOfObjs.length > count + 1 && count > 1) {
    return (
      <Grid.Row className={`show_${nounString}_buttons`}>
        <div>
          <Button id="button" onClick={showLess}>
            <Icon name="angle up" />
            <u>
              Show Less&nbsp;
              {nounString}
            </u>
          </Button>
          <Button id="button" onClick={showMore}>
            <Icon name="angle down" />
            <u>
              Show More&nbsp;
              {nounString}
            </u>
          </Button>
        </div>
      </Grid.Row>
    );
  }
  if (arrOfObjs.length > count + 1) {
    return (
      <Grid.Row className={`show_${nounString}_buttons`}>
        <div>
          <Button id="button" onClick={showMore}>
            <Icon name="angle down" />
            <u>
              Show More&nbsp;
              {nounString}
            </u>
          </Button>
        </div>
      </Grid.Row>
    );
  }
  if (count > 1) {
    return (
      <Grid.Row className={`show_${nounString}_buttons`}>
        <div>
          <Button id="button" onClick={showLess}>
            <Icon name="angle up" />
            <u>
              Show Less&nbsp;
              {nounString}
            </u>
          </Button>
        </div>
      </Grid.Row>
    );
  }
  return <p />;
}

export default moreAndLess;
