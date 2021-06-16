import { Button, Icon, Grid } from 'semantic-ui-react';
import React from 'react';

// Just a helper function to render the "More Question/Answers" or "Less Questions/Answers" buttons
// Becuase it is similar logic in both AnswersList and QuestionsList

function moreAndLess(showLess, showMore, count, arrOfObjs, nounString, num) {
  if (arrOfObjs.length > count && count > num) {
    return (
      <Grid.Row className={`show_${nounString}_row`}>
        <div>
          <Button id={`button${nounString}`} onClick={showLess}>
            <Icon name="angle up" />
            <u>
              Show Less&nbsp;
              {nounString}
            </u>
          </Button>
          <Button id={`button${nounString}`} onClick={showMore}>
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
  if (arrOfObjs.length > count) {
    return (
      <Grid.Row className={`show_${nounString}_row`}>
        <div>
          <Button id={`button${nounString}`} onClick={showMore}>
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
  if (count > num) {
    return (
      <Grid.Row className={`show_${nounString}_row`}>
        <div>
          <Button id={`button${nounString}`} onClick={showLess}>
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
