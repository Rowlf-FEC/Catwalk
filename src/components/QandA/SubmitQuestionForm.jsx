import React, { useState } from 'react';
import axios from 'axios';
import validateSubmit from './validateSubmit';

function SubmitQuestionForm(props) {

  /** possible state neeeded:
  *
  *  Need productId
  *
  */

  // This is a pop up that overlays window

  // At top of window title should read "Ask your question about the [product name]"

  // Has a form layout with an input for:
    // "What is you email? *mandatory" input placeholder="Example: JaneDoe@gmail.com"
    // "what is your NickName *mandatory" input placeholder="Example: jackson11!"

  // Below email input it should say "For authorization reasons, you will not be emailed"

  // Below nickname input it should say "For privacy reasons do no use your full name or email address"

  // Answer body input should accept 1000 characters and placeholder="Your answer to question here"

  // Should have "Submit Question" button that VALIDATES form before submitting

}

export default SubmitQuestionForm;