import React, { useState } from 'react';
import axios from 'axios';
import SubmitPhotoPopUp from './SubmitPhotoPopUp';
import validateSubmit from './validateSubmit';

function SubmitAnswer(props) {

    /** possible state neeeded:
  *
  *
  *
  */

  // This is a pop up that overlays window

  // At top of window title should read "Submit your Answer for [product name]: [question body]"

  // Has a form layout with an input for:
    // "What is you email? *mandatory" input placeholder="Example: JaneDoe@gmail.com"
    // "what is your NickName *mandatory" input placeholder="Example: jackson11!"

  // Below email input it should say "For authorization reasons, you will not be emailed"

  // Below nickname input it should say "For privacy reasons do no use your full name or email address"

  // Answer body input should accept 1000 characters and placeholder="Your answer to question here"

  // Should have "upload photos" button that is separate pop up window

  // Should have "Submit Answer" button that VALIDATES form before submitting

}

export default SubmitAnswer;